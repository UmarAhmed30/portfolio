'use client';

import { useColor } from '@/contexts/ColorContext';
import AdaptiveLogo from './AdaptiveLogo';

const experiences = [
    {
        logo: "/images/logos/cub.png",
        title: "University of Colorado Boulder",
        role: "Course Grader",
        year: "Now",
        location: "Boulder",
        description: "CU_BOULDER_COURSES",
        link: "https://www.colorado.edu/"
    },
    {
        logo: "/images/logos/cub.png",
        title: "Alferd Packer Grill",
        role: "Student Assistant",
        year: "2025",
        location: "Boulder",
        description: "Served students at the UMC, ensuring a positive dining experience while supporting team operations and maintaining service standards.",
        link: "https://www.colorado.edu/umc/dining"
    },
    {
        logo: "/images/logos/phronetic.png",
        title: "Phronetic AI (now Nueromind Technologies)",
        role: "SDE (ML)",
        year: "2024–2025",
        location: "Bangalore",
        description: "Architected the core infrastructure for AI-powered MVPs as a Founding Engineer. Built real-time ML pipelines, LLM-based services, and scalable backend systems using Python, Redis, AWS and MongoDB.",
        link: "https://www.phronetic.ai/"
    },
    {
        logo: "/images/logos/infibeam.png",
        title: "Infibeam Avenues",
        role: "SDE",
        year: "2022–2024",
        location: "Bangalore",
        description: "Built microservices for the JioMart e-commerce platform serving 11M+ monthly users using Ruby on Rails, MySQL, AngularJS, Redis, and Kubernetes. Was a part of: Catalog Management System (B2B + B2C), Seller Portal and Just-In-Time Inventory Management.",
        link: "https://www.ia.ooo/"
    },
    {
        logo: "/images/logos/totallr.png",
        title: "Totallr Technologies",
        role: "SDE Intern",
        year: "2021",
        location: "Chennai",
        description: "Worked on a Point-of-Sale application using Spring Boot and Angular.",
        link: "https://www.linkedin.com/products/totallr/?trk=organization_guest_main_product_card"
    },
    {
        logo: "/images/logos/vdart.png",
        title: "VDart Digital",
        role: "Technocrat Intern",
        year: "2020",
        location: "Atlanta",
        description: "Designed and delivered mobile interfaces for clients using Flutter and Figma.",
        link: "https://www.vdartdigital.com/"
    },
];

export default function Experience() {
    const { headerColor, textColor, mutedColor } = useColor();

    return (
        <section id="experience" className="mb-48">
            <ul className="space-y-20">
                {experiences.map((exp) => (
                    <li key={exp.title + exp.role} className="flex flex-col">
                        <div>
                            <div className="mb-8">
                                <AdaptiveLogo 
                                    src={exp.logo}
                                    alt={exp.title}
                                    size={64}
                                    logoScale={0.6}
                                />
                            </div>
                            <h3 className="font-medium text-xl mb-4">
                                <a 
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-opacity duration-200 hover:opacity-80"
                                    style={{ 
                                        color: headerColor,
                                        textDecoration: 'underline',
                                        textDecorationStyle: 'dotted',
                                        textUnderlineOffset: '2px',
                                        textDecorationThickness: '1px',
                                        textDecorationColor: mutedColor,
                                    }}
                                >
                                    {exp.title}
                                </a>
                            </h3>
                            <p 
                                className="font-medium mb-6" 
                                style={{ 
                                    color: headerColor,
                                    fontSize: '88px',
                                    lineHeight: '86px',
                                }}
                            >
                                {exp.role}
                            </p>
                            <div className="text-base font-medium" style={{ color: headerColor }}>
                                <span>{exp.year}</span>
                                <span className="ml-2">{exp.location}</span>
                            </div>
                        </div>
                        <div className="text-base leading-relaxed max-w-[60ch] font-normal mt-1" style={{ color: textColor }}>
                            {exp.description === "CU_BOULDER_COURSES" ? (
                                <div className="flex flex-col gap-4">
                                    <p>Designed rubrics, graded assignments and exams, and provided feedback to help students improve their understanding of course material.</p>
                                    
                                    <div className="flex flex-col gap-3 mt-2">
                                        <div className="leading-relaxed">
                                            <a 
                                                href="https://gowthamk.github.io/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-opacity duration-200 hover:opacity-80"
                                                style={{ 
                                                    color: headerColor,
                                                    textDecoration: 'underline',
                                                    textDecorationStyle: 'dotted',
                                                    textUnderlineOffset: '2px',
                                                    textDecorationThickness: '1px',
                                                    textDecorationColor: mutedColor,
                                                }}
                                            >
                                                CSCI 3155: Principles of Programming Languages
                                            </a>
                                            <span style={{ color: mutedColor }}>  •  Gowtham Kaki [Spring'26]</span>
                                        </div>
                                        <div className="leading-relaxed">
                                            <a 
                                                href="https://zhengxiao.math.colorado.edu/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-opacity duration-200 hover:opacity-80"
                                                style={{ 
                                                    color: headerColor,
                                                    textDecoration: 'underline',
                                                    textDecorationStyle: 'dotted',
                                                    textUnderlineOffset: '2px',
                                                    textDecorationThickness: '1px',
                                                    textDecorationColor: mutedColor,
                                                }}
                                            >
                                                MATH 2130: Introduction to Linear Algebra
                                            </a>
                                            <span style={{ color: mutedColor }}>  •  Zheng Xiao [Fall'25 && Spring'26]</span>
                                        </div>
                                        <div className="leading-relaxed">
                                            <a 
                                                href="https://math.colorado.edu/~mayr/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-opacity duration-200 hover:opacity-80"
                                                style={{ 
                                                    color: headerColor,
                                                    textDecoration: 'underline',
                                                    textDecorationStyle: 'dotted',
                                                    textUnderlineOffset: '2px',
                                                    textDecorationThickness: '1px',
                                                    textDecorationColor: mutedColor,
                                                }}
                                            >
                                                MATH 2001: Introduction to Discrete Mathematics
                                            </a>
                                            <span style={{ color: mutedColor }}>  •  Peter Mayr [ Fall'25 ]</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>{exp.description}</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
