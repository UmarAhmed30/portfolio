// Color palette - 17 colors from dark to light
export const colorPalette = [
    '#000000', // 0 - Black
    '#051A1C', // 1
    '#182938', // 2
    '#2E3248', // 3
    '#40364F', // 4
    '#543C59', // 5
    '#773A35', // 6
    '#9D4433', // 7
    '#E94F0E', // 8
    '#FFD2B4', // 9
    '#F3E6CF', // 10
    '#D5D1B7', // 11
    '#D1DACB', // 12
    '#D5E3DE', // 13
    '#DEEBEE', // 14
    '#F2FBFD', // 15
    '#FFFFFF', // 16 - White
];

// Convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

// Convert RGB to HSL
function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                break;
            case g:
                h = ((b - r) / d + 2) / 6;
                break;
            case b:
                h = ((r - g) / d + 4) / 6;
                break;
        }
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

// Convert HSL to hex
function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
    } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
    } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
    } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
    } else if (h >= 300 && h < 360) {
        r = c; g = 0; b = x;
    }

    const toHex = (n: number) => {
        const hex = Math.round((n + m) * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Calculate brightness of a hex color (0-255)
export function getBrightness(hex: string): number {
    const { r, g, b } = hexToRgb(hex);
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// Check if color is a warm/vibrant color that needs special handling
function isWarmVibrantColor(h: number, s: number, l: number): boolean {
    // Orange, red, yellow-orange range with high saturation
    return (h >= 0 && h <= 45) && s > 50 && l > 30 && l < 70;
}

// Get text color based on background - same hue, contrasting lightness
export function getTextColor(backgroundColor: string): string {
    // Handle pure black and white
    if (backgroundColor === '#000000') {
        return '#CCCCCC';
    }
    if (backgroundColor === '#FFFFFF') {
        return '#333333';
    }

    const { r, g, b } = hexToRgb(backgroundColor);
    const { h, s, l } = rgbToHsl(r, g, b);
    const brightness = getBrightness(backgroundColor);

    // Special handling for warm vibrant colors like orange
    if (isWarmVibrantColor(h, s, l)) {
        // Use a very dark, slightly desaturated version for readability
        return hslToHex(h, Math.min(s * 0.4, 30), 15);
    }

    if (brightness < 128) {
        // Dark background - use light version of same hue
        return hslToHex(h, Math.min(s * 0.6, 40), 75);
    } else {
        // Light background - use dark version of same hue
        return hslToHex(h, Math.min(s * 0.8, 50), 25);
    }
}

// Get header color - same hue but stronger contrast
export function getHeaderColor(backgroundColor: string): string {
    // Handle pure black and white
    if (backgroundColor === '#000000') {
        return '#FFFFFF';
    }
    if (backgroundColor === '#FFFFFF') {
        return '#000000';
    }

    const { r, g, b } = hexToRgb(backgroundColor);
    const { h, s, l } = rgbToHsl(r, g, b);
    const brightness = getBrightness(backgroundColor);

    // Special handling for warm vibrant colors like orange
    if (isWarmVibrantColor(h, s, l)) {
        // Use very dark version for maximum contrast
        return hslToHex(h, Math.min(s * 0.3, 25), 8);
    }

    if (brightness < 128) {
        // Dark background - use very light version of same hue
        return hslToHex(h, Math.min(s * 0.4, 30), 90);
    } else {
        // Light background - use very dark version of same hue
        return hslToHex(h, Math.min(s * 0.6, 40), 15);
    }
}

// Get muted text color - same hue, less contrast
export function getMutedTextColor(backgroundColor: string): string {
    // Handle pure black and white
    if (backgroundColor === '#000000') {
        return '#999999';
    }
    if (backgroundColor === '#FFFFFF') {
        return '#666666';
    }

    const { r, g, b } = hexToRgb(backgroundColor);
    const { h, s, l } = rgbToHsl(r, g, b);
    const brightness = getBrightness(backgroundColor);

    // Special handling for warm vibrant colors like orange
    if (isWarmVibrantColor(h, s, l)) {
        // Use a dark, muted version
        return hslToHex(h, Math.min(s * 0.5, 35), 25);
    }

    if (brightness < 128) {
        // Dark background - use muted light version of same hue
        return hslToHex(h, Math.min(s * 0.5, 35), 60);
    } else {
        // Light background - use muted dark version of same hue
        return hslToHex(h, Math.min(s * 0.6, 40), 40);
    }
}

// Get selection background color - a semi-transparent shade for overlap darkening effect
export function getSelectionBgColor(backgroundColor: string): string {
    // Handle pure black and white - use rgba for transparency
    if (backgroundColor === '#000000') {
        return 'rgba(80, 80, 80, 0.6)';
    }
    if (backgroundColor === '#FFFFFF') {
        return 'rgba(180, 180, 180, 0.6)';
    }

    const { r, g, b } = hexToRgb(backgroundColor);
    const { h, s, l } = rgbToHsl(r, g, b);
    const brightness = getBrightness(backgroundColor);

    let selectionL: number;
    let selectionS: number;
    
    if (brightness < 128) {
        // Dark background - use a lighter version for selection
        selectionL = Math.min(l + 25, 45);
        selectionS = Math.min(s * 0.7, 50);
    } else {
        // Light background - use a darker version for selection
        selectionL = Math.max(l - 30, 25);
        selectionS = Math.min(s * 0.8, 60);
    }
    
    // Convert HSL to RGB for rgba output
    const selectionHex = hslToHex(h, selectionS, selectionL);
    const selRgb = hexToRgb(selectionHex);
    
    // Return rgba with 0.6 opacity for overlap darkening effect
    return `rgba(${selRgb.r}, ${selRgb.g}, ${selRgb.b}, 0.6)`;
}

// Get selection text color - contrasts with selection background
export function getSelectionTextColor(backgroundColor: string): string {
    const selectionBg = getSelectionBgColor(backgroundColor);
    const brightness = getBrightness(selectionBg);
    
    // Return white text for dark selection, black text for light selection
    return brightness < 128 ? '#FFFFFF' : '#000000';
}
