import Head from "next/head"
import { v4 as uuid_v4 } from "uuid";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import HostCard from "../components/Hostcards/HostCard";
import LargeCard from "../components/LargeCard/LargeCard";
import MediumCard from "../components/MediumCard/MediumCard";

export default function Home({ exploreData, cardsData }) {

  return (
    <div className="">
      <Head>
        <title>airbnb_clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <HostCard key={uuid_v4()}
                img={img}
                location={location}
                distance={distance} />
            )
            )}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className='flex space-x-4 overflow-scroll p-3'>
            {cardsData.map(({ img, title }) => (
              <MediumCard key={uuid_v4()}
                img={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img={"/images/Large_Card.webp"}
            title={"The Greatest Outdoors"}
            description={"Wishlists curated by Airbnb."}
            buttonText={"Get Inspired"}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then(res => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1")
    .then(res => res.json());

  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData
    }
  }
}