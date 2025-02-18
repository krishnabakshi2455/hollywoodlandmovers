import React from "react";

const Gallery = () => {
    const images = [
        "/images/gallery/g1.jpg", "/images/gallery/g2.jpg", "/images/gallery/g3.jpg", "/images/gallery/g4.jpg", "/images/gallery/g5.jpg", "/images/gallery/g6.jpg", "/images/gallery/g7.jpg", "/images/gallery/g8.jpg", "/images/gallery/g9.jpg"
    ];

    return (
        <div id="gallery" className="bg-[#1a2238] overflow-hidden py-12 px-8">
      <h1 className="text-center text-4xl text-[#ecc124] mb-8">GALLERY</h1>
      <div className="flex flex-wrap justify-evenly overflow-hidden">
        {images.map((src, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
            <img
              src={src}
              alt="Gallery Image"
              className="w-full h-[345px] border border-black rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
    );
};

export default Gallery;