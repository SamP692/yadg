console.log('game js loaded');

class GameList {
  constructor(teamList, scoutingLevel) {
    this.teams = teamList;
    this.scouting = scoutingLevel;
    this.gamesLeft = 10;
    this.games = [];
  }
  createGames() {
    while (this.gamesLeft > 0) {
      const teamANum = Math.floor(Math.random() * (this.teams.length - 0)) + 0;
      const teamA = this.teams.slice(teamANum, teamANum + 1);
      this.teams.splice(teamANum, 1);
      const teamBNum = Math.floor(Math.random() * (this.teams.length - 0)) + 0;
      const teamB = this.teams.slice(teamBNum, teamBNum + 1);
      this.teams.splice(teamBNum, 1);
      const newGame = new Game(teamA, teamB, this.scouting);
      this.games.push(newGame);
      this.gamesLeft --;
    }
  }
  renderGame() {
  }
}
