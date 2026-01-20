'use client';

import { useColor } from '@/contexts/ColorContext';
import { getBrightness } from '@/utils/colorUtils';

interface AdaptiveLogoProps {
    src: string;
    alt: string;
    size?: number; // Total size of the circular container
    logoScale?: number; // Scale of logo relative to container (0-1)
}

export default function AdaptiveLogo({ 
    src, 
    alt, 
    size = 64, 
    logoScale = 0.6 
}: AdaptiveLogoProps) {
    const { backgroundColor, headerColor } = useColor();
    
    // Determine if the background is light or dark
    const isLightBackground = getBrightness(backgroundColor) > 128;
    
    // Circle background: darker on light themes, lighter on dark themes
    // Creates a subtle contrast circle
    const circleBackground = isLightBackground 
        ? `color-mix(in srgb, ${headerColor} 15%, ${backgroundColor})` 
        : `color-mix(in srgb, ${headerColor} 20%, ${backgroundColor})`;
    
    // Logo color: contrasting with the circle background
    const logoColor = headerColor;
    
    const logoSize = size * logoScale;

    return (
        <div 
            className="rounded-full flex items-center justify-center"
            style={{ 
                width: size, 
                height: size, 
                backgroundColor: circleBackground,
            }}
            title={alt}
        >
            {/* Logo using mask-image for color adaptation */}
            <div
                style={{
                    width: logoSize,
                    height: logoSize,
                    backgroundColor: logoColor,
                    maskImage: `url(${src})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: `url(${src})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                }}
            />
        </div>
    );
}
