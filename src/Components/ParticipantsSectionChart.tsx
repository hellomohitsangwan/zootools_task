import Chart from "react-apexcharts";
import { ParticipantsSectionChartConfig } from "../Data/ChartsConfig";
import UserIcon from "../assets/user.png";

interface Props {
  series: () => number[];
  participantsCount: number;
}

const ParticipantsSectionChart = ({ series, participantsCount }: Props) => {
  return (
    <div className="w-full">
      <div className="max-w-[66rem] mx-auto shadow-md bg-white shadow-gray-400 rounded-md">
        <div className="relative top-5 left-5 w-fit">
          <div className="flex gap-x-2 items-center justify-center">
            <p className="text-3xl font-sans font-semibold">
              {participantsCount.toLocaleString()}
            </p>
            <img src={UserIcon} className="w-6 h-6" alt="" />
          </div>
          <p className="text-gray-600 text-lg">Participants</p>
        </div>
        <Chart
          options={ParticipantsSectionChartConfig as any}
          series={[{ data: series() }]}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
};

export default ParticipantsSectionChart;
