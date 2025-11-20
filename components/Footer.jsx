import Image from 'next/image';

export default function Footer() {
    return (
        <>
            {/* CTA Section */}


            {/* Footer */}
            <footer className="bg-white py-16 lg:py-20">
                <div className="container mx-auto px-6 lg:px-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-12 gap-8  lg:gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-4">
                            <h3 className="text-2xl font-bold text-[#2C3E35] mb-4">Insunet</h3>
                            <p className="text-[15px] text-[#6B7280] leading-relaxed mb-6">
                                We tailor our insurance plans to meet your specific needs
                            </p>
                            <div className="flex gap-3">
                                {/* Facebook */}
                                <a
                                    href="#"
                                    className="flex items-center justify-center"
                                >
                                    <Image
                                        src="/images/icon/facebook.png"
                                        alt="Facebook"
                                        width={34}
                                        height={34}
                                        className="object-contain  transition-all duration-300 hover:-translate-y-1"
                                    />
                                </a>

                                {/* Twitter */}
                                <a
                                    href="#"
                                    className="flex items-center justify-center "
                                >
                                    <Image
                                        src="/images/icon/twitter.png"
                                        alt="Twitter"
                                        width={34}
                                        height={34}
                                        className="object-contain  transition-all duration-300 hover:-translate-y-1"
                                    />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="#"
                                    className="flex items-center justify-center"
                                >
                                    <Image
                                        src="/images/icon/instagram.png"
                                        alt="Instagram"
                                        width={34}
                                        height={34}
                                        className="object-contain  transition-all duration-300 hover:-translate-y-1"
                                    />
                                </a>
                            </div>

                        </div>

                        {/* Main Pages */}
                        <div className="lg:col-span-3">
                            <h4 className="text-lg font-semibold text-[#2C3E35] mb-4">Main Pages</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Homepage</a></li>
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Company</a></li>
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Services</a></li>
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* More Pages */}
                        <div className="lg:col-span-3">
                            <h4 className="text-lg font-semibold text-[#2C3E35] mb-4">More pages</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Case studies</a></li>
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Case studies Details</a></li>
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Blog</a></li>
                                <li><a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Blog Details</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <h4 className="text-lg font-semibold text-[#2C3E35] mb-4">Contact info</h4>
                            <div className="space-y-3 text-[15px] text-[#6B7280] leading-relaxed">
                                <p>785 15h street, Office 478,<br />Berlin,De 81426</p>
                                <p>+125 254 2314</p>
                                <p>insunet@email.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[15px] text-[#6B7280]">
                            Copyright © 2024 FramerBite. all rights reserved
                        </p>
                        <div className="flex gap-8">
                            <a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Privacy policy</a>
                            <a href="#" className="text-[15px] text-[#6B7280] hover:text-[#2B8A7E] transition-colors">Terms of service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}