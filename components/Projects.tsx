'use client';

import { projects } from '@/data/projects';
import { useColor } from '@/contexts/ColorContext';
import ProjectItem from './ProjectItem';
import Container from './Container';

export default function Projects() {
    const { backgroundColor, headerColor } = useColor();

    return (
        <section 
            id="projects" 
            className="w-full min-h-screen py-6 sm:py-8 md:py-0"
            style={{ backgroundColor }}
        >
            <Container>
                {/* Section Title - Mobile/Tablet Only */}
                <h2 className="text-2xl sm:text-3xl font-medium mb-8 sm:mb-10 md:mb-12 lg:hidden" style={{ color: headerColor }}>
                    Projects
                </h2>
                
                <div className="w-full">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            index={index}
                            isImageLeft={index % 2 === 0} // Even indices (0, 2, 4) = left, Odd indices (1, 3, 5) = right
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}