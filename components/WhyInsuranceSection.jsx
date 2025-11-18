'use client'
import Image from 'next/image';
import CountUp from 'react-countup';

export default function WhyInsuranceSection() {
    const stats = [
        {
            id: 1,
            number: 50,
            suffix: 'k',
            label: 'People insured'
        },
        {
            id: 2,
            number: 15,
            suffix: '',
            label: 'Years experience'
        },
        {
            id: 3,
            number: 17,
            suffix: '',
            label: 'Trusted partners'
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="w-12/12 mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Teal Background Section */}
                    <div className="bg-[#2B8A7E] text-white p-8 lg:p-12">
                        <div className="max-w-lg">
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Why take out<br />
                                insurance?
                            </h2>
                            
                            <p className="text-lg text-white/90 leading-relaxed mb-10">
                                Insurance agents and brokers who help individuals and businesses find suitable insurance policies. They can provide expert advice compare.
                            </p>

                            <div className="w-full h-px bg-white/20 my-10"></div>

                            {/* Contact Info */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-lg">+123 - 254 - 1233</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-lg">Insunet@yourdomain.com</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-lg">552 W 48th Street, New York, NY 10036</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image and Stats Section */}
                    <div className="relative bg-white">
                        {/* Image */}
                        <div className="w-12/12 h-12/12">
                            <Image
                                src="/images/consultation.png"
                                alt="Insurance consultation meeting"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Stats Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#7CF47C] grid grid-cols-3 p-6 lg:p-10">
                            {stats.map((stat) => (
                                <div key={stat.id} className="text-center">
                                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E35] leading-none mb-2">
                                        <CountUp 
                                            end={stat.number} 
                                            duration={2.5}
                                            enableScrollSpy={true}
                                            scrollSpyOnce={true}
                                        />
                                        {stat.suffix}
                                    </div>
                                    <div className="text-sm lg:text-lg font-medium text-[#2C3E35]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}