'use client';

import { useColor } from '@/contexts/ColorContext';

export default function Values() {
    const { headerColor } = useColor();

    return (
        <section id="values" className="mb-48">
            <div className="mb-12">
                <h2 className="font-medium mb-4" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Ownership</h2>
                <h2 className="font-medium mb-4" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Craftsmanship</h2>
                <h2 className="font-medium mb-4" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Velocity</h2>
                <h2 className="font-medium mb-8" style={{ color: headerColor, fontSize: '88px', lineHeight: '86px' }}>Growth</h2>
                    </div>
            
            <p className="max-w-[60ch] leading-relaxed text-base font-medium ml-auto" style={{ color: headerColor }}>
                These are my core engineering values and I strive to bring them into everything I build. I believe in owning what you create end to end, from architecture to deployment to the 3am on-call. Good code isn&apos;t just functional but is also readable, tested, and built to evolve gracefully over time. I care about the craft, whether that&apos;s clean abstractions, thoughtful APIs, or systems that scale without drama. I move fast, but I don&apos;t break things carelessly. Velocity without quality is just technical debt in disguise. I&apos;m always learning new frameworks, new patterns, and new mental models for thinking about hard problems. And I love helping others grow too, through code reviews, pairing sessions, and sharing what I&apos;ve picked up along the way. Collaborating with a team to build something far better than any of us could alone is what gives me energy. All while connecting my work to something larger, building tools that matter and systems that serve people meaningfully.
            </p>
        </section>
    );
}
