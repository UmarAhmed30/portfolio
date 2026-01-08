'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { colorPalette, getTextColor, getHeaderColor, getMutedTextColor, getSelectionBgColor, getSelectionTextColor } from '@/utils/colorUtils';

interface ColorContextType {
    colorIndex: number;
    backgroundColor: string;
    textColor: string;
    headerColor: string;
    mutedColor: string;
    setColorIndex: (index: number) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
    // Always start with 0 to avoid hydration mismatch
    const [colorIndex, setColorIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const stored = localStorage.getItem('theme-color-index');
        if (stored) {
            const storedIndex = Number(stored);
            setColorIndex(Math.max(0, Math.min(colorPalette.length - 1, storedIndex)));
        }
    }, []);

    const backgroundColor = colorPalette[colorIndex] || colorPalette[0];
    const textColor = getTextColor(backgroundColor);
    const headerColor = getHeaderColor(backgroundColor);
    const mutedColor = getMutedTextColor(backgroundColor);

    useEffect(() => {
        if (!isMounted) return;
        
        // Set all colors instantly - no transitions for perfect sync
        document.documentElement.style.setProperty('--theme-bg-color', backgroundColor);
        document.documentElement.style.setProperty('--theme-text-color', textColor);
        document.documentElement.style.setProperty('--theme-header-color', headerColor);
        document.documentElement.style.setProperty('--theme-muted-color', mutedColor);
        document.documentElement.style.setProperty('--theme-selection-bg', getSelectionBgColor(backgroundColor));
        document.documentElement.style.setProperty('--theme-selection-text', getSelectionTextColor(backgroundColor));
        document.documentElement.style.backgroundColor = backgroundColor;
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = textColor;
        
        localStorage.setItem('theme-color-index', colorIndex.toString());
    }, [colorIndex, backgroundColor, textColor, headerColor, mutedColor, isMounted]);

    return (
        <ColorContext.Provider value={{
            colorIndex,
            backgroundColor,
            textColor,
            headerColor,
            mutedColor,
            setColorIndex
        }}>
            {children}
        </ColorContext.Provider>
    );
}

export function useColor() {
    const context = useContext(ColorContext);
    if (context === undefined) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
}

