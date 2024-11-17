import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";

function Slider() {
  const slides = [
    {
      id: 1,
      image: "man.png",
      title: "Make more time for the work that matters most",
      description: "Best software platform for running an internet business.",
    },
    {
      id: 2,
      image: "cake-2.png",
      title: "Build more time for the work that matters most",
      description: "Best software platform for running an internet business.",
    },
    {
      id: 3,
      image: "cake.png",
      title: "Take more time for the work that matters most",
      description: "Best software platform for running an internet business.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { image, title, description } = slides[currentIndex]; // Destructuring

  return (
    <section className="max-w-[1400px] mx-auto pt-[94px] pb-[131px] px-6 md:px-12 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[178px]">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-between w-full md:w-1/2 space-y-6">
          <img className="w-16 md:w-24 mb-4" src="/logo.png" alt="" />
          <h1 className="text-2xl md:text-5xl font-medium text-[#000000] max-w-[463px]">
            {title}
          </h1>
          <p className="text-base md:text-[21px] text-[#808080] max-w-[332px]">
            {description}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-[#F3F3F3] p-3 rounded-full hover:bg-[#C4C4C4] transition duration-300"
            >
              {" "}
              <ChevronLeft className="text-[#323232]" />{" "}
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#F3F3F3] p-3 rounded-full hover:bg-[#C4C4C4] transition duration-300"
            >
              <ChevronRight className="text-[#323232]" />
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full md:w-[65%] object-cover" src={image} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-[70px]">
        <marquee>
          <img
            className="w-full object-cover"
            src="/Logos.png"
            alt="Brand Logos"
          />
        </marquee>
      </div>
    </section>
  );
}

export default Slider;
