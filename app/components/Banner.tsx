import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative mb-8 bg-gradient-to-r from-sky-500 to-sky-700">
      <div className="px-8 py-12 mx-auto flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="text-center  mb-8 md:mb-0 ">
          <h1 className="text-white font-bold mb-4 text-4xl md:text-6xl">
            İndirim Fırsatı!
          </h1>
          <p className="text-white mb-2 text-lg md:text-xl">
            İndirimin tadını çıkarın
          </p>
          <p className="text-yellow-400 font-bold text-2xl md:text-4xl ">
            60% İndirim
          </p>
        </div>
        <div className="w-1/3 relative aspect-video ">
          <Image
            src="/banner.jpg"
            fill
            alt="Banner"
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
