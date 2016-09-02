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
    this.games = new GameList(this.teams,this.numOfTeams);
  }
  newLeague() {
    let freshLeague = new League();
    freshLeague.buildLeague();
    this.numOfTeams = freshLeague.numOfTeams;
    this.teams = freshLeague.teamList;
  }
  newUser() {
    let getUserName = prompt('What\'s your name again, bro? -Love, your Bookie &hearts');
    this.user = new User(`${getUserName}`);
    this.user.render();
  }
  nextDay() {
    this.day ++;
    const getDayHouse = document.querySelector('#dayHouse');
    getDayHouse.innerHTML = `Day ${this.day} <button id="newDayButton">Finish Day</button>`
    this.dayEventListener();
    this.newGameList();

  }
  dayEventListener() {
    let self = this;
    document.querySelector('#newDayButton').addEventListener('click', function() {
      self.nextDay();
    })
  }
  upgradeScoutingListener() {
    let self = this;
    document.querySelector('#upgradeScouting').addEventListener('click', function() {
      self.user.upgradeScouting();
    })
  }
}

const newGame = new App();
newGame.startGame();
