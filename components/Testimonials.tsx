'use client';

import { useColor } from '@/contexts/ColorContext';

export default function Testimonials() {
    const { headerColor, mutedColor } = useColor();
    const testimonials = [
        {
            quote: "Truly one of the best design collaborators I've ever worked with.",
            author: "Grace Erickson",
            title: "Director of Marketing",
        },
        {
            quote: "Billy has an exceedingly rare blend of high craft and superb strategic and systems thinking.",
            author: "Seth Fields",
            title: "Senior UX Program Manager",
        },
        {
            quote: "Billy exemplifies inspirational leadership and unwavering compassion, setting a remarkable standard for craftsmanship.",
            author: "Dionne Ong",
            title: "Product Designer",
        },
        {
            quote: "Billy is an incredible leader, mentor, and human—a visionary and craftsperson with care for people.",
            author: "Kait Smith Lowden",
            title: "Director of Product Design",
        },
        {
            quote: "Billy's attention to detail and work ethic are insanely diligent. He understands the capabilities and limitations of designing for the web in a way I'm not sure I've seen in many others.",
            author: "Ryan Quintal",
            title: "Staff Product Designer",
        },
        {
            quote: "Billy is an incredibly thoughtful, meticulous, and craft-oriented designer who blew us away with his ability to think big picture and come up with creative solutions on the spot.",
            author: "Bec Lai",
            title: "Staff Product Designer",
        },
    ];

    return (
        <section id="references" className="mb-24 md:mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12 lg:gap-y-20">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col">
                        <p 
                            className="font-medium mb-3 md:mb-4 leading-tight text-lg md:text-xl lg:text-2xl" 
                            style={{ 
                                color: headerColor,
                                lineHeight: '1.3',
                            }}
                        >
                            &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-2">
                            <span 
                                className="font-medium text-xs md:text-sm" 
                                style={{ 
                                    color: headerColor, 
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    textUnderlineOffset: '2px',
                                    textDecorationThickness: '1px',
                                    textDecorationColor: mutedColor,
                                }}
                            >
                                {testimonial.author}
                            </span>
                            <span style={{ color: mutedColor, fontSize: '12px' }} className="md:text-sm">
                                {testimonial.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
