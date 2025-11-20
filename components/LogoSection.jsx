import Image from 'next/image';

export default function LogoSection() {
    const companies = [
        {
            id: 1,
            name: "ZenZap",
            logo: "/images/logos/zenzap.png",
            alt: "ZenZap logo"
        },
        {
            id: 2,
            name: "Sparkle",
            logo: "/images/logos/sparkle.png",
            alt: "Sparkle logo"
        },
        {
            id: 3,
            name: "Luma Labs",
            logo: "/images/logos/lumalabs.png",
            alt: "Luma Labs logo"
        },
        {
            id: 4,
            name: "Craftgram",
            logo: "/images/logos/craftgram.png",
            alt: "Craftgram logo"
        },
        {
            id: 5,
            name: "Pulse",
            logo: "/images/logos/pulse.png",
            alt: "Pulse logo"
        },
        {
            id: 6,
            name: "Swift",
            logo: "/images/logos/swift.png",
            alt: "Swift logo"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-black text-lg lg:text-xl">
                        Proudly supported by many companies over the world
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center">
                    {companies.map((company) => (
                        <div 
                            key={company.id}
                            className="flex items-center justify-center w-full width-[117px] h-[30px]  hover:grayscale-0 transition-all duration-300  hover:opacity-60"
                        >
                            <Image
                                src={company.logo}
                                alt={company.alt}
                                width={117}
                                height={30}
                                className="w-auto h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}