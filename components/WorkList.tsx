'use client';

import { useColor } from '@/contexts/ColorContext';

const projects = [
    {
        logo: "F",
        title: "Figma",
        role: "Product Designer",
        year: "Now",
        location: "Seattle",
        description: "Working on design systems products."
    },
    {
        logo: "C",
        title: "Cocoon",
        role: "Director of Design",
        year: "2023",
        location: "Seattle",
        description: "I led and executed design across product and brand, built a team from the ground up, significantly increased conversion, and directed a company rebrand, as we worked to build the leave management platform our loved ones deserve."
    },
    {
        logo: "D",
        title: "Dropbox",
        role: "Staff Product Designer",
        year: "2020–2022",
        location: "Seattle",
        description: "I led the design of a complete web product redesign, several emerging zero to one products, as well as global navigation systems and information architecture for the company's multi-product strategy."
    },
    {
        logo: "F",
        title: "Facebook",
        role: "Product Designer",
        year: "2018–2020",
        location: "Seattle",
        description: "I worked on Marketplace, leading design for the browse feed, buyer platform, vehicles category, and design systems, enabling dozens of teams to ship with consistency and performance to hundreds of millions of users."
    },
    {
        logo: "T",
        title: "Thread",
        role: "Head of Design",
        year: "2017–2018",
        location: "London",
        description: "I was brought on to both lead and individually execute design across all company initiatives as we built a deeply personalized online shopping product which blended a team of human stylists with machine learning."
    },
    {
        logo: "S",
        title: "Squarespace",
        role: "Design Lead",
        year: "2011–2017",
        location: "New York · Portland",
        description: "As an early design hire, I wore many hats across brand and product design during my tenure, helping to redefine web publishing and establish the company into household name."
    },
    {
        logo: "F",
        title: "Freelance",
        role: "Designer and Director",
        year: "2008–2019",
        location: "New York · London · Seattle · Portland · Tempe",
        description: "I've been commissioned to create custom websites, apps, and identity systems for select clients including National Geographic photographers, Academy award-winning film-makers, and global entrepreneurs."
    },
];

export default function WorkList() {
    const { headerColor, textColor } = useColor();

    return (
        <section id="work" className="mb-48">
            {/* Background content */}
            <p className="max-w-[60ch] leading-relaxed text-base font-medium mb-24" style={{ color: headerColor }}>
                I studied visual communication design, got my start in branding, marketing, and web design, then evolved to specialize in product design. Leveraging my visual design foundation and deep user empathy, I've established myself as a well rounded design leader who creates human-centered platforms with cohesive throughlines at every touchpoint: from vision and strategy, to brand awareness and marketing, to product development and delightful micro interactions. Throughout my 15 years of professional experience, I've worked freelance, in-house, at startups, and at established public companies, developing a wide range of multi-disciplinary skills in diverse contexts. My insatiable curiosity, high craft, and adaptability, enable me to generate impact in our ever-changing environment.
            </p>
            
            {/* Work list */}
            <ul className="space-y-20">
                {projects.map((p) => (
                    <li key={p.title} className="flex flex-col">
                        <div>
                            <div className="text-6xl font-medium mb-8" style={{ color: headerColor }}>{p.logo}</div>
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
                            <p>{p.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
