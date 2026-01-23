// TypeScript interfaces for project data structures

export interface Project {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  what: string;
  why: string;
  how: string;
  demoLink?: string;
  githubLink?: string;
}

export interface ProjectItemProps {
  project: Project;
  index: number;
  isImageLeft: boolean;
}

export interface ProjectsProps {
  // No props needed - uses internal project data
}