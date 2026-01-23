'use client';

import React, { useState, useEffect } from 'react';
import ColorSlider from './ColorSlider';
import ColorSliderHorizontal from './ColorSliderHorizontal';
import { useColor } from '@/contexts/ColorContext';

export default function SideSlider() {
    const { colorIndex, textColor, headerColor, backgroundColor, setColorIndex } = useColor();
    const [activeSection, setActiveSection] = useState('intro');
    const [isHoveringLogo, setIsHoveringLogo] = useState(false);

    const navItems = [
        { id: 'intro', label: 'Intro' },
        { id: 'values', label: 'Values' },
        { id: 'work', label: 'Background' },
        { id: 'education', label: 'Education' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // navItems is a constant array, safe to omit from dependencies

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = id === 'projects' ? 0 : 80; // No offset for full-screen projects section
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
            {/* Mobile & Tablet Navigation Header */}
            <div className="fixed top-0 left-0 right-0 z-50 xl:hidden backdrop-blur-md bg-opacity-90" style={{ backgroundColor: `${backgroundColor}E6` }}>
                <div className="flex flex-col px-6 sm:px-8 md:px-10 py-4 sm:py-5 gap-3">
                    <div 
                        className="font-medium text-lg sm:text-xl md:text-2xl"
                        style={{ color: headerColor }}
                    >
                        Umar Ahmed
                    </div>
                    <ColorSliderHorizontal
                        value={colorIndex}
                        onChange={setColorIndex}
                        min={0}
                        max={16}
                        steps={17}
                        textColor={textColor}
                    />
                </div>
            </div>

            {/* Desktop Navigation - Left side - Logo and Navigation (centered vertically) */}
            <div 
                className="fixed left-3 sm:left-4 md:left-4 lg:left-4 top-1/2 -translate-y-1/2 flex-col items-start z-50 hidden xl:flex"
            >
                {/* Logo/Name */}
                <div 
                    className="font-medium mb-6 lg:mb-8 whitespace-nowrap flex cursor-default"
                    style={{ fontSize: '28px', color: headerColor }}
                    onMouseEnter={() => setIsHoveringLogo(true)}
                    onMouseLeave={() => setIsHoveringLogo(false)}
                >
                    <span>U</span>
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
                        mar Ahmed
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1 flex flex-col items-start">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="transition-colors duration-200 hover:opacity-80 text-xs lg:text-sm"
                            style={{ 
                                color: activeSection === item.id ? headerColor : textColor,
                                fontWeight: activeSection === item.id ? '500' : '400',
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
                className="fixed right-3 sm:right-4 md:right-4 lg:right-4 top-1/2 -translate-y-1/2 z-50 hidden xl:block"
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
