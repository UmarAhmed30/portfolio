'use client';

import { useColor } from '@/contexts/ColorContext';

export default function Footer() {
    const { headerColor, mutedColor, backgroundColor } = useColor();
    
    // Determine overlay opacity based on background color
    // Minimal effect for black/white, stronger for colors
    const isBlackOrWhite = backgroundColor === '#000000' || backgroundColor === '#FFFFFF';
    const overlayOpacity = isBlackOrWhite ? 'opacity-10' : 'opacity-50';

    return (
        <footer id="contact" className="mt-24 pb-12">
            {/* Colophon - aligned left */}
            <div className="mb-32">
                <div>
                    <h2 className="text-3xl font-medium mb-4" style={{ color: headerColor }}>Colophon</h2>
                    <p className="text-sm mb-1" style={{ color: mutedColor }}>
                        Design and code by <span style={{ color: headerColor }}>Umar Ahmed</span> and <span style={{ color: headerColor }}>Claude</span>
                    </p>
                    <p className="text-sm mb-1" style={{ color: mutedColor }}>
                        Inspired by <span style={{ color: headerColor }}>Billy Sweeney</span>
                    </p>
                    <p className="text-sm mb-1" style={{ color: mutedColor }}>
                        Built with <span style={{ color: headerColor }}>Next.js</span> and <span style={{ color: headerColor }}>Tailwind CSS</span>
                    </p>
                    <p className="text-sm mb-4" style={{ color: mutedColor }}>
                        Typeset in <span style={{ color: headerColor }}>Outfit</span> by <span style={{ color: headerColor }}>Google Fonts</span>
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
                                    Open to Work
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
                                I'm looking for a summer internship
                            </p>
                        </div>
                    </div>

                    {/* Contact links */}
                    <div className="flex flex-col gap-3">
                        {/* Email addresses on same line */}
                        <div className="flex gap-6 items-center flex-wrap">
                            <a 
                                href="mailto:umar.ahmed.t.30@gmail.com"
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
                                umar.ahmed.t.30@gmail.com
                            </a>
                            <a 
                                href="mailto:umarahmed.thameemahmed@colorado.edu"
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
                                umarahmed.thameemahmed@colorado.edu
                            </a>
                        </div>
                        
                        {/* Social links on same line */}
                        <div className="flex gap-6 items-center">
                            <a 
                                href="https://github.com/UmarAhmed30"
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
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/umarahmed2000/"
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
                            <a 
                                href="/files/UmarAhmed_ThameemAhmed_SWEResume.pdf"
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
                                Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right column - Photo */}
                <div className="flex justify-end items-start">
                    <div className="relative w-full max-w-md h-[500px] rounded-sm overflow-hidden">
                        <img 
                            src="/images/me.jpg" 
                            alt="Umar Ahmed"
                            className="w-full h-full object-cover object-top"
                        />
                        {/* Color overlay that changes with theme */}
                        <div 
                            className={`absolute inset-0 mix-blend-hard-light transition-colors duration-300 ${overlayOpacity}`}
                            style={{ backgroundColor }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
