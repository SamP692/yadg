console.log('user js loaded');

class User {
  constructor(name) {
    this.name = name;
    this.cash = 5000;
    this.scouting = 1;
  }
  render() {
    const nameCase = document.querySelector('h2');
    nameCase.innerHTML = `${this.name}`;
    const moneyCase = document.querySelector('#cash');
    moneyCase.innerHTML = `$${this.cash}.00`;
    const scoutCase = document.querySelector('#scouting');
    scoutCase.innerHTML = `Level ${this.scouting}`;
  }
}
