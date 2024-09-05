import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
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
     </div>
    </main>
  );
}
