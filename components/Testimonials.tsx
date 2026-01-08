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
        {
            quote: "He is average (:p)",
            author: "Owais The Great and Ultimate Majesty",
            title: "King of US",
        },
    ];

    return (
        <section id="references" className="mb-48">
            <div className="grid grid-cols-2 gap-x-16 gap-y-20">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col">
                        <p 
                            className="font-medium mb-4 leading-tight" 
                            style={{ 
                                color: headerColor,
                                fontSize: '28px',
                                lineHeight: '36px',
                            }}
                        >
                            "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-2">
                            <span 
                                className="font-medium" 
                                style={{ 
                                    color: headerColor, 
                                    fontSize: '14px',
                                    textDecoration: 'underline',
                                    textDecorationStyle: 'dotted',
                                    textUnderlineOffset: '2px',
                                    textDecorationThickness: '1px',
                                    textDecorationColor: mutedColor,
                                }}
                            >
                                {testimonial.author}
                            </span>
                            <span style={{ color: mutedColor, fontSize: '14px' }}>
                                {testimonial.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
