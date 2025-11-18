
export default function CoverageSection() {
    const coverageItems = [
        {
            id: '01',
            title: 'Life insurance',
            description: 'Explore the world with confidence with our yourself against unexpected emergencies cancellations, and lost luggage.',
            linkText: 'Learn More',
            featured: true
        },
        {
            id: '02',
            title: 'Health Insurance',
            description: 'Insurance provides financial security and peace of mind. It helps protect unexpected financial burdens arising.',
            linkText: 'Learn More',
            featured: false
        },
        {
            id: '03',
            title: 'Auto Insurance',
            description: 'Explore the world with confidence with our travel insurance plans. Protect yourself against unexpected.',
            linkText: 'Learn More',
            featured: false
        },
        {
            id: '04',
            title: 'Health Insurance',
            description: 'Insurance provides financial security and peace of mind. It helps protect unexpected financial burdens arising.',
            linkText: 'Learn More',
            featured: false
        },
        {
            id: '05',
            title: 'Health Insurance',
            description: 'Insurance provides financial security and peace of mind. It helps protect unexpected financial burdens arising.',
            linkText: 'Learn More',
            featured: false
        },
        {
            id: "",
            title: 'All services',
            description: 'Insurance provides financial security and peace protect unexpected',
            linkText: 'View all services',
            featured: false,
            isViewAll: true
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="w-12/12 mx-auto px-6 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E35]">
                        We offer wide range of coverage
                    </h2>
                </div>

                {/* Coverage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coverageItems.map((item) => (
                        <div
                            key={item.id}
                            className={`
                rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:shadow-xl
                flex flex-col h-full
                ${item.featured
                                    ? 'bg-[#2B8A7E] text-white'
                                    : 'bg-white border-2 border-gray-200 hover:border-[#2B8A7E]'
                                }
            `}
                        >
                            {/* Number Badge */}
                            <div className="mb-8">
                                <span className={`
                    inline-block px-4 py-2 rounded-full text-sm font-semibold
                    ${item.featured
                                        ? 'bg-white text-[#2B8A7E]'
                                        : 'bg-gray-100 text-[#2C3E35]'
                                    }
                `}>
                                    {item.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className={`
                text-2xl lg:text-3xl font-bold mb-4
                ${item.featured ? 'text-white' : 'text-[#2C3E35]'}
            `}>
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className={`
                text-base lg:text-lg mb-6 leading-relaxed flex-grow
                ${item.featured ? 'text-white/90' : 'text-[#6B7280]'}
            `}>
                                {item.description}
                            </p>

                            {/* Learn More Link */}
                            <a
                                href="#"
                                className={`
                    inline-flex items-center gap-2 font-semibold text-lg
                    group transition-all duration-300 mt-auto
                    ${item.featured
                                        ? 'text-[#7CF47C] hover:text-[#6BE26B]'
                                        : 'text-[#2C3E35] hover:text-[#2B8A7E]'
                                    }
                `}
                            >
                                {item.linkText}
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
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}