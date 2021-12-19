import Image from "next/image";

export default function Hero() {
      return (
            <div className="relative h-[29rem] sm:h-[31rem] lg:[33rem] xl:h-[35rem] 2xl:h-[37rem] ">
                  <Image
                        src={"/images/Airbnb_Hero.webp"}
                        layout="fill"
                        objectFit="cover"
                        objectPosition={"center"}
                        alt="Kid,dog and man hiking"
                  />
                  <div className="absolute top-1/2 w-full text-center">
                        <p className="text-sm sm:text-xl">Not sure where to go? Perfect.</p>
                        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md
                        font-bold my-3.5 hover:shadow-xl active:scale-95 duration-300">I'm flexible</button>
                  </div>
            </div>
      )
}
