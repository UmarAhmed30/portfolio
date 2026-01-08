'use client';

import React, { useState } from 'react';
import { useColor } from '@/contexts/ColorContext';

const firstMessages: { [key: string]: string } = {
    'For anyone': "Hello there, I'm a designer who cares about making beautiful things that help people.",
    'Recruiters': "I'm a product designer with 15 years of experience across brand and product, at companies large and small. I'm not actively looking for a new role.",
    'Design Directors': "I take pride in my craft, and love mentoring earlier career designers. I develop cross functional partnerships, and thrive in complex, ambiguous environments.",
    'Product Designers': "I'm a systems thinker with a high bar for quality. From process to pixels, I'll collaborate with you, learn from you, and help make something we're proud of.",
    'Product Managers': "I bring end-to-end product acumen, from vision and strategy to discovery and delivery. I'll partner closely with you to generate the highest impact possible.",
    'Engineers': "I'm {highly_technical} and while (I'm ≠ engineer) I know my way /around & can speak \"fluently\" with you; I built (this.site) from scratch + (this.one) && (this.too)."
};

const audiences = ['For anyone', 'Recruiters', 'Design Directors', 'Product Designers', 'Product Managers', 'Engineers'];

export default function Hero() {
    const [selectedAudience, setSelectedAudience] = useState('For anyone');
    const firstMessage = firstMessages[selectedAudience] || firstMessages['For anyone'];
    const { headerColor, mutedColor } = useColor();

    return (
        <section id="intro" className="min-h-[70vh] flex flex-col justify-start mt-16 pt-32 mb-32" style={{ width: 'calc(69vw - 7rem)' }}>
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
