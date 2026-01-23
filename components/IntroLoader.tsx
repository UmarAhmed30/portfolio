'use client';

import React, { useState, useEffect } from 'react';
import { useColor } from '@/contexts/ColorContext';

export default function IntroLoader() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const { backgroundColor, headerColor } = useColor();

    useEffect(() => {
        // Show content after a brief delay
        const showTimer = setTimeout(() => {
            setShowContent(true);
        }, 100);

        // Start exit animation after 2 seconds
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 2000);

        // Remove loader after animation completes
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2800);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(exitTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center px-4 sm:px-6 md:px-8"
            style={{
                backgroundColor: backgroundColor,
                opacity: isExiting ? 0 : 1,
                transition: 'opacity 0.8s ease-out',
                pointerEvents: isExiting ? 'none' : 'auto',
            }}
        >
            <div 
                className="ml-0 sm:ml-4 md:ml-6 lg:ml-8"
                style={{
                    transform: isExiting ? 'translateY(-30px)' : 'translateY(0)',
                    opacity: showContent ? (isExiting ? 0 : 1) : 0,
                    transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
                }}
            >
                <h1 
                    className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
                    style={{ 
                        color: headerColor,
                    }}
                >
                    Umar Ahmed Thameem Ahmed
                </h1>
                <p 
                    className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
                    style={{ 
                        color: headerColor,
                    }}
                >
                    — CS Grad Student @ CU Boulder
                </p>
            </div>
        </div>
    );
}

