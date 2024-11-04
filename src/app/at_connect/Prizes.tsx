import React from 'react';

const PrizeTable = () => {
  const prizes = [
    { place: 1, medal: "🥇", prize: "$400" },
    { place: 2, medal: "🥈", prize: "$300" },
    { place: 3, medal: "🥉", prize: "$200" },
    { place: 4, medal: "4th", prize: "$100" },
    { place: 5, medal: "5th", prize: "$100" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-6 px-8 text-left font-semibold text-gray-900 w-24 text-xl">Place</th>
              <th className="py-6 px-8 text-right font-semibold text-gray-900 text-xl">Prize Money</th>
            </tr>
          </thead>
          <tbody>
            {prizes.map((item) => (
              <tr 
                key={item.place} 
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors text-lg"
              >
                <td className="py-6 px-8 font-medium">
                  <div className="flex items-center gap-2">
                    {item.medal}
                    {item.place <= 3 && item.place}
                  </div>
                </td>
                <td className="py-6 px-8 text-right font-mono">{item.prize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrizeTable;