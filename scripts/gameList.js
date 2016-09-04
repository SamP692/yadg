console.log('game js loaded');

class GameList {
  constructor(teamList, scoutingLevel) {
    this.teams = teamList;
    this.scouting = scoutingLevel;
    this.gamesLeft = 10;
    this.games = [];
  }
  // WHAT TO DO WHEN THERE'S A NEW DAY
  newDay() {
    this.createGames();
    this.generateListOdds();
    this.renderList();
  }
  // FUNCTION TO CREATE LIST OF FICTIONAL GAMES WITH LIST OF TEAMS
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
  // FUNCTION TO GO THROUGH EACH GAME CREATED AND GIVE EACH TEAM ODDS
  generateListOdds() {
    for (let i = 0; i < this.games.length; i++) {
      this.generateGameOdds(i);
    }
  }
  // FUNCTION GIVE AN INDIVIDUAL GAME ODDS
  generateGameOdds(idx) {
    this.games[idx].generateOdds();
  }
  // FUNCTION TO PUT A SINGLE GAME ON THE PAGE
  renderSingleGame(idx) {
    let currentGame = idx + 1;
    const newGameHouse = document.createElement('div');
    newGameHouse.setAttribute('class', 'gameHouse');
    newGameHouse.innerHTML =
    `
      <input type="text" id="betA${currentGame}" /><p>${this.games[idx].teamA}(${this.games[idx].teamAAmerican}) vs ${this.games[idx].teamB}(${this.games[idx].teamBAmerican})</p><input type="text" id="betB${currentGame}" /> <div class="return" id="return${currentGame}"></div>
    `;
    const gameListNode = document.querySelector('#gameList');
    gameListNode.appendChild(newGameHouse);
  }
  // FUCNTION TO PUT THE WHOLE LIST OF GAMES ON THE PAGE
  renderList() {
    for (let i = 0; i < this.games.length; i++) {
      this.renderSingleGame(i);
    }
    const summaryHouse = document.createElement('div');
    summaryHouse.setAttribute('id', 'summaryHouse');
    summaryHouse.innerHTML = `
      Earnings: <span id="earnings"></span>
    `
    const gameListNode = document.querySelector('#gameList');
    gameListNode.appendChild(summaryHouse);
  }
}
