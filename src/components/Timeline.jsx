import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';
function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-10 lg:my-20 mx-4 text-black dark:text-white">
            <div className="w-full md:w-7/12 relative">
            <Title>Timeline</Title>
                <ul className="">
                    {timeline.map((item, index) => (
                        <TimelineItem
                            key={index}
                            year={item.year}
                            title={item.title}
                            duration={item.duration}
                            details={item.details}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Timeline;