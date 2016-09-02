console.log('league js loaded');

class League {
  constructor() {
    this.cityList = ['New York', 'San Fran', 'Atlanta', 'Buffalo', 'Portland', 'Minneapolis', 'Kansas City', 'Dallas', 'Chicago', 'Madison', 'Charlotte', 'Miami', 'Austin', 'Boston', 'Boulder', 'Pittsburgh', 'Las Vegas', 'Phoenix', 'Jacksonville', 'Santa Fe'];
    this.nameList = ['Bozos', 'Blacksmiths', 'Sharks', 'Flipfloppers', 'Class Clowns', 'Rude Boys', 'Legion', 'Dynamo', 'Rhinos', 'Crash', 'Tomcats', 'Fighters', 'Peanuts', 'Swamp Monsters', 'Cattle', 'Hamburglers', 'Submarines', 'Stampede', 'Thunder','Joneses'];
    this.teamList = [];
    this.numOfTeams = 20;
    this.teamsLeft = 20;
  }

  buildLeague() {
    while(this.teamList.length < this.numOfTeams) {
      let cityNum = Math.floor(Math.random() * (this.teamsLeft - 0)) + 0;
      let nameNum = Math.floor(Math.random() * (this.teamsLeft - 0)) + 0;
      let city = this.cityList.slice(cityNum, cityNum+1);
      this.cityList.splice(cityNum, 1);
      let name = this.nameList.slice(nameNum, nameNum+1);
      this.nameList.splice(nameNum, 1);
      let team = `${city} ${name}`;
      this.teamList.push(team);
      this.teamsLeft --;
    }
  }
}
