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
    this.teamAScout = 0;
    this.teamBScout = 0;
  }
  calculateWinnings() {
  }
  generateOdds() {
    this.trueOdds();
    this.officialOdds();
    this.predictions();
  }
  trueOdds() {
  }
  officialOdds() {
  }
  predictions() {
  }
}
