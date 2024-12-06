import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/4I9BfKERwlVqOCIL74FNpta7IaQQ78iXO1QzMx87Y1yfED4TA.jpg"
            alt="Riot Games Logo"
            className="h-8 mr-2"
            width="50"
            height="50"
          />
          <span className="text-xl font-bold">Riot Games</span>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Standings
          </a>
          <a href="#" className="text-white">
            Pick'Ems
          </a>
          <a href="#" className="text-white">
            News
          </a>
        </nav>
        <button className="bg-red-600 px-4 py-2 rounded">Login</button>
      </header>

      {/* Main Content */}
      <main className="p-4">
        <h1 className="text-4xl font-bold mb-4">Standings</h1>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-1/4 bg-gray-800 p-4">
            <h2 className="text-lg font-bold mb-2">Filter</h2>
            <ul>
              {[
                "Champions",
                "Challengers BR",
                "Challengers JPN",
                "Challengers KR",
                "Challengers LATAM N",
                "Challengers LATAM S",
                "Challengers NA",
                "Challengers SEA",
                "Challengers SEA ID",
                "Challengers SEA PH",
                "Challengers SEA MY & SG",
                "Challengers SEA TH",
              ].map((region, index) => (
                <li className="mb-2" key={index}>
                  <a
                    href="#"
                    className={`block p-2 ${
                      region === "Champions"
                        ? "bg-yellow-600"
                        : region === "Challengers BR"
                        ? "bg-teal-700"
                        : "bg-gray-700"
                    }`}
                  >
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Standings Section */}
          <section className="w-3/4 p-4">
            <h2 className="text-xl font-bold mb-4">Phase: Champions Seoul</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Round 1",
                  matches: [
                    {
                      team1: "FNATIC",
                      score1: 2,
                      team2: "Bilibili Gaming",
                      score2: 0,
                    },
                    {
                      team1: "KRÜ Esports",
                      score1: 1,
                      team2: "DRX",
                      score2: 2,
                    },
                  ],
                },
                {
                  title: "Upper Bracket - Finals",
                  matches: [
                    { team1: "DRX", score1: 2, team2: "FNATIC", score2: 0 },
                  ],
                },
                {
                  title: "Lower Bracket - Round 1",
                  matches: [
                    {
                      team1: "KRÜ Esports",
                      score1: 2,
                      team2: "Bilibili Gaming",
                      score2: 0,
                    },
                  ],
                },
                {
                  title: "Lower Bracket - Finals",
                  matches: [
                    {
                      team1: "FNATIC",
                      score1: 2,
                      team2: "KRÜ Esports",
                      score2: 1,
                    },
                  ],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold mb-2">{section.title}</h3>
                  {section.matches.map((match, idx) => (
                    <div className="bg-gray-800 p-4 mb-2" key={idx}>
                      <div className="flex justify-between">
                        <span>{match.team1}</span>
                        <span>{match.score1}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{match.team2}</span>
                        <span>{match.score2}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
