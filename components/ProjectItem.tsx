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
        <div className="w-full py-24 max-lg:py-16 max-md:py-12">
            <div className={`flex gap-16 items-center ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} max-lg:flex-col max-lg:gap-12`}>
                {/* Image Section - 1920x1080 aspect ratio */}
                <div className="flex-1 max-w-[550px] max-lg:max-w-none">
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
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
                <div className="flex-1 max-w-[600px] max-lg:max-w-none">
                    <div className="max-w-[70ch]">
                        {/* Project Title */}
                        <h2 
                            className="text-4xl font-medium mb-12 max-xl:text-3xl max-xl:mb-10 max-lg:text-2xl max-lg:mb-8 max-md:text-xl max-md:mb-6" 
                            style={{ color: headerColor }}
                        >
                            {project.title}
                        </h2>

                        {/* Content Sections Container */}
                        <div className="space-y-8 max-lg:space-y-6 max-md:space-y-4">
                            {/* The What Section */}
                            <div>
                                <h3 
                                    className="text-lg font-medium mb-3 max-lg:text-base max-lg:mb-2 max-sm:text-sm" 
                                    style={{ color: headerColor }}
                                >
                                    The What
                                </h3>
                                <p 
                                    className="text-base leading-relaxed font-normal max-lg:text-sm max-sm:text-xs" 
                                    style={{ color: textColor }}
                                >
                                    {project.what}
                                </p>
                            </div>

                            {/* The Why Section */}
                            <div>
                                <h3 
                                    className="text-lg font-medium mb-3 max-lg:text-base max-lg:mb-2 max-sm:text-sm" 
                                    style={{ color: headerColor }}
                                >
                                    The Why
                                </h3>
                                <p 
                                    className="text-base leading-relaxed font-normal max-lg:text-sm max-sm:text-xs" 
                                    style={{ color: textColor }}
                                >
                                    {project.why}
                                </p>
                            </div>

                            {/* The How Section */}
                            <div>
                                <h3 
                                    className="text-lg font-medium mb-3 max-lg:text-base max-lg:mb-2 max-sm:text-sm" 
                                    style={{ color: headerColor }}
                                >
                                    The How
                                </h3>
                                <p 
                                    className="text-base leading-relaxed font-normal max-lg:text-sm max-sm:text-xs" 
                                    style={{ color: textColor }}
                                >
                                    {project.how}
                                </p>
                            </div>
                        </div>

                        {/* Project Links */}
                        {(project.demoLink || project.githubLink) && (
                            <div className="flex gap-6 mt-8 max-lg:mt-6">
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
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
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
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
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