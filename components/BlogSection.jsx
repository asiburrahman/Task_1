import Image from 'next/image';

export default function BlogSection() {
    const blogs = [
        {
            id: 1,
            image: "/images/blog/insurance-meeting.png",
            title: "The Importance of Insurance in Modern Life",
            date: "18 Jul 2024"
        },
        {
            id: 2,
            image: "/images/blog/homeowners-meeting.png",
            title: "Safeguarding Your Home with Homeowners Insurance",
            date: "18 Jul 2024"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="w-12/12 mx-auto px-6 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E35] leading-tight mb-4">
                        Latest from our blogs
                    </h2>
                    <p className="text-base md:text-[17px] leading-relaxed text-[#6B7280] max-w-3xl mx-auto">
                        When you file a claim, you'll need to provide necessary documentation, such as police reports or medical records. The insurance company will assess your claim approved
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {blogs.map((blog) => (
                        <div 
                            key={blog.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group"
                        >
                            {/* Image */}
                            <div className="overflow-hidden h-64 md:h-80">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E35] leading-tight mb-6">
                                    {blog.title}
                                </h3>

                                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center gap-2 text-[#7CF47C] hover:text-[#6BE26B] font-semibold text-[17px] transition-colors group/link"
                                    >
                                        Learn More
                                        <svg 
                                            className="w-5 h-5 transition-transform group-hover/link:translate-x-1" 
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

                                    <div className="flex items-center gap-2 text-[#6B7280] text-[15px]">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {blog.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}