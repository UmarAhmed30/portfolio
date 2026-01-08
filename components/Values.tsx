'use client';

import { useColor } from '@/contexts/ColorContext';

export default function Values() {
    const { headerColor } = useColor();

    return (
        <section id="values" className="mb-48">
            <div className="mb-12">
                <h2 className="font-medium mb-4" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Useful</h2>
                <h2 className="font-medium mb-4" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Considered</h2>
                <h2 className="font-medium mb-4" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Beautiful</h2>
                <h2 className="font-medium mb-8" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Well made</h2>
            </div>
            
            <p className="max-w-[60ch] leading-relaxed text-base font-medium ml-auto" style={{ color: headerColor }}>
                These are my core design values, and I strive to imbue them in all of the work I do. I've always been making things and inventing ways to improve my surroundings. Solving a tangible need with a beautiful solution is a practice I love and resides in my core. Collaborating with a team to create a far better outcome than otherwise possible alone gives me energy. I like thinking big, working fast, yet carefully, holistically, long-term, sustainably, cross-functionally, zooming out on company strategy, and zooming in on details. I'm always improving, growing, and executing to the highest standard possible. All while achieving a larger mission, connecting my work to something deeper, tethered to improving the world, leaving it better than when I began.
            </p>
        </section>
    );
}
