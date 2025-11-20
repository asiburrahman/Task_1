import Image from 'next/image';

export default function TrustedCustomersSection() {
    const testimonials = [
        {
            id: 1,
            text: "Our dedicated team is committed notch customer service. We're always available to answer your questions and assist you with your insurance needs.",
            author: "Brooklyn Simmons",
            company: "L'Oréal",
            avatar: "/images/avatars/brooklyn.png"
        },
        {
            id: 2,
            text: "We understand that filing a claim can be stressful. Our efficient claims process minimizes hassle and ensures timely payouts.",
            author: "Eleanor Pena",
            company: "Starbucks",
            avatar: "/images/avatars/eleanor.png"
        },
        {
            id: 3,
            text: "We offer competitive rates without compromising on quality. Our goal is to provide affordable insurance solutions that fit your budget.",
            author: "Jacob Jones",
            company: "The Walt Disney Company",
            avatar: "/images/avatars/jacob.png"
        },
        {
            id: 4,
            text: "We leverage the latest technology to provide efficient and convenient services, including online policy management and claims filing.",
            author: "Bessie Cooper",
            company: "eBay",
            avatar: "/images/avatars/bessie.png"
        },
        {
            id: 5,
            text: "We're more than just an insuran provider; we're your trusted partner, dedicated to protecting your future and securing your peace of mind.",
            author: "Kristin Watson",
            company: "McDonald's",
            avatar: "/images/avatars/kristin.png"
        },
        {
            id: 6,
            text: "We leverage the latest technology to provide efficient and convenient services, including online policy management and claims filing.",
            author: "Annette Black",
            company: "Nintendo",
            avatar: "/images/avatars/annette.png"
        }
    ];

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E35] leading-tight">
                        Trusted by 23,000+ customers
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-8 flex flex-col gap-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm"
                        >
                            <p className="text-base lg:text-[17px] leading-relaxed text-[#6B7280] flex-grow">
                                {testimonial.text}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-[17px] font-semibold text-[#2C3E35]">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-[15px] text-[#9CA3AF]">
                                        {testimonial.company}
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