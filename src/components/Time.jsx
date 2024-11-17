import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ArrowForward } from "@mui/icons-material";

function Time() {
  return (
    <section className="py-16 px-6 lg:px-16 container max-w-[1400px] mx-auto">
      {/* Section 1 */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-[100px]">
        {/* Left Section */}
        <div className="flex-1 items-start">
          <img className="w-full h-auto max-w-lg" src="/cake.png" alt="" />
        </div>
        {/* Right Section */}
        <div className="flex-1 flex flex-col items-start gap-1.5 md:gap-[9px]">
          <h1 className="text-3xl md:text-[55px] md:leading-[60px] font-medium text-[#000000] max-w-[463px] pb-[15px]">
            Make more time for the work
          </h1>
          <p className="text-[#000000] text-base md:text-[21px] md:leading-[30px]">
            <CheckCircleOutlineIcon className="text-[#2AB691] lg:me-2.5" />{" "}
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="text-[#000000] text-base md:text-[21px] md:leading-[30px]">
            <CheckCircleOutlineIcon className="text-[#2AB691] lg:me-2.5" />{" "}
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="text-[#000000] text-base md:text-[21px] md:leading-[30px]">
            <CheckCircleOutlineIcon className="text-[#2AB691] lg:me-2.5" />{" "}
            <span>Many ways to use illustrations in design</span>
          </p>

          <div className="mt-[19px]">
            <button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-[#FFFFFF] font-medium py-2 sm:py-[15px] px-3 sm:px-[16px]  rounded-lg transition duration-300 text-xs lg:text-base lg:flex items-center justify-center gap-2.5">
              Learn more <ArrowForward sx={{ fontSize: "24px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-[100px] mt-[126px]">
        {/* left Section */}
        <div className="flex-1 flex flex-col items-start gap-1.5 md:gap-[9px]">
          <h1 className="text-3xl md:text-[55px] md:leading-[60px] font-medium text-[#000000] max-w-[463px] pb-[15px]">
            Make more time for the work
          </h1>
          <p className="text-[#000000] text-base md:text-[21px] md:leading-[30px]">
            <CheckCircleOutlineIcon className="text-[#2AB691] lg:me-2.5" />{" "}
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="text-[#000000] text-base md:text-[21px] md:leading-[30px]">
            <CheckCircleOutlineIcon className="text-[#2AB691] lg:me-2.5" />{" "}
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="text-[#000000] text-base md:text-[21px] md:leading-[30px]">
            <CheckCircleOutlineIcon className="text-[#2AB691] lg:me-2.5" />{" "}
            <span>Many ways to use illustrations in design</span>
          </p>

          <div className="mt-[19px]">
            <button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-[#FFFFFF] font-medium py-2 sm:py-[15px] px-3 sm:px-[16px]  rounded-lg transition duration-300 text-xs lg:text-base lg:flex items-center justify-center gap-2.5">
              Learn more <ArrowForward sx={{ fontSize: "24px" }} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 items-start">
          <img className="w-full h-auto max-w-lg" src="/cake-2.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Time;
