import React, { useRef } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Input({ setCity, city }) {
  const cityRef = useRef("");

  // Searching function for the cities
  const setInputCity = () => {
    try {
      const inputCity = cityRef.current.value;
      if (city === inputCity ) {
        toast.warn('type another city')
        return
      }
      if(inputCity === "") {
        toast.warn('type any city')
        return;
      }
      setCity(inputCity);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-center mt-3 w-full">
      <div className="flex flex-row w-3/4 md:w-2/4 mt-2 items-center justify-center rounded space-x-3">
        <input
          ref={cityRef}
          placeholder="Search Location"              
          type="text"
          className="text-lg rounded px-2 py-1 mr-2 outline-none bg-slate-200 shadow-xl"
        />
        <div className="flex items-center  justify-center gap-x-2">
          <p className="cursor-pointer maindeg" onClick={setInputCity}>
            <UilSearch
              size={25}
              className="text-white  hover:transition hover:scale-125"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Input;
