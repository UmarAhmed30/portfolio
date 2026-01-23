'use client';

import { useColor } from '@/contexts/ColorContext';

export default function Footer() {
    const { headerColor, mutedColor, backgroundColor } = useColor();
    
    // Determine overlay opacity based on background color
    // Minimal effect for black/white, stronger for colors
    const isBlackOrWhite = backgroundColor === '#000000' || backgroundColor === '#FFFFFF';
    const overlayOpacity = isBlackOrWhite ? 'opacity-10' : 'opacity-50';

    return (
        <footer id="contact" className="mt-8 sm:mt-12 md:mt-18 lg:mt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12 px-0">
            {/* Section Title - Mobile/Tablet Only */}
            <h2 className="text-2xl sm:text-3xl font-medium mb-8 sm:mb-10 md:mb-12 lg:hidden" style={{ color: headerColor }}>
                Contact
            </h2>
            
            {/* Colophon - aligned left */}
            <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
                <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 md:mb-4" style={{ color: headerColor }}>Colophon</h2>
                    <p className="text-xs sm:text-sm mb-1" style={{ color: mutedColor }}>
                        Design and code by <span style={{ color: headerColor }}>Umar Ahmed</span> and <span style={{ color: headerColor }}>Claude</span>
                    </p>
                    <p className="text-xs sm:text-sm mb-1" style={{ color: mutedColor }}>
                        Inspired by <span style={{ color: headerColor }}>Billy Sweeney</span>
                    </p>
                    <p className="text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: mutedColor }}>
                        Typeset in <span style={{ color: headerColor }}>Outfit</span> by <span style={{ color: headerColor }}>Google Fonts</span>
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: mutedColor }}>© 2025</p>
                </div>
            </div>

            {/* Main content - responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {/* Left column - Status and contact */}
                <div className="flex flex-col justify-between min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
                    {/* Status */}
                    <div>
                        <div className="mb-4">
                            <div className="flex items-center gap-2 sm:gap-3">
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
                                <p className="text-sm sm:text-base" style={{ color: mutedColor }}>
                                    Open to Work
                                </p>
                            </div>
                            <p 
                                className="font-medium mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl" 
                                style={{ 
                                    color: headerColor,
                                    lineHeight: '1.2',
                                }}
                            >
                                I'm looking for a summer internship
                            </p>
                        </div>
                    </div>

                    {/* Contact links */}
                    <div className="flex flex-col gap-3">
                        {/* Email addresses - responsive layout */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 items-start flex-wrap">
                            <a 
                                href="mailto:umar.ahmed.t.30@gmail.com"
                                className="text-xs sm:text-sm md:text-base font-medium break-all"
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
                                className="text-xs sm:text-sm md:text-base font-medium break-all"
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
                        
                        {/* Social links - responsive layout */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center">
                            <a 
                                href="https://github.com/UmarAhmed30"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base font-medium"
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
                                className="text-sm sm:text-base font-medium"
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
                                className="text-sm sm:text-base font-medium"
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
                <div className="flex justify-start lg:justify-end items-start mt-6 sm:mt-8 lg:mt-0">
                    <div className="relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-md h-[320px] sm:h-[380px] md:h-[420px] lg:h-[500px] rounded-sm overflow-hidden shadow-lg">
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
