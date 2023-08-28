import { useState } from "react";
import { ParticipantsSectionData } from "../Data/ChartsData";
import ParticipantsSectionChart from "./ParticipantsSectionChart";

const ParticipantsSection = () => {
  const [selectedTime, setSelectedTime] = useState<
    "1h" | "24h" | "30d" | "60d"
  >("30d");

  return (
    <section className="w-full h-fit flex flex-col items-center justify-center">
      <div className="max-w-[66rem]  w-full h-28 flex items-center justify-between">
        <p className="text-lg md:text-2xl font-semibold text-center">
          Summer referral competition
        </p>

        <div className="flex text-sm bg-white md:text-md rounded-b-[3px] shadow-md  shadow-gray-400 rounded-md p-1">
          <div
            onClick={() => setSelectedTime("1h")}
            className={
              selectedTime === "1h"
                ? "px-2 mx-1 py-1 cursor-pointer bg-gray-300 rounded-md"
                : "px-2 mx-1 py-1 cursor-pointer"
            }
          >
            1h
          </div>
          <div
            onClick={() => setSelectedTime("24h")}
            className={
              selectedTime === "24h"
                ? "px-2 mx-1 py-1 cursor-pointer bg-gray-300 rounded-md"
                : "px-2 mx-1 py-1 cursor-pointer"
            }
          >
            24h
          </div>
          <div
            onClick={() => setSelectedTime("30d")}
            className={
              selectedTime === "30d"
                ? "px-2 mx-1 py-1 cursor-pointer bg-gray-300 rounded-md"
                : "px-2 mx-1 py-1 cursor-pointer"
            }
          >
            30d
          </div>
          <div
            onClick={() => setSelectedTime("60d")}
            className={
              selectedTime === "60d"
                ? "px-2 mx-1 py-1 cursor-pointer bg-gray-300 rounded-md"
                : "px-2 mx-1 py-1 cursor-pointer"
            }
          >
            60d
          </div>
        </div>
      </div>
      {/* Chart */}
      <ParticipantsSectionChart
        series={() => {
          if (selectedTime === "1h")
            return ParticipantsSectionData[0].data.slice(0, 10);
          if (selectedTime === "24h")
            return ParticipantsSectionData[0].data.slice(0, 24);
          if (selectedTime === "30d")
            return ParticipantsSectionData[0].data.slice(0, 30);
          if (selectedTime === "60d")
            return ParticipantsSectionData[0].data.slice(0, 60);
          return ParticipantsSectionData[0].data;
        }}
        participantsCount={100000}
      />
    </section>
  );
};

export default ParticipantsSection;
