console.log('app js loaded')

class App {
  constructor() {
    this.user;
    this.teams;
    this.games;
    this.numOfTeams;
    this.day = 0;
  }
  startGame() {
    this.newUser();
    this.upgradeScoutingListener();
    this.newLeague();
    this.nextDay();
  }
  newGameList () {
    const teamsCopy = this.teams.slice(0);
    this.games = new GameList(teamsCopy, this.user.scouting);
  }
  newLeague() {
    let freshLeague = new League();
    freshLeague.buildLeague();
    this.numOfTeams = freshLeague.numOfTeams;
    this.teams = freshLeague.teamList;
  }
  newUser() {
    let getUserName = prompt('What\'s your name again, bro? -Love, your Bookie');
    this.user = new User(`${getUserName}`);
    this.user.render();
  }
  // ALL THE THINGS THAT NEED TO HAPPEN AS SOON AS GAME MOVES TO NEW DAY
  nextDay() {
    this.day ++;
    const getDayHouse = document.querySelector('#dayHouse');
    getDayHouse.innerHTML = `Day ${this.day} <button id="newDayButton">Finish Day</button>`
    this.replaceGameListNode();
    this.dayEventListener();
    this.newGameList();
    this.games.newDay();
    this.newCheckButton();
  }
  // FUNCTION TO RENDER A NEW BUTTON TO CHECK OUTCOMES OF BETS
  newCheckButton() {
    const self = this;
    const checkEarnButton = document.createElement('button');
    checkEarnButton.innerHTML = "Check Winnings";
    checkEarnButton.addEventListener('click', function() {
      self.checkEarnings();
    });
    document.querySelector('#dayHouse').appendChild(checkEarnButton);
  }
  checkEarnings() {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }
  replaceGameListNode() {
    const oldNode = document.querySelector('#gameList');
    oldNode.remove();
    const newNode = document.createElement('div');
    newNode.setAttribute('id', 'gameList');
    const bodyDiv = document.querySelector('#bodyDiv');
    bodyDiv.appendChild(newNode);
  }
  dayEventListener() {
    const self = this;
    document.querySelector('#newDayButton').addEventListener('click', function() {
      self.nextDay();
    });
  }
  upgradeScoutingListener() {
    const self = this;
    document.querySelector('#upgradeScouting').addEventListener('click', function() {
      self.user.upgradeScouting();
    });
  }
}

const newGame = new App();
newGame.startGame();
