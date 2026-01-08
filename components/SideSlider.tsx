'use client';

import React, { useState, useEffect } from 'react';
import ColorSlider from './ColorSlider';
import { useColor } from '@/contexts/ColorContext';

export default function SideSlider() {
    const { colorIndex, textColor, headerColor, setColorIndex } = useColor();
    const [activeSection, setActiveSection] = useState('intro');
    const [isHoveringLogo, setIsHoveringLogo] = useState(false);

    const navItems = [
        { id: 'intro', label: 'Intro' },
        { id: 'values', label: 'Values' },
        { id: 'work', label: 'Background' },
        { id: 'references', label: 'References' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {/* Left side - Logo and Navigation (centered vertically) */}
            <div 
                className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-start z-50"
            >
                {/* Logo/Name */}
                <div 
                    className="font-medium mb-8 whitespace-nowrap flex cursor-default"
                    style={{ fontSize: '30px', color: headerColor }}
                    onMouseEnter={() => setIsHoveringLogo(true)}
                    onMouseLeave={() => setIsHoveringLogo(false)}
                >
                    <span>B</span>
                    <span
                        style={{
                            display: 'inline-block',
                            opacity: isHoveringLogo ? 1 : 0,
                            maxWidth: isHoveringLogo ? '200px' : '0px',
                            transform: isHoveringLogo ? 'translateX(0)' : 'translateX(-10px)',
                            overflow: 'hidden',
                            transition: 'opacity 0.4s ease-out, max-width 0.4s ease-out, transform 0.4s ease-out',
                        }}
                    >
                        illy Sweeney
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1 flex flex-col items-start">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="transition-colors duration-200"
                            style={{ 
                                color: activeSection === item.id ? headerColor : textColor,
                                fontSize: '13px',
                            }}
                            title={item.label}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right side - Color Slider (centered vertically) */}
            <div 
                className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
            >
                <ColorSlider
                    value={colorIndex}
                    onChange={setColorIndex}
                    min={0}
                    max={16}
                    steps={17}
                    textColor={textColor}
                />
            </div>
        </>
    );
}
