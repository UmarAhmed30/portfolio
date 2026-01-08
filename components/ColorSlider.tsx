'use client';

import React, { useState, useEffect, useRef } from 'react';
import { colorPalette } from '@/utils/colorUtils';

interface ColorSliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    steps?: number;
    textColor?: string;
}

export default function ColorSlider({ 
    value, 
    onChange, 
    min = 0, 
    max = 16, 
    steps = 17,
    textColor = '#FFFFFF'
}: ColorSliderProps) {
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const onChangeRef = useRef(onChange);
    
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    const getValueFromStep = (step: number) => {
        return Math.max(0, Math.min(steps - 1, step));
    };

    const getStepFromValue = (val: number) => {
        return Math.max(0, Math.min(steps - 1, Math.round(val)));
    };

    const currentStep = getStepFromValue(value);

    const handleInteraction = (clientY: number) => {
        if (!sliderRef.current) return;
        
        const rect = sliderRef.current.getBoundingClientRect();
        const y = clientY - rect.top;
        const percentage = Math.max(0, Math.min(1, 1 - (y / rect.height)));
        const step = Math.round(percentage * (steps - 1));
        const clampedStep = Math.max(0, Math.min(steps - 1, step));
        const newValue = getValueFromStep(clampedStep);
        
        onChangeRef.current(newValue);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        handleInteraction(e.clientY);
    };

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            handleInteraction(e.clientY);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    const thumbPosition = ((currentStep / (steps - 1)) * 100);

    return (
        <div className="flex flex-col items-center">
            {/* Sun icon at top - for light mode */}
            <div 
                className="mb-2 flex items-center justify-center cursor-pointer"
                style={{ color: textColor }}
            >
                <svg
                    width="14"
                    height="14"
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
            
            {/* Slider track */}
            <div
                ref={sliderRef}
                className="relative cursor-pointer select-none"
                onMouseDown={handleMouseDown}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleInteraction(e.clientY);
                }}
                style={{ 
                    width: '16px',
                    height: '160px',
                    touchAction: 'none'
                }}
            >
                {/* Vertical line */}
                <div 
                    className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
                    style={{ 
                        width: '1px', 
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
                            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                            style={{
                                top: `${100 - position}%`,
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
                    className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                    style={{
                        top: `${100 - thumbPosition}%`,
                        width: '12px',
                        height: '12px',
                        backgroundColor: colorPalette[currentStep] || '#000',
                        border: `2px solid ${textColor}`,
                        transition: 'top 0.1s ease-out',
                    }}
                />
            </div>
            
            {/* Moon icon at bottom - for dark mode */}
            <div 
                className="mt-2 flex items-center justify-center cursor-pointer"
                style={{ color: textColor }}
            >
                <svg
                    width="14"
                    height="14"
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
        </div>
    );
}
