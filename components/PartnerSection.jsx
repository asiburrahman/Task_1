import Image from 'next/image';

export default function PartnerSection() {
    const features = [
        {
            id: 1,
            text: "Safeguard financial well-being."
        },
        {
            id: 2,
            text: "Consult with an insurance agent or broker."
        },
        {
            id: 3,
            text: "Policyholder pays regular premiums."
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/family-laptop.png"
                                alt="Happy family using laptop together"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E35] leading-tight mb-6">
                            Your partner for life's journey
                        </h2>
                        
                        <p className="text-lg lg:text-xl text-[#6B7280] mb-8 lg:mb-12 max-w-xl">
                            Insurance provides financial security and peace of mind. It helps protect against unexpected financial.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4 mb-10">
                            {features.map((feature) => (
                                <div 
                                    key={feature.id}
                                    className="flex items-start gap-3"
                                >
                                    {/* Check Icon */}
                                    <div className="flex-shrink-0 mt-1">
                                        <svg 
                                            className="w-6 h-6 text-[#2C3E35]" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg lg:text-xl text-[#2C3E35]">
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Learn More Button */}
                        <div>
                            <button className="group bg-[#7CF47C] text-[#0D412F] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#6BE26B] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2">
                                Learn More
                                <svg 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
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
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}