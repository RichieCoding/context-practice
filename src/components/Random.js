const arr = ['Richard', 'Josh', 'Austin', "Los", "Manny", "Guy", "Jonas", "Twin1", "Twin2", "Ace"]

function shufflePlayers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function splitTeams(arr) {
  const players = {}
  for(let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      players[arr[i]] = "Team 1"
    } else {
      players[arr[i]] = "Team 2"
    }
  }
  return players
}

function makeTeams(players) {
  let shuffled = shufflePlayers(players)
  let split = splitTeams(shuffled)
  return split
}

const finalTeams = makeTeams(arr)

const team1 = []
const team2 = []
for (let player in finalTeams) {
  if (finalTeams[player] === 'Team 1') {
    team1.push(player)
  } else {
    team2.push(player)
  }
}

console.log(finalTeams)
console.log(team1)
console.log(team2)

