import { ArrowForward } from "@mui/icons-material";

function Blog() {
  const cardData = [
    {
      id: 1,
      image: "/Blog-Container-1.png",
      title: "Make myspace your best designed space",
      description:
        "A lot of different components that will help you create the perfect look for your project",
      buttonLevel: "Design",
    },
    {
      id: 2,
      image: "/Blog-Container-2.png",
      title: "My company culture has changed today",
      description:
        "A lot of different components that will help you create the perfect look for your project",
      buttonLevel: "3D illustrations",
    },
    {
      id: 3,
      image: "/Blog-Container-3.png",
      title: "Professionals in craft! All products were super great",
      description:
        "A lot of different components that will help you create the perfect look for your project",
      buttonLevel: "Development",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-16 container max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-[100px] mb-[47px]">
        {/* Left Side or Section */}
        <div className="">
          <h1 className="text-3xl md:text-[55px] md:leading-[60px] font-medium text-[#000000] text-center md:text-left max-w-[609px] pb-4">
            Get more from our blog
          </h1>
          <p className="text-[#808080] text-base md:text-[21px] md:leading-[30px] text-center md:text-left md:max-w-[448px]">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
        </div>

        {/* Right Side or Section */}
        <div className="">
          <button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-[#FFFFFF] font-medium py-2 sm:py-[15px] px-3 sm:px-[16px]  rounded-lg transition duration-300 text-xs lg:text-base lg:flex items-center justify-center gap-2.5">
            Learn more <ArrowForward sx={{ fontSize: "24px" }} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-[#f9f9f9b4] rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer">
            <img className="w-full h-auto object-cover" src={card.image} alt="" />
            <div className="p-5">
              <h3 className="text-[#000000] text-base md:text-[28px] md:leading-[34px] font-medium mb-[13px]">
                {card.title}
              </h3>
              <p className="text-[#808080] text-base md:text-[17px] md:leading-[25px] mb-[19px]">
                {card.description}
              </p>
              <button className="bg-[#2AB6911C] text-[#2AB691] hover:bg-[#2AB691] hover:text-[#FFFFFF] font-medium py-[2px] sm:py-[5px] px-1 sm:px-[10px]  rounded-[5px] transition duration-300 text-xs lg:text-base">{card.buttonLevel}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
