'use client';

import { useColor } from '@/contexts/ColorContext';
import AdaptiveLogo from './AdaptiveLogo';

const projects = [
    {
        logo: "/images/logos/cub.png",
        title: "University of Colorado Boulder",
        role: "Course Grader",
        year: "Now",
        location: "Boulder",
        description: "CU_BOULDER_COURSES" // Special marker for custom rendering
    },
    {
        logo: "/images/logos/cub.png",
        title: "Alferd Packer Grill",
        role: "Student Assistant",
        year: "2025",
        location: "Boulder",
        description: "Served students at the UMC, ensuring a positive dining experience while supporting team operations and maintaining service standards."
    },
    {
        logo: "/images/logos/phronetic.png",
        title: "Phronetic AI (now Nueromind Technologies)",
        role: "SDE (ML)",
        year: "2024–2025",
        location: "Bangalore",
        description: "Architected the core infrastructure for AI-powered MVPs as a Founding Engineer. Built real-time ML pipelines, LLM-based services, and scalable backend systems using Python, Redis, AWS and MongoDB."
    },
    {
        logo: "/images/logos/infibeam.png",
        title: "Infibeam Avenues",
        role: "SDE",
        year: "2022–2024",
        location: "Bangalore",
        description: "Built microservices for the JioMart e-commerce platform serving 11M+ monthly users using Ruby on Rails, MySQL, AngularJS, Redis, and Kubernetes. Was a part of: Catalog Management System (B2B + B2C), Seller Portal and Just-In-Time Inventory Management."
    },
    {
        logo: "/images/logos/totallr.png",
        title: "Totallr Technologies",
        role: "SDE Intern",
        year: "2021",
        location: "Chennai",
        description: "Worked on a Point-of-Sale application using Spring Boot and Angular."
    },
    {
        logo: "/images/logos/vdart.png",
        title: "VDart Digital",
        role: "Technocrat Intern",
        year: "2020",
        location: "Atlanta",
        description: "Designed and delivered mobile interfaces for clients using Flutter and Figma."
    },
];

export default function WorkList() {
    const { headerColor, textColor, mutedColor } = useColor();

    return (
        <section id="work" className="mb-48">
            {/* Background content */}
            <p className="max-w-[60ch] leading-relaxed text-base font-medium mb-24" style={{ color: headerColor }}>
                My passion for tech came from my{' '}
                <a 
                    href="https://www.linkedin.com/in/eshrath/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'underline',
                        textDecorationStyle: 'dotted',
                        textUnderlineOffset: '2px',
                        textDecorationThickness: '1px',
                        textDecorationColor: mutedColor,
                    }}
                >
                    uncle
                </a>
                , a first-generation software engineer who moved to the US for work, and my{' '}
                <a 
                    href="https://www.linkedin.com/in/haafeeza/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'underline',
                        textDecorationStyle: 'dotted',
                        textUnderlineOffset: '2px',
                        textDecorationThickness: '1px',
                        textDecorationColor: mutedColor,
                    }}
                >
                    mom
                </a>
                , an assistant professor who taught computer science. It led me to study computer science and engineering. Fascinated by the idea of creating for a mass audience, I started building event websites at my undergraduate university. From there on I began my full-time career at Infibeam, working on e-commerce systems at scale. Later I transitioned to Nueromind Technologies and worked on some cool stuff in the AI space. Here is where I learnt to build products from the ground up. Both were invaluable experiences that shaped how I think about systems: one taught me to develop and manage at scale, the other to build from zero. My time at Nueromind Technologies also pushed me to pursue graduate studies. I&apos;m currently at CU Boulder for my Master&apos;s in Computer Science, focusing on systems that power AI and ML applications. Throughout my academic and professional experience, I&apos;ve developed skills across backend development, cloud infrastructure, and AI-powered products. My curiosity drives me to tackle hard problems, my ownership mindset keeps me accountable end to end, and my love for learning keeps me growing with every challenge.
            </p>
            
            {/* Work list */}
            <ul className="space-y-20">
                {projects.map((p) => (
                    <li key={p.title} className="flex flex-col">
                        <div>
                            {p.logo.startsWith('/') ? (
                                <div className="mb-8">
                                    <AdaptiveLogo 
                                        src={p.logo}
                                        alt={p.title}
                                        size={64}
                                        logoScale={0.6}
                                    />
                                </div>
                            ) : (
                                <div className="text-6xl font-medium mb-8" style={{ color: headerColor }}>{p.logo}</div>
                            )}
                            <h3 className="font-medium text-xl mb-4" style={{ color: headerColor }}>{p.title}</h3>
                            <p 
                                className="font-medium mb-6" 
                                style={{ 
                                    color: headerColor,
                                    fontSize: '88px',
                                    lineHeight: '86px',
                                }}
                            >
                                {p.role}
                            </p>
                            <div className="text-base font-medium" style={{ color: headerColor }}>
                                <span>{p.year}</span>
                                <span className="ml-2">{p.location}</span>
                            </div>
                        </div>
                        <div className="text-base leading-relaxed max-w-[60ch] font-normal mt-1" style={{ color: textColor }}>
                            {p.description === "CU_BOULDER_COURSES" ? (
                                <div className="flex flex-col gap-4">
                                    <p>Designed rubrics, graded assignments and exams, and provided feedback to help students improve their understanding of course material.</p>
                                    
                                    {/* Simple line-by-line course listing */}
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
                                <p>{p.description}</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
