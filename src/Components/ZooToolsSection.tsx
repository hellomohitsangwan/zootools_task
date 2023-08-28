import ZooToolsCard from "./ZooToolsCard";

const ZooToolsSection = () => {
  return (
    <section className="w-full h-fit flex flex-col items-center justify-between mt-20">
      <div className="shadow-sm bg-white shadow-gray-400 rounded-md">
        <div className="overflow-hidden max-w-[66rem] w-full mt-4 flex max-xl:p-3 flex-col gap-y-5 md:flex-row md:gap-y-0 items-center justify-between">
          <div className="ml-7">
            <p className="text-xl text-center md:text-left md:text-4xl font-semibold w-fit">
              ZooTools AI-powered insights
            </p>
            <p className="text-md text-center md:text-left mt-2 md:text-xl text-gray-600 font-semibold w-fit">
              Making analytics simple and actionable
            </p>
          </div>
          <div className="flex mr-7 w-28 text-sm md:text-md border-2 hover:bg-gray-400 rounded-md border-gray-400 items-center justify-center">
            <p className="text-center cursor-pointer p-2">Ask Question</p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden max-w-[66rem] w-full flex flex-col mt-5 mb-5 gap-y-5 md:flex-row md:gap-y-0 items-center justify-evenly  flex-wrap">
            <ZooToolsCard
              color="bg-red-500"
              header="What is the best time to post?"
              paragraph="Get the best time to post on your social media accounts based on your audience engagement."
            />
            <ZooToolsCard
              color="bg-green-400"
              header="What is the best time to post?"
              paragraph="Get the best time to post on your social media accounts based on your audience engagement."
            />
            <ZooToolsCard
              color="bg-green-400"
              header="What is the best time to post?"
              paragraph="Get the best time to post on your social media accounts based on your audience engagement."
            />
            <ZooToolsCard
              color="bg-yellow-400"
              header="What is the best time to post?"
              paragraph="Get the best time to post on your social media accounts based on your audience engagement."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZooToolsSection;
