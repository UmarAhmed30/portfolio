'use client';

import { useColor } from '@/contexts/ColorContext';

export default function Background() {
    const { headerColor, mutedColor } = useColor();

    return (
        <section id="work" className="my-48">
            <p className="max-w-[60ch] leading-relaxed text-base font-medium" style={{ color: headerColor }}>
                My passion for tech came from my{' '}
                <a 
                    href="https://www.linkedin.com/in/eshrath/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'underline',
                        textDecorationStyle: 'dotted',
                        textUnderlineOffset: '2px',
                        textDecorationThickness: '1px',
                        textDecorationColor: mutedColor,
                    }}
                >
                    uncle
                </a>
                , a first-generation software engineer who moved to the US for work, and my{' '}
                <a 
                    href="https://www.linkedin.com/in/haafeeza/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'underline',
                        textDecorationStyle: 'dotted',
                        textUnderlineOffset: '2px',
                        textDecorationThickness: '1px',
                        textDecorationColor: mutedColor,
                    }}
                >
                    mom
                </a>
                , an assistant professor who taught computer science. It led me to study computer science and engineering. Fascinated by the idea of creating for a mass audience, I started building event websites at my undergraduate university. From there on I began my full-time career at Infibeam, working on e-commerce systems at scale. Later I transitioned to Nueromind Technologies and worked on some cool stuff in the AI space. Here is where I learnt to build products from the ground up. Both were invaluable experiences that shaped how I think about systems: one taught me to develop and manage at scale, the other to build from zero. My time at Nueromind Technologies also pushed me to pursue graduate studies. I&apos;m currently at CU Boulder for my Master&apos;s in Computer Science, focusing on systems that power AI and ML applications. Throughout my academic and professional experience, I&apos;ve developed skills across backend development, cloud infrastructure, and AI-powered products. My curiosity drives me to tackle hard problems, my ownership mindset keeps me accountable end to end, and my love for learning keeps me growing with every challenge.
            </p>
        </section>
    );
}
