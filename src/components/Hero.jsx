function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-[18px] py-16 px-6 lg:px-16 container max-w-[1400px] mx-auto">
        <div className="flex-1 flex flex-col items-start gap-5 lg:gap-12">
          <h1 className="text-2xl lg:text-7xl font-semibold lg:leading-[87.14px] max-w-[642px]">
            Simply explained with illustrations
          </h1>
          <p className="text-lg lg:text-xl text-[#00000080] max-w-[448px] leading-[30px]">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#5F62E2] hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-3 sm:px-6 transition duration-300 rounded-lg text-xs lg:text-base">
              Get Started
            </button>
            <button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-indigo-200 font-semibold py-2 sm:py-3 px-3 sm:px-6 rounded-lg transition duration-300 text-xs lg:text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-full h-auto max-w-lg" src="/rocket.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;
