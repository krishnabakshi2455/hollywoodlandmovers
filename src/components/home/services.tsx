import React from "react";
import { FileSignature, Users } from "lucide-react";
import { MessageSquare } from "lucide-react";
const Services = () => {
    return (
        <div id="services" className="third-sec text-center py-10 bg-[#1a2238] text-white">
            <h1 className="text-[#f4db7d] text-4xl mb-5">SERVICES</h1>
            <div className="flex flex-wrap justify-center">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 p-5 flex flex-col items-center"
                    >
                        <div className="w-fit p-5 h-full flex items-center justify-center bg-[#03a9f4] text-white text-7xl rounded-full">
                            {service.icon}
                        </div>
                        <h2 className="text-[#ecc124] text-2xl my-4">{service.title}</h2>
                        <p className="text-lg leading-9 px-5">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const servicesData = [
    {
        title: "Document Management",
        description:
            "Truck Dispatching: Keeping Your Business Moving So You Can Focus on Driving. Here at Logity Dispatch, we are proud to be the truck dispatcher company you can rely on.",
        icon: <FileSignature className="w-[100px] h-[80px]" />,
    },
    {
        title: "Freight Factoring",
        description:
            "Truck Dispatching: Keeping Your Business Moving So You Can Focus on Driving. Here at Logity Dispatch, we are proud to be the truck dispatcher company you can rely on.",
        icon: <Users className="w-[100px] h-[80px]"/>,
    },
    {
        title: "Freight Rate Negotiation",
        description:
            "Truck Dispatching: Keeping Your Business Moving So You Can Focus on Driving. Here at Logity Dispatch, we are proud to be the truck dispatcher company you can rely on.",
        icon: <MessageSquare className="w-[100px] h-[80px]"/>,
    },
];

export default Services;