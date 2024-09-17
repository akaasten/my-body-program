import React from 'react';
import NumberTicker from '@/components/NumberTicker';

type Stat = {
    value: number;
    unit?: string;
    label: string;
};

type StatsProps = {
    sectionTitle: string;
    sectionSubtitle: string;
    stats: Stat[];
};

const Stats = (stats: StatsProps) => {
    return (
        <section className='py-20 xl:pt-24 xl:pb-32 bg-primary20'>
            <div className='container px-4 mx-auto'>
                <div className='text-center'>
                    <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl'>
                        NOS CHIFFRES
                    </span>
                    <h2 className='mb-4 text-4xl md:text-5xl font-extrabold tracking-tighter text-white'>{stats.sectionTitle}</h2>
                    <h3 className='mb-16 xl:mb-24 mx-auto text-lg md:text-xl text-white font-medium max-w-4xl'>{stats.sectionSubtitle}</h3>
                    <div className='flex flex-wrap justify-center -mx-4'>
                        {stats.stats.map((stat, index) => (
                            <div key={index} className='w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0'>
                                <div className='mb-2 text-4xl md:text-5xl text-white'>
                                    <NumberTicker value={stat.value} unit={stat.unit} />
                                </div>
                                <p className='text-lg md:text-xl text-white font-medium pt-4'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
