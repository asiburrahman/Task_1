
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
            id: null,
            title: 'All services',
            description: 'Insurance provides financial security and peace protect unexpected',
            linkText: 'View all services',
            featured: false,
            isViewAll: true
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C3E35]">
                        We offer wide range of coverage
                    </h2>
                </div>

                {/* Coverage Grid */}
                <div className="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coverageItems.map((item) => (
                        <div
                            key={item.id}
                            className="
        rounded-3xl p-8 lg:p-10 border border-gray-400 
        transition-all duration-300 flex flex-col h-full 
        group hover:bg-[#2B8A7E] hover:text-white hover:shadow-xl
      "
                        >
                            {/* Number Badge */}
                            <div className="mb-8">
                                <span
                                    className={`${item.id?"inline-block px-4 py-2 rounded-full text-sm font-semibold  text-[#193E39] border border-gray-400 transition-all duration-300 group-hover:bg-white group-hover:border-none":"inline-block px-4 py-4 flex-grow "}`}
                                >
                                    {item.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className=" text-2xl lg:text-3xl font-bold mb-4 text-[#193E39] transition-all duration-300 group-hover:text-white flex-grow" >
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="
          text-base lg:text-lg mb-6 leading-relaxed flex-grow 
          text-[#5F5F5F] transition-all duration-300
          group-hover:text-white
        "
                            >
                                {item.description}
                            </p>

                            {/* Learn More Link */}
                            <a
                                href="#"
                                className="
          inline-flex items-center gap-2 font-semibold text-lg 
          text-[#193E39] mt-auto transition-all duration-300
          group-hover:text-[#6BE26B]
        "
                            >
                                {item.linkText}

                                <svg
                                    className="
            w-5 h-5 text-[#193E39] transition-all duration-300
            group-hover:translate-x-1 group-hover:text-[#6BE26B]
          "
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