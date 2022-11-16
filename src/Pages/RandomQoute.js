import React, { useState } from "react";
import axios from "axios";
import NavHeader from "./NavHeader";
const RandomQoute = () => {
  const [advice, setAdvice] = useState("There is A Best Advice for you");
  const fetchdevice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((result) => {
        const advice = result.data.slip.advice;
        setAdvice(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container mx-auto bg-hero-pattern bg-no-repeat bg-cover pb-40 pt-4">
        <NavHeader />
        <div className=" ml-12 mt-10 mb-10 rounded-2xl bg-white w-[50%] h-[150px] mt-60">
          <p className=" text-sm font-serif text-black pt-2 px-3 py-4 sm:text-bse font-bold md:text-lg  lg:text-xl">
            {advice}
          </p>
        </div>
        <button
          onClick={fetchdevice}
          className="bg-purple-600 mb-6 text-white ml-12 hover:bg-black hover:text-white border-2 border-transparent hover:border-2 hover:border-black text-sm font-normal uppercase px-4 py-1 rounded-2xl"
        >
          Next Advice
        </button>
      </div>
    </>
  );
};

export default RandomQoute;
