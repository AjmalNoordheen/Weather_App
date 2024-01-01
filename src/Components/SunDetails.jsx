import React from "react";
import { UilSun } from "@iconscout/react-unicons";

function SunDetails({ allData }) {
  const sunDetails = [
    { type: "Rise", time: new Date(allData?.sys?.sunrise * 1000).toLocaleTimeString("en",
    { hour12: true, hour: "2-digit", minute: "2-digit" }) },
    { type: "Set", time: new Date(allData?.sys?.sunset * 1000).toLocaleTimeString("en", 
    { hour12: true, hour: "2-digit", minute: "2-digit" }) },
    { type: "High", time: (allData?.main?.temp_max - 273.15).toFixed(0) + "°" },
    { type: "Low", time: (allData?.main?.temp_min - 273.15).toFixed(0) + "°" },
  ];

  return (
    <div className="flex flex-col mt-2 sm:flex-row gap-y-2 sm:gap-y-0 items-center justify-center sm:space-x-3 text-white text-sm py-3">
      {sunDetails.map((item, index) => (
        <React.Fragment key={index + 1}>
          <UilSun size={30} color={"yellow"} />
          <p className="font-light">
            {item?.type}: <span className="font-medium ml-1 w-10">{item?.time}</span>
          </p>
          {index !== sunDetails?.length - 1 && <p>|</p>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default SunDetails;
