'use client';

import { projects } from '@/data/projects';
import { useColor } from '@/contexts/ColorContext';
import ProjectItem from './ProjectItem';
import Container from './Container';

export default function Projects() {
    const { backgroundColor } = useColor();

    return (
        <section 
            id="projects" 
            className="w-full min-h-screen"
            style={{ backgroundColor }}
        >
            <Container>
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