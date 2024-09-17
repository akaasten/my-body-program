'use client';

import { cn } from '@/libs/utils';
import { videoType } from '@/libs/videos';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Props for the Marquee component
 */
interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: any;
}

/**
 * Props for the VideoSlider component
 */
interface VideoSliderProps {
    videosToDisplay: videoType[];
}

/**
 * VideoSlider component that displays a marquee of videos
 * @param {VideoSliderProps} props - The props for the VideoSlider component
 * @returns {React.ReactElement} The rendered VideoSlider component
 */
const VideoSlider: React.FC<VideoSliderProps> = ({ videosToDisplay }): React.ReactElement => {
    return (
        <div className='relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl py-10 lg:py-16'>
            <Marquee pauseOnHover className='[--duration:20s]'>
                {videosToDisplay.map((video, index) => (
                    <VideoCard key={index} video={video} />
                ))}
            </Marquee>
            {/* Gradient overlays for smooth transition effect */}
            <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
            <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
        </div>
    );
};

/**
 * Marquee component for continuous scrolling effect
 * @param {MarqueeProps} props - The props for the Marquee component
 * @returns {React.ReactElement} The rendered Marquee component
 */
const Marquee: React.FC<MarqueeProps> = ({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}): React.ReactElement => {
    return (
        <div
            {...props}
            className={cn(
                'group flex overflow-hidden p-2 [--duration:40s] [--gap:4rem] [gap:var(--gap)]',
                {
                    'flex-row': !vertical,
                    'flex-col': vertical,
                },
                className
            )}
        >
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
                        'animate-marquee flex-row': !vertical,
                        'animate-marquee-vertical flex-col': vertical,
                        'group-hover:[animation-play-state:paused]': pauseOnHover,
                        '[animation-direction:reverse]': reverse,
                    })}
                >
                    {children}
                </div>
            ))}
        </div>
    );
};

/**
 * VideoCard component to display individual videos
 * @param {Object} props - The props for the VideoCard component
 * @param {videoType} props.video - The video to display
 * @returns {React.ReactElement} The rendered VideoCard component
 */
const VideoCard: React.FC<{ video: videoType }> = ({ video }): React.ReactElement => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    // Play or pause the video based on its visibility
    if (videoRef.current) {
        if (inView) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    return (
        <div className='flex flex-row items-center' ref={ref}>
            <video ref={videoRef} src={video.src} height={700} width={250} className='rounded-lg' loop muted playsInline preload='metadata' />
        </div>
    );
};

export default VideoSlider;
