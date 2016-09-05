console.log('app js loaded')

class App {
  constructor() {
    this.user;
    this.teams;
    this.games;
    this.numOfTeams;
    this.day = 0;
    this.victoryCondition = 1000000;
  }
  startGame() {
    this.newUser();
    this.upgradeScoutingListener();
    this.newLeague();
    this.nextDay();
  }
  newGameList() {
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
    this.newPlayButton();
  }
  // FUNCTION TO RENDER A NEW BUTTON TO CHECK OUTCOMES OF BETS
  newCheckButton() {
    const self = this;
    const checkEarnButton = document.createElement('button');
    checkEarnButton.setAttribute('id', 'checkButton');
    checkEarnButton.innerHTML = 'Check Winnings';
    checkEarnButton.addEventListener('click', function() {
      self.games.checkWinnings();
    });
    document.querySelector('#dayHouse').appendChild(checkEarnButton);
  }
  // FUNCTION TO RENDER A NEW PLAY GAMES BUTTON TO PLAY GAMES
  newPlayButton() {
    const self = this;
    const playGamesButton = document.createElement('button');
    playGamesButton.setAttribute('id', 'playButton');
    playGamesButton.innerHTML = 'Play Games';
    playGamesButton.addEventListener('click', function() {
      self.games.simulateGames();
      self.updateUserCash();
      self.user.render();
      self.removeCheckAndPlay();
      self.checkWin();
    })
    document.querySelector('#dayHouse').appendChild(playGamesButton);
  }
  // CHECKS TO SEE IF DAY'S EARNINGS HAVE PUSHED USER OVER WIN LIMIT
  checkWin() {
    if(this.user.cash > this.victoryCondition) {
      alert(`You've reached a milly! You're a legend! It took you ${this.day} days`);
      this.removeCheckAndPlay();
      const nextDayButton = document.querySelector('#newDayButton');
      nextDayButton.remove();
    } else if (this.user.cash <= 0) {
      alert(`Sorry, you're venture as a shady gambler has come to an end after ${this.day} days`);
      const nextDayButton = document.querySelector('#newDayButton');
      nextDayButton.remove();
    }
  }
  // FUNCTION TO REMOVE CHECK & PLAY BUTTONS AFTER PLAY BUTTON CLICK EVENT
  removeCheckAndPlay() {
    const checkButton = document.querySelector('#checkButton');
    checkButton.remove();
    const playButton = document.querySelector('#playButton');
    playButton.remove();
  }
  // FUNCTION TO UPDATE CASH AFTER GAMES HAVE BEEN PLAYED
  updateUserCash() {
    const dailyReturn = document.querySelector('#earnings').innerHTML;
    this.user.cash += parseInt(dailyReturn);
  }
  // FUNCTION TO REPLACE THE NODE HOUSING THE GAMELIST FOR DAY CHANGE
  replaceGameListNode() {
    const oldNode = document.querySelector('#gameList');
    oldNode.remove();
    const newNode = document.createElement('div');
    newNode.setAttribute('id', 'gameList');
    const bodyDiv = document.querySelector('#bodyDiv');
    bodyDiv.appendChild(newNode);
  }
  // LISTENER FOR NEXT DAY BUTTON
  dayEventListener() {
    const self = this;
    document.querySelector('#newDayButton').addEventListener('click', function() {
      self.nextDay();
    });
  }
  // LISTENER FOR UPGRADE SCOUTING BUTTON
  upgradeScoutingListener() {
    const self = this;
    document.querySelector('#upgradeScouting').addEventListener('click', function() {
      self.user.upgradeScouting();
    });
  }
}

const newGame = new App();
newGame.startGame();
