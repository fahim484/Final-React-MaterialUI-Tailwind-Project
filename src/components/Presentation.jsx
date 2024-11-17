import { ArrowForward } from "@mui/icons-material";

function Presentation() {
  const cardData = [
    {
      source: "Management.png",
      heading: "Management",
      text: "Software platform for running your new internet business",
    },

    {
      source: "Entertainment.png",
      heading: "Entertainment",
      text: "Software platform for running your new internet business",
    },
    {
      source: "Marketing.png",
      heading: "Marketing",
      text: "Software platform for running your new internet business",
    },
    {
      source: "References.png",
      heading: "References",
      text: "Software platform for running your new internet business",
    },
  ];

  const socialLinks = [
    {
      link: "facebook.png",
    },

    {
      link: "instagram.png",
    },
    {
      link: "twitter.png",
    },
  ];

  return (
    <section className="bg-[#F9F9F9]">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-[50px] md:gap-[110px] py-12 md:py-20 lg:py-[135px] px-7 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        {/* Left Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-4 gap-4 bg-[#FFFFFF] rounded-[10px] hover:bg-gray-100 transition-all text-center lg:h-[310px]"
            >
              <div className="flex items-center justify-center">
                <img src={card.source} alt="" />
              </div>
              <div>
                <h3 className="text-[#000000] text-lg md:text-2xl font-medium">
                  {card.heading}
                </h3>
                <p className="text-[#00000080] text-sm md:text-[17px]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-7">
          <h1 className="text-[#000000] text-3xl md:text-4xl lg:text-[55px] lg:leading-[60px] font-medium max-w[463px] mx-auto lg:mx-0 text-center lg:text-left">
            The quickest way to create modern presentation
          </h1>

          <p className="text-[#7D7D7D] text-sm md:text-[21px] md:leading-[30px] max-w-[448px] mx-auto lg:mx-0">
            Best software platform for running an internet business. We build
            the most powerful and flexible tools for internet commerce.
          </p>

          <button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-indigo-200 font-medium py-2 sm:py-[15px] pl-3 pr-6 sm:pl-4 lg:pr-[50px]  rounded-lg transition duration-300 text-xs lg:text-base lg:flex items-center justify-center gap-2.5">
            Explore All <ArrowForward sx={{ fontSize: "24px" }} />
          </button>

          <p className="text-[#7D7D7D] !mt-5 lg:!mt-[145px]">Follow us</p>
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-[21px]">
            {
                socialLinks.map((social, index) => (
                <a href="#" key={index} className="bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition duration-300">
                    <img className="w-[40px] h-[40px]" src={social.link} alt="" />
                </a>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
