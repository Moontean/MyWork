import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";

export default async function Home() {
 const allCars = await fetchCars();
  //console.log(allCars)
 const isDataEmpty =!Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
     <Hero />

     <div className="mt-12 padding-x padding-y max-wisth" id="discover">
      <div className="home__text-container">
       <h1 className="text-5x1 font-extrabold">
        Car catalogue
       </h1>
       <p> Explore the ars you might like</p>
      <div className="home__filters">
       <SearchBar />
      </div>
      <div className="home__filter-container">
       <CustomFilter title = "fuei" />
       <CustomFilter title = "year"/>
      </div>
      </div>
      {!isDataEmpty ? (
        <section>
         <div className="home__cars-wrapper">
          {allCars?.map((car) => (
            <CarCard car={car} />
          ))}
         </div>
        </section>
      ): (
        <div className="home__error-container">
          <h2 className = "text-black text=x1 font-bold">
           Ooops, no results
           <p>{allCars?.message}</p>
          </h2>
        </div>
      )
    }
     </div>
    </main>
  );
}
