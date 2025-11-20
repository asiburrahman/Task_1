import Image from "next/image";


export default function HeroSection() {
    return (
        <section className="relative bg-[#157A6E] text-white overflow-hidden min-h-dvh">


            <div className=" py-5 lg:pl-16 lg:py-16">


                {/* Left Content */}
                <div className="mt-28 px-4 lg:px-0 relative z-20 ">
                    <h1 className="text-5xl  lg:text-[112px] font-bold leading-tight">
                        Bring better <br /> future for your <br /> loved ones
                    </h1>
                    <p className="mt-6 text-lg max-w-xl">
                        Life is full of uncertainties. But with the right insurance plan, you can safeguard loved
                        ones and your financial future.
                    </p>


                    <button className="mt-8 bg-[#7CF47C] text-[#0D412F] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#6BE26B]">
                        Secure Your Family
                    </button>
                </div>


                {/* Right Image (includes background inside the PNG) */}
                <div className="absolute w-8/12  right-0 bottom-0  flex justify-center">
                    <Image
                        src="/images/hero-section.png"
                        alt="Family with background"
                        width={900}
                        height={900}
                        className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}