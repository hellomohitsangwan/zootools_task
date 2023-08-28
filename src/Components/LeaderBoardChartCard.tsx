import Chart from "react-apexcharts";
import {
  LeaderboardSectionChartConfig1,
  LeaderboardSectionChartConfig2,
  LeaderboardSectionChartConfig3,
} from "../Data/ChartsConfig";

interface Props {
  title: string;
  data: number[];
  source: string;
  bottomText: string;
  num: number;
}

const LeaderBoardChartCard = ({
  bottomText,
  data,
  source,
  title,
  num,
}: Props) => {
  return (
    <div className="relative bg-white flex flex-col items-center justify-around shadow-lg shadow-gray-400 aspect-square mx-auto rounded-lg w-full">
      <div className="absolute top-4 flex px-5 w-full flex-row items-center justify-between">
        <p className="text-xl font-semibold ml-2 text-left">{title}</p>
        <div className="flex gap-x-2">
          <p className="text-md text-gray-700 px-3 py-1 bg-gray-300 rounded-md">
            {source.split(" ")[0]}
          </p>
          <p className="text-md text-gray-700 px-3 py-1 rounded-md">
            {source.split(" ")[1]}
          </p>
        </div>
      </div>
      <div className="absolute right-5 mt-4 flex flex-col items-center justify-between h-[65%] z-10">
        {data.map((v) => {
          return <p>{v.toLocaleString()}</p>;
        })}
      </div>
      <br />
      <div className="flex flex-col w-full h-[80%]">
        <Chart
          options={
            (num === 1
              ? LeaderboardSectionChartConfig1
              : num === 2
              ? LeaderboardSectionChartConfig2
              : LeaderboardSectionChartConfig3) as any
          }
          series={[{ data: data }]}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
      <div className="w-full">
        <p className="text-sm  ml-7 rounded-md mb-3 font-semibold px-3 py-2 bg-gray-200 w-fit text-gray-700 text-left">
          {bottomText}
        </p>
      </div>
    </div>
  );
};

export default LeaderBoardChartCard;
