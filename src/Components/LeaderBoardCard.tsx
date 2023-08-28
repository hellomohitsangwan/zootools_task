const LeaderBoardCard = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-around shadow-lg shadow-gray-400 aspect-square mx-auto rounded-lg w-full">
      <p className="text-xl pl-7 font-semibold w-full text-left">
        User leaderboard
      </p>
      <table
        cellPadding={0}
        cellSpacing={0}
        className="h-[60%] w-[90%] text-gray-600 border-separate border-spacing-[14px] border-l-0"
      >
        <thead>
          <tr>
            <th className="font-semibold text-left text-sm">Email</th>
            <th className="font-semibold text-left text-sm">Friends invited</th>
            <th className="font-semibold text-left text-sm">County</th>
          </tr>
        </thead>
        <tbody className="h-[50%] border-spacing-y-[100px] border-separate">
          <tr className="h-8">
            <td className="text-sm">🧑emailaddr@email.com</td>
            <td className="text-sm">6500</td>
            <td className="text-sm">USA</td>
          </tr>
          <tr className="h-8">
            <td className="text-sm">🧑emailaddr@email.com</td>
            <td className="text-sm">6500</td>
            <td className="text-sm">USA</td>
          </tr>
          <tr className="h-8">
            <td className="text-sm">🧑emailaddr@email.com</td>
            <td className="text-sm">6500</td>
            <td className="text-sm">USA</td>
          </tr>
          <tr className="h-8">
            <td className="text-sm">🧑emailaddr@email.com</td>
            <td className="text-sm">6500</td>
            <td className="text-sm">USA</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full">
        <p className="text-sm  ml-8 rounded-md -mb-2 font-semibold px-3 py-2 bg-gray-200 w-fit text-gray-700 text-left">
          See leaderboard
        </p>
      </div>
    </div>
  );
};

export default LeaderBoardCard;
