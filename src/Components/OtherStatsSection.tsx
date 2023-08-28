import LeaderBoardCard from "./LeaderBoardCard";
import LeaderBoardChartCard from "./LeaderBoardChartCard";

const OtherStatsSection = () => {
  return (
    <section className="w-full h-fit flex flex-col items-center justify-between mt-20 mb-10">
      <div className="max-w-[66rem] w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <LeaderBoardCard />
        <LeaderBoardChartCard
          title="Traffic"
          source="Source City"
          data={[30000, 20000, 10000, 5000, 3000, 2000]}
          bottomText="See traffic sources"
          num={1}
        />
        <LeaderBoardChartCard
          title="Signup location"
          source="Country City"
          data={[30000, 20000, 10000, 5000, 3000, 2000]}
          bottomText="See all countries"
          num={2}
        />
        <LeaderBoardChartCard
          title="Behaviour"
          source="Browsers Decides"
          data={[30000, 20000, 10000, 5000, 3000, 2000]}
          bottomText="See all countries"
          num={3}
        />
      </div>
    </section>
  );
};

export default OtherStatsSection;
