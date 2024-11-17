import React from "react";

function BombArea() {
  return (
    <section className="bg-[#5F62E2] w-full h-auto mb-5">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-32 max-w-[1400px] mx-auto">
        <div className="flex-1 flex flex-col items-center md:items-start gap-8 p-5 lg:p-0 xl:mt-[55px]">
          <h1 className="text-[#FFFFFF] text-3xl sm:text-4xl lg:text-[55px] lg:leading-[60px] font-medium mt-5 text-center md:text-left max-w-[743px]">
            The quickest way to create awesome presentation
          </h1>

          <div className="flex gap-3 flex-wrap mb-10">
            <button className="bg-[#FFFFFF26] hover:bg-[#2AB691] text-white font-semibold py-2 sm:py-3 px-3 sm:px-6 transition duration-300 rounded-lg text-xs lg:text-base">
              Get Started
            </button>

            <button className="bg-[#FFFFFF26] hover:bg-[#2AB691] text-white font-semibold py-2 sm:py-3 px-3 sm:px-6 rounded-lg transition duration-300 text-xs lg:text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="">
            <img className="" src="/bomb.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default BombArea;
