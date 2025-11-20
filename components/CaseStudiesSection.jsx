import React from 'react';
import Image from 'next/image';

export default function CaseStudiesSection() {
    const caseStudies = [
        {
            id: 1,
            image: "/images/case-studies/business-woman.png",
            title: "Business continuity of adversity",
            description: "A small business owner experienced a fire that damaged their storefront business.",
            featured: true
        },
        {
            id: 2,
            image: "/images/case-studies/digital-assets.png",
            title: "Protecting your digital assets",
            description: "A company experienced a data breach that resulted in significant financial losses.",
            featured: false
        },
        {
            id: 3,
            image: "/images/case-studies/business-meeting.png",
            title: "Safeguarding your business",
            description: "A small business owner experienced a fire that damaged their storefront business.",
            featured: false
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E35] leading-tight mb-4">
                        Case studies in insurance
                    </h2>
                    <p className="text-base md:text-lg text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
                        A young professional faced a serious health issue that required extensive medical treatment. Their health insurance policy covered the majority of the costs
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study) => (
                        <div
                            key={study.id}
                            className="group flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-2xl mb-6 h-64 md:h-72">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-2xl lg:text-3xl font-bold text-[#2C3E35] leading-tight mb-4">
                                    {study.title}
                                </h3>

                                <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed mb-6 flex-grow">
                                    {study.description}
                                </p>

                                {/* Learn More Link */}
                                <a
                                    href="#"
                                    className="
                                        inline-flex items-center gap-2 font-semibold text-lg
                                        transition-all duration-300 mt-auto
                                        text-[#2C3E35] hover:text-[#7CF47C]"
                                >
                                    Learn More
                                    <svg
                                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}