export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            text: "Quick and easy process to get life insurance, with competitive rates and helpful staff.",
            name: "James K",
            location: "New York"
        },
        {
            id: 2,
            text: "Best insurance provider I've found! Their family coverage is easy and affordable.",
            name: "Michael P",
            location: "California"
        },
        {
            id: 3,
            text: "Finally found an insurance company that doesn't overwhelm you with complicated terms.",
            name: "Rachel D",
            location: "New York"
        }
    ];

    return (
        <section className="bg-[#F5F5F0] py-16 lg:py-24">
            <div className="w-12/12 mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id}
                            className="bg-transparent flex justify-between flex-col"
                        >
                            {/* Star Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="w-6 h-6 fill-[#7CF47C]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-[#2C3E35] text-xl lg:text-2xl font-medium leading-relaxed mb-8 flex-grow">
                                {testimonial.text}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-3">
                                <span className="text-[#2C3E35] font-semibold text-lg">
                                    {testimonial.name}
                                </span>
                                <span className="text-[#6B7280] text-base">
                                    {testimonial.location}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}