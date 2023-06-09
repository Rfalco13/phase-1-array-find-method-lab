// code your solution here
function superbowlWin(superbowls) {
    const winningGame = superbowls.find((game) => game.result === "W");
    return winningGame ? winningGame.year : undefined;
  }
  

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];

  const winnerYear = superbowlWin(record);
  console.log(winnerYear);