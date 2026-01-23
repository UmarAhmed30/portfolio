'use client';

import { useColor } from '@/contexts/ColorContext';
import { ProjectItemProps } from '@/types/project';
import Image from 'next/image';

export default function ProjectItem({ project, index, isImageLeft }: ProjectItemProps) {
    const { headerColor, textColor, backgroundColor } = useColor();
    
    // Determine overlay opacity based on background color
    // Minimal effect for black/white, stronger for colors
    const isBlackOrWhite = backgroundColor === '#000000' || backgroundColor === '#FFFFFF';
    const overlayOpacity = isBlackOrWhite ? 'opacity-10' : 'opacity-50';

    return (
        <div className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-10 lg:px-0">
            <div className={`flex gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} lg:flex-row ${!isImageLeft && 'lg:flex-row-reverse'} md:flex-col sm:flex-col flex-col`}>
                {/* Image Section - 1920x1080 aspect ratio */}
                <div className="flex-1 w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-[550px]">
                    <div className="relative w-full aspect-[16/9] rounded-md sm:rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-cover"
                            priority={index < 2} // Prioritize loading for first two images
                        />
                        {/* Color overlay that changes with theme */}
                        <div 
                            className={`absolute inset-0 mix-blend-hard-light transition-colors duration-300 ${overlayOpacity}`}
                            style={{ backgroundColor }}
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 max-w-full sm:max-w-full md:max-w-full lg:max-w-[600px]">
                    <div className="max-w-[70ch]">
                        {/* Project Title */}
                        <h2 
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12" 
                            style={{ color: headerColor }}
                        >
                            {project.title}
                        </h2>

                        {/* Content Sections Container */}
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                            {/* The What Section */}
                            <div>
                                <h3 
                                    className="text-sm sm:text-base md:text-base lg:text-lg font-medium mb-2 sm:mb-2 md:mb-3" 
                                    style={{ color: headerColor }}
                                >
                                    The What
                                </h3>
                                <p 
                                    className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed font-normal" 
                                    style={{ color: textColor }}
                                >
                                    {project.what}
                                </p>
                            </div>

                            {/* The Why Section */}
                            <div>
                                <h3 
                                    className="text-sm sm:text-base md:text-base lg:text-lg font-medium mb-2 sm:mb-2 md:mb-3" 
                                    style={{ color: headerColor }}
                                >
                                    The Why
                                </h3>
                                <p 
                                    className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed font-normal" 
                                    style={{ color: textColor }}
                                >
                                    {project.why}
                                </p>
                            </div>

                            {/* The How Section */}
                            <div>
                                <h3 
                                    className="text-sm sm:text-base md:text-base lg:text-lg font-medium mb-2 sm:mb-2 md:mb-3" 
                                    style={{ color: headerColor }}
                                >
                                    The How
                                </h3>
                                <p 
                                    className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed font-normal" 
                                    style={{ color: textColor }}
                                >
                                    {project.how}
                                </p>
                            </div>
                        </div>

                        {/* Project Links */}
                        {(project.demoLink || project.githubLink) && (
                            <div className="flex gap-4 sm:gap-5 md:gap-6 mt-5 sm:mt-6 md:mt-7 lg:mt-8">
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-200 hover:opacity-60"
                                        style={{ color: headerColor }}
                                        title="View Demo"
                                    >
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                            className="sm:w-6 sm:h-6"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15,3 21,3 21,9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity duration-200 hover:opacity-60"
                                        style={{ color: headerColor }}
                                        title="View Code"
                                    >
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                            className="sm:w-6 sm:h-6"
                                        >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}