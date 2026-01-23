'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { colorPalette } from '@/utils/colorUtils';

interface ColorSliderHorizontalProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    steps?: number;
    textColor?: string;
}

export default function ColorSliderHorizontal({ 
    value, 
    onChange, 
    steps = 17,
    textColor = '#FFFFFF'
}: ColorSliderHorizontalProps) {
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const onChangeRef = useRef(onChange);
    
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    const getValueFromStep = useCallback((step: number) => {
        return Math.max(0, Math.min(steps - 1, step));
    }, [steps]);

    const getStepFromValue = (val: number) => {
        return Math.max(0, Math.min(steps - 1, Math.round(val)));
    };

    const currentStep = getStepFromValue(value);

    const handleInteraction = useCallback((clientX: number) => {
        if (!sliderRef.current) return;
        
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, x / rect.width));
        const step = Math.round(percentage * (steps - 1));
        const clampedStep = Math.max(0, Math.min(steps - 1, step));
        const newValue = getValueFromStep(clampedStep);
        
        onChangeRef.current(newValue);
    }, [steps, getValueFromStep]);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        handleInteraction(e.clientX);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        handleInteraction(e.touches[0].clientX);
    };

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            handleInteraction(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            handleInteraction(e.touches[0].clientX);
        };

        const handleEnd = () => {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleEnd);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, handleInteraction]);

    const thumbPosition = ((currentStep / (steps - 1)) * 100);

    return (
        <div className="flex items-center w-full gap-3">
            {/* Moon icon at left - for dark mode */}
            <div 
                className="flex items-center justify-center cursor-pointer flex-shrink-0"
                style={{ color: textColor }}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path 
                        d="M14.5 10.5C13.5 11.5 12 12 10.5 12C7 12 4 9 4 5.5C4 4 4.5 2.5 5.5 1.5C2.5 2.5 0.5 5.5 0.5 8.5C0.5 12.5 4 15.5 8 15.5C11 15.5 13.5 13.5 14.5 10.5Z" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
            </div>
            
            {/* Slider track */}
            <div
                ref={sliderRef}
                className="relative cursor-pointer select-none flex-1"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleInteraction(e.clientX);
                }}
                style={{ 
                    height: '16px',
                    minWidth: '120px',
                    touchAction: 'none'
                }}
            >
                {/* Horizontal line */}
                <div 
                    className="absolute top-1/2 left-0 right-0 -translate-y-1/2"
                    style={{ 
                        height: '1px', 
                        backgroundColor: textColor,
                        opacity: 0.3,
                    }} 
                />
                
                {/* Dots - all evenly sized */}
                {Array.from({ length: steps }).map((_, index) => {
                    const position = (index / (steps - 1)) * 100;
                    return (
                        <div
                            key={index}
                            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{
                                left: `${position}%`,
                                width: '4px',
                                height: '4px',
                                backgroundColor: textColor,
                                opacity: 0.6,
                            }}
                        />
                    );
                })}

                {/* Thumb indicator */}
                <div
                    className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                    style={{
                        left: `${thumbPosition}%`,
                        width: '12px',
                        height: '12px',
                        backgroundColor: colorPalette[currentStep] || '#000',
                        border: `2px solid ${textColor}`,
                        transition: 'left 0.1s ease-out',
                    }}
                />
            </div>
            
            {/* Sun icon at right - for light mode */}
            <div 
                className="flex items-center justify-center cursor-pointer flex-shrink-0"
                style={{ color: textColor }}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <line x1="8" y1="0.5" x2="8" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="8" y1="13" x2="8" y2="15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="0.5" y1="8" x2="3" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="13" y1="8" x2="15.5" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="2.64" y1="2.64" x2="4.4" y2="4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="11.6" y1="11.6" x2="13.36" y2="13.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="2.64" y1="13.36" x2="4.4" y2="11.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="11.6" y1="4.4" x2="13.36" y2="2.64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    );
}
