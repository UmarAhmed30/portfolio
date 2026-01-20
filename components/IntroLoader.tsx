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
            className="fixed inset-0 z-50 flex items-center"
            style={{
                backgroundColor: backgroundColor,
                opacity: isExiting ? 0 : 1,
                transition: 'opacity 0.8s ease-out',
                pointerEvents: isExiting ? 'none' : 'auto',
            }}
        >
            <div 
                className="ml-8"
                style={{
                    transform: isExiting ? 'translateY(-30px)' : 'translateY(0)',
                    opacity: showContent ? (isExiting ? 0 : 1) : 0,
                    transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
                }}
            >
                <h1 
                    className="font-medium"
                    style={{ 
                        color: headerColor,
                        fontSize: '72px',
                        lineHeight: '76px',
                    }}
                >
                    Umar Ahmed Thameem Ahmed
                </h1>
                <p 
                    className="font-medium"
                    style={{ 
                        color: headerColor,
                        fontSize: '72px',
                        lineHeight: '76px',
                    }}
                >
                    — CS Grad Student @ CU Boulder
                </p>
            </div>
        </div>
    );
}

