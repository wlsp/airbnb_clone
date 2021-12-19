import Image from "next/image";
import { GlobeAltIcon, MenuAlt1Icon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

export default function Header() {
      return (
            <header className="sticky top-0  grid grid-cols-3 
            bg-slate-50 shadow-md p-5 md:px-10 z-50" >
                  <div className="relative flex items-center h-10
                  cursor-pointer my-auto">
                        <Image src={'/images/Airbnb_Logo.png'}
                              layout={"fill"}
                              objectFit={"contain"} objectPosition={"left"}
                        />
                  </div>
                  <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                        <input type={"text"} placeholder="Seach your place"
                              className="pl-5 bg-transparent outline-none flex-grow
                        text-sm text-gray-500" />
                        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white 
                        rounded-full p-1.5 cursor-pointer
                        md:mx-2" />
                  </div>
                  <div className="flex items-center space-x-4 justify-end text-gray-500">
                        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                        <GlobeAltIcon className="h-6 " />
                        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
                              <MenuAlt1Icon className="h-6" />
                              <UserCircleIcon className="h-6" />
                        </div>
                  </div>
            </header>
      )
}
