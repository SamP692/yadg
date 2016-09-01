console.log('app js loaded')

class App {
  constructor() {
    this.user;
    this.day = 0;
  }
  startGame() {
    let getUserName = prompt('What\'s your name again, bro? -Love, your Bookie &hearts');
    this.user = new User(`${getUserName}`);
    this.user.render();
    this.nextDay();
  }
  nextDay() {
    this.day ++;
    const getDayHouse = document.querySelector('#dayHouse');
    getDayHouse.innerHTML = `Day ${this.day} <button id="newDayButton">Finish Day</button>`
    this.dayEventListener();
  }
  dayEventListener() {
    document.querySelector('#newDayButton').addEventListener('click', function() {
      newGame.nextDay();
    })
  }
}

const newGame = new App();
newGame.startGame();
