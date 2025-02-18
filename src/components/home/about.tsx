import Image from "next/image";

const AboutUs = () => {
    return (
        <section id="about-us" className="fifth-sec w-full px-6 py-12 overflow-hidden bg-[#1a2238]" >
            <h1 className="text-center text-4xl font-bold text-red-600 mb-20">
                Who is Hollywoodland Movers?
            </h1>

            <div className="about-us flex flex-wrap items-center">
                {/* Image Section */}
                <div className="about-img w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <Image
                        src="/images/aboutus/about.png"
                        alt="About Us"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="text w-full md:w-1/2 pl-6">
                    <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-10">
                        Experienced Truck Dispatching Company
                    </h2>
                    <p className="text-white text-lg leading-8">
                        Swift Dispatch is a truck dispatch service for small trucking companies.
                        We help keep you loaded weekly. Our experienced team negotiates the highest
                        rates for you, so you get paid fairly. We handle all truck paperwork and
                        broker communications so you can focus on expanding your business.
                        <br /><br />
                        We are looking for long-term partners because we believe that your success
                        is our success. Maximize your earning potential with our dispatch services.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
