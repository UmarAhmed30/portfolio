'use client';

import React, { useState } from 'react';
import { useColor } from '@/contexts/ColorContext';

const firstMessages: { [key: string]: string } = {
    'For anyone': "Hey there, I'm a software engineer who loves building products that matter and writing code that lasts.",
    'Recruiters': "I'm a software engineer with 3 years of experience across distributed systems and ML infrastructure. Currently pursuing my MS in CS at CU Boulder and actively looking for summer 2026 internships.",
    'Founders': "I love the 0 to 1 journey. I've been a founding engineer before, owning infrastructure, shipping fast, and building AI-powered MVPs from scratch. I thrive in fast-paced, high-ownership environments.",
    'Engineers': "I geek out over distributed systems and ML pipelines. I've optimized LLMs, wrangled Kafka, and built backends that can serve millions. Always happy to jam on architecture or debug that tricky race condition.",
    'Hiring Managers': "I care about ownership and impact. I've led small teams, built systems end-to-end, and always aim to leave the codebase better than I found it. I'll collaborate, learn, and help make something we're proud of."
};

const audiences = ['For anyone', 'Recruiters', 'Founders', 'Engineers', 'Hiring Managers'];

export default function Hero() {
    const [selectedAudience, setSelectedAudience] = useState('For anyone');
    const firstMessage = firstMessages[selectedAudience] || firstMessages['For anyone'];
    const { headerColor, mutedColor } = useColor();

    return (
        <section id="intro" className="min-h-[70vh] flex flex-col justify-start mt-16 pt-32 mb-60" style={{ width: 'calc(69vw - 7rem)' }}>
            <div className="mb-8 flex flex-wrap gap-x-6 gap-y-4">
                {audiences.map((audience) => (
                    <button
                        key={audience}
                        onClick={() => setSelectedAudience(audience)}
                        className="text-sm font-medium transition-colors"
                        style={{ 
                            color: selectedAudience === audience ? headerColor : mutedColor,
                        }}
                    >
                        {audience}
                    </button>
                ))}
            </div>

            <h1 
                className="font-medium" 
                style={{ 
                    color: headerColor,
                    fontSize: '71px',
                    lineHeight: '84px',
                }}
            >
                {firstMessage}
            </h1>
        </section>
    );
}
