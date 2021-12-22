
import { useRouter } from "next/router";
import { format } from "date-fns";
import { v4 as uuid_v4 } from "uuid";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoCard from "../components/InfoCard/InfoCard";
import Map from "../components/Map/Map";

// This gets called on every request
export async function getServerSideProps() {
      // Fetch data from external API
      const res = await fetch(`https://links.papareact.com/isz`)
      const searchResults = await res.json()

      // Pass data to the page via props
      return { props: { searchResults } }
}

export default function Search({ searchResults }) {
      const router = useRouter();

      const { location, startDate, endDate, noOfGuests } = router.query;

      const formattedStartdate = format(new Date(startDate), "dd MMM yyy");
      const formattedEndDate = format(new Date(endDate), "dd MMM yyy");

      const range = `${formattedStartdate} - ${formattedEndDate}`

      // console.log(searchResults)
      return (
            <div className="h-screen">
                  <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
                  <main className="flex flex-col">
                        <section className="flex-grow pt-14 ">
                              <p className="text-xs">
                                    300+ Stays - {range} -  for {noOfGuests} guests
                              </p>
                              <h1 className="text-3xl font-semibold mt-2 mb-4 md-6">Stays in {location}</h1>
                              <div className=" hidden lg:inline-flex mb-5 space-x-4 text-gray-800 whitespace-nowrap">
                                    <p className="button">Cancelation Flexibility</p>
                                    <p className="button">Type of Place</p>
                                    <p className="button">Price</p>
                                    <p className="button">Rooms and Beds</p>
                                    <p className="button">More Filters</p>
                              </div>
                              <div className="flex flex-col">
                                    {searchResults.map(({ img, location, title, description, star, price, total }) => (
                                          <InfoCard
                                                key={uuid_v4()}
                                                img={img}
                                                location={location}
                                                title={title}
                                                description={description}
                                                star={star}
                                                price={price}
                                                total={total}
                                          />
                                    ))}
                              </div>
                        </section>
                        <section className="h-[16rem] w-screen relative ">
                              <Map searchResults={searchResults} />

                        </section>
                  </main>
                  <Footer />
            </div>
      )
}

