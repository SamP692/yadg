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
  }
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
        resultNode.innerHTML = teamABet * (this.teamAAmerican / 100);
      } else {
        resultNode.innerHTML = teamABet / (Math.abs(this.teamAAmerican) / 100);
      }
    } else if (teamABet ==0 && teamBBet != 0) {
      if (this.teamBAmerican > 0) {
        resultNode.innerHTML = teamBBet * (this.teamBAmerican / 100);
      } else {
        resultNode.innerHTML = teamBBet / (Math.abs(this.teamBAmerican) / 100);
      }
    } else {
      console.log('calculateWinnings() in game class is having trouble');
    }
  }
  generateOdds() {
    this.trueOdds();
    this.officialOdds();
    this.americanOdds();
    this.predictions();
  }
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
  trueOdds() {
    const teamAOdds = Math.floor(Math.random() * (80 - 20)) + 20;
    const teamBOdds = 100 - teamAOdds;
    this.teamATrue = teamAOdds;
    this.teamBTrue = teamBOdds;
  }
  officialOdds() {
    this.teamAOfficial = Math.floor(Math.random() * ((this.teamATrue + 20) - (this.teamATrue - 20)) + (this.teamATrue - 20));
    this.teamBOfficial = 100 - this.teamAOfficial;
  }
  predictions() {
    const scoutingEffect = 20 - (this.scouting * 2);
    this.teamAScout = Math.floor(Math.random() * ((this.teamATrue + scoutingEffect) - (this.teamATrue - scoutingEffect)) + (this.teamATrue - scoutingEffect));
    this.teamBScout = 100 - this.teamAScout;
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
