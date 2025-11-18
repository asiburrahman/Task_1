'use client'
import Image from 'next/image';

export default function FeaturesExplanationSection() {
    const features = [
        {
            id: 1,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: '24/7 Customer Support'
        },
        {
            id: 2,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Quick Claim Processing'
        },
        {
            id: 3,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: 'Customizable Coverage'
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="w-12/12 mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E35] leading-tight mb-6">
                            Brief explanations<br />
                            of each feature
                        </h2>
                        
                        <p className="text-lg lg:text-xl text-[#6B7280] mb-8 lg:mb-10 max-w-xl">
                            Life is full of uncertainties. But with the safeguard your loved ones and your financial comprehensive are designed provide peace of mind throws your way.
                        </p>

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

                    {/* Right Image with Feature Cards */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative lg:w-[567px] lg:h-[629px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/elderly-couple.png"
                                alt="Elderly couple reviewing documents"
                                width={700}
                                height={700}
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Overlay Feature Cards */}
                            <div className="absolute top-4/12 md:top-6/12 inset-0 flex flex-col justify-center items-start p-4 lg:p-10 space-y-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={feature.id}
                                        className="bg-white rounded-2xl p-1 lg:px-6 lg:py-6 shadow-lg flex items-center gap-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                        style={{
                                            animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                                        }}
                                    >
                                        {/* Icon */}
                                        <div className=" w-11/12 h-11/12 bg-[#2B8A7E] rounded-xl flex items-center justify-center text-white">
                                            {feature.icon}
                                        </div>
                                        
                                        {/* Title */}
                                        <span className="text-[#2C3E35] font-semibold text-xs md:text-lg whitespace-nowrap">
                                            {feature.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

     
        </section>
    );
}