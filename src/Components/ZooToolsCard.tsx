interface Props {
  header: string;
  paragraph: string;
  color: string;
}

const ZooToolsCard = ({ header, paragraph, color }: Props) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg rounded-lg h-28 my-3 md:w-[46%] w-full">
      <div className="flex items-center justify-start h-1/2 px-5">
        <div className={`w-10 rounded-lg h-10 ${color}`}></div>
        <h2 className="ml-4 text-lg font-semibold">{header}</h2>
      </div>
      <div className="text-gray-700 flex items-center justify-start bg-gray-300 text-sm w-full h-1/2">
        <p className="px-5">{paragraph}</p>
      </div>
    </div>
  );
};

export default ZooToolsCard;
