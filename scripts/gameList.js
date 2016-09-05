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
  // FUNCTION TO ITERATE THROUGH GAMES AND RUN CHECK EARNINGS FUNCTION
  checkWinnings() {
    let sumCounter = 0;
    for (let i = 0; i < this.games.length; i++) {
      const resultNodeFix = i + 1;
      this.games[i].calculateWinnings(i);
      const resultNode = document.querySelector('#return'+resultNodeFix);
      sumCounter += parseInt(resultNode.innerHTML);
    }
    const earningsNode = document.querySelector('#earnings');
    earningsNode.innerHTML = sumCounter;
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
    const currentGame = idx + 1;
    const newGameHouse = document.createElement('div');
    newGameHouse.setAttribute('class', 'gameHouse');
    newGameHouse.innerHTML =
    `
      <input type="text" id="betA${currentGame}" /><p>${this.games[idx].teamA}(${this.games[idx].teamAAmerican} | ${this.games[idx].teamAScout}%) vs ${this.games[idx].teamB}(${this.games[idx].teamBScout}% | ${this.games[idx].teamBAmerican})</p><input type="text" id="betB${currentGame}" /> <div class="return" id="return${currentGame}"></div>
    `;
    const gameListNode = document.querySelector('#gameList');
    gameListNode.appendChild(newGameHouse);
  }
  // FUNCION TO PUT THE WHOLE LIST OF GAMES ON THE PAGE
  renderList() {
    for (let i = 0; i < this.games.length; i++) {
      this.renderSingleGame(i);
    }
    const summaryHouse = document.createElement('div');
    summaryHouse.setAttribute('id', 'summaryHouse');
    summaryHouse.innerHTML = `
      Earnings: <span id="earnings"></span>
    `;
    const gameListNode = document.querySelector('#gameList');
    gameListNode.appendChild(summaryHouse);
  }
  // FUNCTION CALLS ALL GAMES TO SIMULATE THEMSELVES
  simulateGames() {
    this.runAllGames();
    let sumCounter = 0;
    for (let i = 0; i < this.games.length; i++) {
      const resultNodeFix = i + 1;
      this.games[i].returnWinnings(i + 1);
      const resultNode = document.querySelector('#return'+resultNodeFix);
      sumCounter += parseInt(resultNode.innerHTML);
    }
    const earningsNode = document.querySelector('#earnings');
    earningsNode.innerHTML = sumCounter;
  }
  runAllGames() {
    for (let i = 0; i < this.games.length; i++) {
      this.games[i].simulateGame();
    }
  }
}
