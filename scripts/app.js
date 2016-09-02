console.log('app js loaded')

class App {
  constructor() {
    this.user;
    this.teams;
    this.day = 0;
  }
  startGame() {
    this.newUser();
    this.nextDay();
    this.upgradeScoutingListener();
    this.newLeague();
  }
  newLeague() {
    let freshLeague = new League();
    freshLeague.buildLeague();
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
