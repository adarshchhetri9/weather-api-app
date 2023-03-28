import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState("imphal");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

  console.log(city);
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading("false");
  };

  return (
    <>
      <Head>
        <title>Weather Api projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]" />

      <Image
        src="https://images.unsplash.com/photo-1501588647130-2e99f4585623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        layout="fill"
        className="object-cover"
        alt="bg"
      />

      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-[2]">
        <form className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-2xl text-white">
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent placeholder:text-gray-200 focus:outline-none text-xl"
              type="text"
              placeholder="Search city"
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
    </>
  );
}
