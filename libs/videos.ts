import path from 'path';
import fs from 'fs';

/**
 * Represents a video object with its source URL.
 */
export interface videoType {
    src: string;
}

/**
 * Loads MP4 file paths from the specified directory for the home slider.
 *
 * This function reads all MP4 files from the 'public/home/videos' directory
 * and returns an array of videoType objects.
 *
 * @returns {videoType[]} An array of VideoType objects.
 *
 * @throws {Error} Throws an error if the directory cannot be read.
 */
export function loadHomeSliderVideos(): videoType[] {
    const videosDirectory: string = path.join(process.cwd(), 'public', 'home', 'videos');

    // Filter and process MP4 files
    const fileNames: string[] = fs.readdirSync(videosDirectory).filter((fileName: string) => fileName.endsWith('.mp4'));

    // Return videoType objects with full paths of MP4 files
    return fileNames.map(
        (fileName: string): videoType => ({
            src: path.join('/home/videos', fileName),
        })
    );
}
