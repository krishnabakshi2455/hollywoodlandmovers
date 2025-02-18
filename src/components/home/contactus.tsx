import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

const ContactUs = () => {
    return (
        <>
            {/* Contact Section */}
            <section className="sixth-sec flex flex-wrap justify-around bg-[#1a2238] px-6 py-12 w-full">
                {/* Logo */}
                <div className="f-logo w-1/5 flex justify-center mb-6 md:mb-0">
                    <Image
                        src="/images/aboutus/logo.png"
                        alt="Company Logo"
                        width={150}
                        height={150}
                        className="object-contain"
                    />
                </div>

                {/* Useful Links */}
                <div className="links text-white w-full sm:w-1/3 md:w-1/5">
                    <h2 className="text-yellow-400 text-xl mb-4">Useful Links</h2>
                    <ul className="space-y-2">
                        {[
                            "RTS Financial Service, Inc",
                            "Marquee Insurance Group",
                            "Emodal",
                            "Owner Operators Association",
                            "Diesel Prices",
                            "Credit Check",
                            "Privacy Policy",
                            "Cookie Policy",
                        ].map((link, index) => (
                            <li key={index}>
                                <a href="#" className="text-lg hover:text-yellow-300 transition">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* My Account */}
                <div className="links text-white w-full sm:w-1/3 md:w-1/5">
                    <h2 className="text-yellow-400 text-xl mb-4">My Account</h2>
                    <ul className="space-y-2">
                        {["Home", "Services", "Gallery", "FAQ", "About Us", "Contact Us"].map(
                            (link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-lg hover:text-yellow-300 transition">
                                        {link}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* My Features */}
                <div className="links text-white w-full sm:w-1/3 md:w-1/5">
                    <h2 className="text-yellow-400 text-xl mb-4">My Features</h2>
                    <ul className="space-y-2">
                        {[
                            "A Dedicated Dispatching Service",
                            "No Hidden Fees",
                            "Pick Areas You Want to Service",
                            "Reasonable & Best Rates",
                            "Free Invoice Submission",
                        ].map((feature, index) => (
                            <li key={index} className="text-lg">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Join Us */}
                <div className="links text-white w-full sm:w-1/3 md:w-1/5 text-center">
                    <h2 className="text-yellow-400 text-xl mb-4">Join Us</h2>
                    <p className="text-lg mb-4">(000) 000-1234</p>
                    <h1 className="text-yellow-400 text-2xl mb-2">Social Media</h1>
                    <div className="flex justify-center space-x-4">
                        <Instagram size={40} className="text-pink-500 cursor-pointer" />
                        <Facebook size={40} className="text-blue-500 cursor-pointer" />
                        <Twitter size={40} className="text-sky-400 cursor-pointer" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="seventh-sec bg-black text-white text-center py-4 w-full">
                <p>© 2010 - 2018, All rights reserved</p>
            </footer>
        </>
    );
};

export default ContactUs;
