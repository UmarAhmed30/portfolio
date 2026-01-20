'use client';

import { useColor } from '@/contexts/ColorContext';
import { ProjectItemProps } from '@/types/project';
import Image from 'next/image';

export default function ProjectItem({ project, index, isImageLeft }: ProjectItemProps) {
    const { headerColor, textColor } = useColor();

    return (
        <div className="w-full py-24 max-lg:py-16 max-md:py-12">
            <div className={`flex gap-16 items-center ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} max-lg:flex-col max-lg:gap-12`}>
                {/* Image Section - Landscape format */}
                <div className="flex-1 max-w-[550px] max-lg:max-w-none">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="object-cover"
                            priority={index < 2} // Prioritize loading for first two images
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
                    </div>
                </div>
            </div>
        </div>
    );
}