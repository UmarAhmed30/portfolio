'use client';

import { useColor } from '@/contexts/ColorContext';

export default function About() {
    const { headerColor } = useColor();

    return (
        <section id="about" className="mb-16 sm:mb-24 md:mb-36 lg:mb-48">
            <p className="max-w-[60ch] leading-relaxed text-sm sm:text-base md:text-base font-medium ml-auto px-4 sm:px-6 md:px-8 lg:px-0" style={{ color: headerColor }}>
                With 15 years of experience across brand and product design, at companies large and small, I&apos;ve developed a skillset with breadth and depth. I&apos;m currently working on design systems products at Figma, was previously the Director of Design at Cocoon, a Staff Product Designer at Dropbox, a Product Designer at Facebook, the Head of Design at Thread, a Design Lead at Squarespace, a freelance designer and director commissioned by a variety of clients, and a close collaborator to many incredible people across multiple disciplines. I&apos;m a classically trained designer, who holds a Bachelor of Science in Graphic Design. I live in Seattle with my wife and son, spending time outside as often as possible.
            </p>
        </section>
    );
}
