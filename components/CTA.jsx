import Image from "next/image";

function CTA(props) {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="bg-[#2B8A7E] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center min-h-[500px] lg:min-h-[600px]">
                    {/* Left Content */}
                    <div className="p-8 lg:p-12 xl:p-16 text-white flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Don't wait for tomorrow,<br />
                            insure yourself today.
                        </h2>
                        <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                            When you file a claim, you'll need to provide necessary documentation, such as police reports or medical records. The insurance company.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#7CF47C] text-[#0D412F] font-semibold px-8 py-4 rounded-full hover:bg-[#6BE26B] transition-all duration-300 hover:scale-105 shadow-lg">
                                Secure Your Family
                            </button>
                            <button className="bg-transparent text-white font-semibold px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-[#2B8A7E] transition-all duration-300 inline-flex items-center gap-2 group">
                                view all services
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative p-8 lg:p-12 flex items-center justify-center">

                        {/* Green border background */}
                        <div className="
        absolute 
        w-[280px] h-[300px] 
        xl:w-[440px] xl:h-[458px]
        rounded-lg bg-[#7CF47C]
    "></div>

                        {/* Image card */}
                        <div className="
        relative bottom-4 right-4
        w-[280px] h-[300px] 
        xl:w-[440px] xl:h-[458px]
        rounded-lg overflow-hidden shadow-xl
    ">
                            <Image
                                src="/images/father-child.png"
                                alt="Father working with child"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default CTA;