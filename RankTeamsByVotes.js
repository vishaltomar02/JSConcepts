var rankTeams = function (votes) {
  let votingPoints = new Map();
  const candidatesLength = votes[0]?.length ?? 0;
  for (let i = 0; i < votes.length; i++) {
    for (let j = 0; j < candidatesLength; j++) {
      const candidate = votes[i][j];
      if (!votingPoints.has(candidate)) {
        votingPoints.set(candidate, Array(candidatesLength).fill(0));
      }
      votingPoints.get(candidate)[j]++;
    }
  }
  let votingPointsSorted = Array.from(votingPoints.entries()).sort((a, b) => {
    for (let i = 0; i < candidatesLength; i++) {
      if (a[1][i] !== b[1][i]) return b[1][i] - a[1][i];
    }
    return a[0].localeCompare(b[0]);
  });
  return votingPointsSorted.reduce((acc, curr) => acc += curr[0], "")
};

console.log(rankTeams(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"]));