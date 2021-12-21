
import { useRouter } from "next/router";
import { format } from "date-fns";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import searchData from "../data/searchresults.json"


// This gets called on every request
export async function getServerSideProps() {
      // Fetch data from external API
      const res = await fetch(`https://links.papareact.com/isz`)
      const data = await res.json()
    
      // Pass data to the page via props
      return { props: { data } }
    }

export default function Search({ data }) {
      const router = useRouter();

      const { location, startDate, endDate, noOfGuests } = router.query;

      const formattedStartdate = format(new Date(startDate), "dd MMM yyy");
      const formattedEndDate = format(new Date(endDate), "dd MMM yyy");

      const range = `${formattedStartdate} - ${formattedEndDate}`

      console.log(data)
      return (
            <div className="h-screen">
                  <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
                  <main className="flex">
                        <section className="flex-grow pt-14 px-6">
                              <p className="text-xs">
                                    300+ Stays - {range} -  for {noOfGuests} guests
                              </p>
                              <h1 className="text-3xl font-semibold mt-2 md-6">Stays in {location}</h1>
                              <div className=" hidden lg:inline-flex mb-5 space-x-4 text-gray-800 whitespace-nowrap">
                                    <p className="button">Cancelation Flexibility</p>
                                    <p className="button">Type of Place</p>
                                    <p className="button">Price</p>
                                    <p className="button">Rooms and Beds</p>
                                    <p className="button">More Filters</p>
                              </div>
                        </section>
                  </main>
                  <Footer />
            </div>
      )
}

