'use client';

import React, { useState } from 'react';
import { useColor } from '@/contexts/ColorContext';

const firstMessages: { [key: string]: string } = {
    'For anyone': "Hey there, I'm a software engineer who loves building products that matter and writing code that lasts.",
    'Recruiters': "I'm a software engineer with 3 years of experience across distributed systems and ML infrastructure. Currently pursuing my MS in CS at CU Boulder and actively looking for summer 2026 internships.",
    'Founders': "I love the 0 to 1 journey. I've been a founding engineer before, owning infrastructure, shipping fast, and building AI-powered MVPs from scratch. I thrive in fast-paced, high-ownership environments.",
    'Engineers': "I like big systems, small latencies, and code that doesn't wake anyone up at night. I've worked on backend services at scale, dealt with enough edge cases and defintely trust metrics more than vibes.",
    'Hiring Managers': "I care about ownership and impact. I've led small teams, built systems end-to-end, and always aim to leave the codebase better than I found it. I'll collaborate, learn, and help make something we're proud of."
};

const audiences = ['For anyone', 'Recruiters', 'Founders', 'Engineers', 'Hiring Managers'];

export default function Hero() {
    const [selectedAudience, setSelectedAudience] = useState('For anyone');
    const firstMessage = firstMessages[selectedAudience] || firstMessages['For anyone'];
    const { headerColor, mutedColor } = useColor();

    return (
        <section id="intro" className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] flex flex-col justify-start mt-2 sm:mt-4 md:mt-6 lg:mt-8 pt-6 sm:pt-10 md:pt-12 lg:pt-16 mb-16 sm:mb-20 md:mb-24 lg:mb-60 w-full">
            <div className="mb-4 sm:mb-6 md:mb-7 lg:mb-8 flex flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-6 gap-y-2 sm:gap-y-3 md:gap-y-4">
                {audiences.map((audience) => (
                    <button
                        key={audience}
                        onClick={() => setSelectedAudience(audience)}
                        className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium transition-colors whitespace-nowrap"
                        style={{ 
                            color: selectedAudience === audience ? headerColor : mutedColor,
                        }}
                    >
                        {audience}
                    </button>
                ))}
            </div>

            <h1 
                className="font-medium text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-tight md:leading-normal" 
                style={{ 
                    color: headerColor,
                }}
            >
                {firstMessage}
            </h1>
        </section>
    );
}
