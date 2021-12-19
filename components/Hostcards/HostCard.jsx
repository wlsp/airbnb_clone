import Image from "next/image";

export default function HostCard({ img, location, distance }) {

      return (
            <div className="flex items-center m-2 mt-5 space-x-6 rounde-xl 
            cursor-pointer hover:bg-gray-50 hover:scale-105 transform transition duration-300 ease-out">
                  <figure className="relative h-16 w-16">
                        <Image src={img}
                              layout="fill"
                              className="rounded-lg" />
                  </figure>
                  <div>
                        <h2>{location}</h2>
                        <h3 className="text-gray-500">{distance}</h3>
                  </div>
            </div>
      )
}
