'use client';

import { useColor } from '@/contexts/ColorContext';
import AdaptiveLogo from './AdaptiveLogo';

const education = [
    {
        logo: "/images/logos/cub.png",
        school: "University of Colorado Boulder",
        degree: "MS - Computer Science",
        year: "Now",
        location: "Boulder",
        cgpa: "4.0/4.0",
        description: "Focusing on distributed systems, ML infrastructure & scalable backend architectures."
    },
    {
        logo: "/images/logos/ceg.png",
        school: "College of Engineering Guindy, Anna University",
        degree: "BE - Computer Science & Engineering",
        year: "2018–2022",
        location: "Chennai",
        cgpa: "8.75/10",
        description: "CEG_ACTIVITIES" // Special marker for custom rendering with links
    },
];

export default function Education() {
    const { headerColor, textColor, mutedColor } = useColor();

    return (
        <section id="education" className="mb-16 sm:mb-24 md:mb-36 lg:mb-48">
            {/* Section Title - Mobile/Tablet Only */}
            <h2 className="text-2xl sm:text-3xl font-medium mb-8 sm:mb-10 md:mb-12 lg:hidden" style={{ color: headerColor }}>
                Education
            </h2>
            
            <ul className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
                {education.map((edu) => (
                    <li key={edu.school + edu.degree} className="flex flex-col">
                        <div>
                            <div className="mb-6 sm:mb-8">
                                <AdaptiveLogo 
                                    src={edu.logo}
                                    alt={edu.school}
                                    size={64}
                                    logoScale={0.6}
                                />
                            </div>
                            <h3 className="font-medium text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4" style={{ color: headerColor }}>{edu.school}</h3>
                            <p 
                                className="font-medium mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl" 
                                style={{ 
                                    color: headerColor,
                                    lineHeight: '0.9',
                                }}
                            >
                                {edu.degree}
                            </p>
                            <div className="text-sm sm:text-base md:text-base font-medium" style={{ color: headerColor }}>
                                <span>{edu.year}</span>
                                <span className="ml-2">{edu.location}</span>
                                <span className="ml-2">{edu.cgpa}</span>
                            </div>
                        </div>
                        <div className="text-sm sm:text-base md:text-base leading-relaxed max-w-[60ch] font-normal mt-1" style={{ color: textColor }}>
                            {edu.description === "CEG_ACTIVITIES" ? (
                                <p>
                                    Built a strong foundation. Served as the Web Developer for{' '}
                                    <a 
                                        href="https://www.cseaceg.org.in/"
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
                                        Computer Science and Engineering Association
                                    </a>
                                    {' '}and{' '}
                                    <a 
                                        href="https://cegtechforum.in/"
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
                                        CEG Tech Forum
                                    </a>.
                                </p>
                            ) : (
                                <p>{edu.description}</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
