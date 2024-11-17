import { useState } from "react";

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="bg-[#F9F9F9]">
      <div className="flex flex-col items-center gap-8 md:gap-[54px] pt-[120px] pb-[104px] px-6 lg:px-16 container max-w-[1400px] mx-auto">
        <h1 className="text-3xl md:text-[55px] font-semibold">
          Use illustrations in UI design
        </h1>

        <div className="w-full max-w-7xl mx-auto">
          {isPlaying ? (
            <iframe
              className="relative w-full aspect-video object-cover rounded-xl"
              width="1300"
              height="655"
              src="https://www.youtube.com/embed/mRFZ_uX9LQ4?autoplay=1&si=PnHZHfmesDavw2Ch"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="cursor-pointer" onClick={handlePlay}>
              <img
                className="object-cover rounded-xl w-full"
                src="/thumbnail.png"
                alt="Custom Thumbnail"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Video;
