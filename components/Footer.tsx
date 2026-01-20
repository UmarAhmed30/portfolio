'use client';

import { useColor } from '@/contexts/ColorContext';

export default function Footer() {
    const { headerColor, mutedColor } = useColor();

    return (
        <footer id="contact" className="mt-24 pb-12">
            {/* Colophon - aligned left */}
            <div className="mb-32">
                <div>
                    <h2 className="text-3xl font-medium mb-4" style={{ color: headerColor }}>Colophon</h2>
                    <p className="text-sm mb-1" style={{ color: mutedColor }}>
                        Design and code by <span style={{ color: headerColor }}>Billy Sweeney</span>
                    </p>
                    <p className="text-sm mb-4" style={{ color: mutedColor }}>
                        Typeset in <span style={{ color: headerColor }}>Roobert Medium</span> by <span style={{ color: headerColor }}>Displaay Type Foundry</span>
                    </p>
                    <p className="text-sm" style={{ color: mutedColor }}>© 2025</p>
                </div>
            </div>

            {/* Main content - two columns */}
            <div className="grid grid-cols-2 gap-16">
                {/* Left column - Status and contact */}
                <div className="flex flex-col justify-between min-h-[400px]">
                    {/* Status */}
                    <div>
                        <div className="mb-4">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center">
                                    <div 
                                        className="w-2 h-2 rounded-full" 
                                        style={{ backgroundColor: mutedColor }}
                                    />
                                    <div 
                                        className="absolute w-2 h-2 rounded-full animate-radiate" 
                                        style={{ color: mutedColor }}
                                    />
                                </div>
                                <p className="text-base" style={{ color: mutedColor }}>
                                    No longer exploring new opportunities
                                </p>
                            </div>
                            <p 
                                className="font-medium mt-2" 
                                style={{ 
                                    color: headerColor,
                                    fontSize: '32px',
                                    lineHeight: '38px',
                                }}
                            >
                                I&apos;ve recently joined Figma.
                            </p>
                        </div>
                    </div>

                    {/* Contact links */}
                    <div className="flex gap-8">
                        <a 
                            href="mailto:billy.sweeney@gmail.com"
                            className="text-base font-medium"
                            style={{ 
                                color: headerColor,
                                textDecoration: 'underline',
                                textDecorationStyle: 'dotted',
                                textUnderlineOffset: '2px',
                                textDecorationThickness: '1px',
                                textDecorationColor: mutedColor,
                            }}
                        >
                            billy.sweeney@gmail.com
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/billysweeney"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium"
                            style={{ 
                                color: headerColor,
                                textDecoration: 'underline',
                                textDecorationStyle: 'dotted',
                                textUnderlineOffset: '2px',
                                textDecorationThickness: '1px',
                                textDecorationColor: mutedColor,
                            }}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right column - Photo placeholder */}
                <div className="flex justify-end">
                    <div 
                        className="w-full max-w-md h-[500px] bg-gray-800 rounded-sm"
                        style={{ backgroundColor: `${mutedColor}30` }}
                    >
                        {/* Photo placeholder - replace with actual image */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
