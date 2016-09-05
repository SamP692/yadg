console.log('game js loaded');

class Game {
  constructor(teamA, teamB, scoutingLevel) {
    this.scouting = scoutingLevel;
    this.teamA = teamA;
    this.teamB = teamB;
    this.teamATrue = 0;
    this.teamBTrue = 0;
    this.teamAOfficial = 0;
    this.teamBOfficial = 0;
    this.teamAAmerican = 0;
    this.teamBAmerican = 0;
    this.teamAScout = 0;
    this.teamBScout = 0;
    this.winningTeam;
  }
  // FUNCTION TO CALCULATE THE WINNINGS OF THIS GAME GIVEN ITS INDEX NUMBER IN THE GAMELIST GAMES ARRAY
  calculateWinnings(idx) {
    const currentIdx = idx + 1;
    const teamABet = document.querySelector('#betA'+currentIdx).value;
    const teamBBet = document.querySelector('#betB'+currentIdx).value;
    const resultNode = document.querySelector('#return'+currentIdx);
    if (teamABet == 0 && teamBBet == 0) {
      resultNode.innerHTML = 0;
    } else if (teamABet != 0 && teamBBet != 0) {
      resultNode.innerHTML = 0;
    } else if (teamABet != 0 && teamBBet == 0) {
      if (this.teamAAmerican > 0) {
        resultNode.innerHTML = parseInt(teamABet * (this.teamAAmerican / 100));
      } else {
        resultNode.innerHTML = parseInt(teamABet / (Math.abs(this.teamAAmerican) / 100));
      }
    } else if (teamABet ==0 && teamBBet != 0) {
      if (this.teamBAmerican > 0) {
        resultNode.innerHTML = parseInt(teamBBet * (this.teamBAmerican / 100));
      } else {
        resultNode.innerHTML = parseInt(teamBBet / (Math.abs(this.teamBAmerican) / 100));
      }
    } else {
      console.log('calculateWinnings() in game class is having trouble');
    }
  }
  // PROCESSES AND RETURNS FINAL EARNINGS
  returnWinnings(idx) {
    const teamABet = document.querySelector('#betA'+idx).value;
    const teamBBet = document.querySelector('#betB'+idx).value;
    const resultNode = document.querySelector('#return'+idx);
    if (teamABet == 0 && teamBBet == 0) {
      resultNode.innerHTML = 0;
    } else if (teamABet !=0 && teamBBet != 0) {
      resultNode.innerHTML = 0;
    } else if (this.winningTeam == 'A' && teamABet != 0) {
      if (this.teamAAmerican > 0) {
        resultNode.innerHTML = parseInt(teamABet * (this.teamAAmerican / 100));
      } else {
        resultNode.innerHTML = parseInt(teamABet / (Math.abs(this.teamAAmerican) / 100));
      }
    } else if (this.winningTeam == 'A' && teamBBet != 0) {
      resultNode.innerHTML = "-"+teamBBet;
    } else if (this.winningTeam == 'B' && teamBBet != 0) {
      if (this.teamBAmerican > 0) {
        resultNode.innerHTML = parseInt(teamBBet * (this.teamBAmerican / 100));
      } else {
        resultNode.innerHTML = parseInt(teamBBet / (Math.abs(this.teamBAmerican) / 100));
      }
    } else if (this.winningTeam == 'B' && teamABet != 0) {
      resultNode.innerHTML = "-"+teamABet;
    } else {
      console.log('calculateWinnings() in game class is having trouble');
    }
  }
  // FUNCTION TO CALL ALL THE OTHER ODDS GENERATION FUNCTIONS
  generateOdds() {
    this.trueOdds();
    this.officialOdds();
    this.americanOdds();
    this.predictions();
  }
  // CONVERTS OFFICIAL ODDS TO AMERICAN ODDS FORMAT
  americanOdds() {
    const officialAPerc = this.teamAOfficial / 100;
    const officialBPerc = this.teamBOfficial / 100;
    if (this.teamAOfficial > 50) {
      this.teamAAmerican = parseInt((officialAPerc / ((1 - officialAPerc) * (-100))) * 10000);
    } else if (this.teamAOfficial < 50) {
      this.teamAAmerican = parseInt(((1 - officialAPerc) / (officialAPerc * 100)) * 10000);
    } else {
      this.teamAAmerican = 100;
    }
    if (this.teamBOfficial > 50) {
      this.teamBAmerican = parseInt((officialBPerc / ((1 - officialBPerc) * (-100))) * 10000);
    } else if (this.teamBOfficial < 50) {
      this.teamBAmerican = parseInt(((1 - officialBPerc) / (officialBPerc * 100)) * 10000);
    } else {
      this.teamBAmerican = 100;
    }
  }
  // RANDOMLY BUILDS ACTUAL CHANCES FOR EITHER TEAM TO WIN
  trueOdds() {
    const teamAOdds = Math.floor(Math.random() * (80 - 20)) + 20;
    const teamBOdds = 100 - teamAOdds;
    this.teamATrue = teamAOdds;
    this.teamBTrue = teamBOdds;
  }
  // GENERATES BOOKIE'S ODDS WHICH IS PLUS/MINUS 20 POINTS FROM THE TRUE ODDS
  officialOdds() {
    this.teamAOfficial = Math.floor(Math.random() * ((this.teamATrue + 20) - (this.teamATrue - 20)) + (this.teamATrue - 20));
    this.teamBOfficial = 100 - this.teamAOfficial;
  }
  // GENERATES SCOUT TEAM'S ODDS WHICH PLUS MINUS X POINTS (DEPENDING ON LEVEL) FROM THE TRUE ODDS
  predictions() {
    const scoutingEffect = 20 - (this.scouting * 2);
    this.teamAScout = Math.floor(Math.random() * ((this.teamATrue + scoutingEffect) - (this.teamATrue - scoutingEffect)) + (this.teamATrue - scoutingEffect));
    this.teamBScout = 100 - this.teamAScout;
  }
  simulateGame() {
    const simValue = Math.floor(Math.random() * (100 - 0) - 0);
    if (simValue < this.teamATrue) {
      this.winningTeam = 'A';
    } else {
      this.winningTeam = 'B';
    }
  }
}

// logGameInfo() {
//   this.generateOdds();
//   console.log('Team A: ' + this.teamA);
//   console.log('Team B: ' + this.teamB);
//   console.log('Team A Real Chance: ' + this.teamATrue + '%');
//   console.log('Team B Real Chance: ' + this.teamBTrue + '%');
//   console.log('Team A Official Chance: ' + this.teamAOfficial + '%');
//   console.log('Team B Official Chance: ' + this.teamBOfficial + '%');
//   console.log('Team A Predicted Chance: ' + this.teamAScout + '%');
//   console.log('Team B Predicted Chance: ' + this.teamBScout + '%');
// }
