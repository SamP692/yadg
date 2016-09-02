console.log('user js loaded');

class User {
  constructor(name) {
    this.name = name;
    this.cash = 5000;
    this.scouting = 1;
    this.levelTwoCost = 500;
    this.levelThreeCost = 5000;
    this.levelFourCost = 50000;
    this.levelFiveCost = 200000;
    this.levelSixCost = 500000;
  }
  render() {
    const nameCase = document.querySelector('h2');
    nameCase.innerHTML = `${this.name}`;
    const moneyCase = document.querySelector('#cash');
    moneyCase.innerHTML = `$${this.cash}.00`;
    const scoutCase = document.querySelector('#scouting');
    scoutCase.innerHTML = `Level ${this.scouting}`;
    const upgradeButton = document.querySelector('#upgradeScouting');
    if(this.scouting===1) {
      upgradeButton.innerHTML = `Upgrade Scouting (${this.levelTwoCost})`;
    } else if (this.scouting===2) {
      upgradeButton.innerHTML = `Upgrade Scouting (${this.levelThreeCost})`;
    }
  }
  upgradeScouting() {
    if (this.scouting === 1 && this.cash > this.levelTwoCost) {
      this.scouting ++;
      this.cash -= this.levelTwoCost;
      this.render();
    } else if (this.scouting === 2 && this.cash > this.levelThreeCost) {
      this.scouting ++;
      this.cash -= this.levelThreeCost;
      this.render();
    } else if (this.scouting === 3 && this.cash > this.levelFourCost) {
      this.scouting++;
      this.cash -= this.levelFourCost;
      this.render();
    } else if (this.scouting === 4 && this.cash > this.levelFiveCost) {
      this.scouting++;
      this.cash -= this.levelFiveCost;
      this.render();
    } else if (this.scouting === 5 && this.cash > this.levelSixCost) {
      this.scouting++;
      this.cash -= this.levelSixCost;
      this.render();
    } else if (this.scouting === 6) {
      alert('Your scouting is state of the art');
    } else {
      alert('Sorry, you\'re too broke')
    }
  }
}
