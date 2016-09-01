CLASS LIST
*class App: Will just start a new User and instantiate any other necessary classes. The only function it seems like it will need to generate a new day.
  -dayNumber = 1 -- will keep track of what day it is
  -newDay() -- will add 1 to the day count
  -playGames() -- a function that will allow the user to see the games play out before they move to the next day
    -will invoke gameList's reflect wins
  -finishDay() -- moves to the next day and builds a new GameList object
    -rerenders gameList

*class User: Keeps track of any necessary info. At least:
  -Cash
  -Scouting level
  -increaseScouting() -- will increase the scouting level
  -updatedInfo() -- will pass scouting level and cash onto HTML

*class Game: An individual sporting event. Will have to take two teams that are:
  -Not the same team
  -Are not the same as any other team already listed
  -teamA
  -teamB
  -teamATrueOdds
  -teamBTrueOdds
  -teamAOfficialOdds
  -teamBOfficialOdds
  -teamAScouting
  -teamBScouting
  -generateTrueOdds()
  -generateOfficialOdds()
  -generateScoutingOdds()
  -playGame()

*class GameList: Will be responsible for initiating all the new Game objects. Will grab the array of teams from the league and uses it to build a list of games for the day.
  -instantiates 10 new Game objects over 10 variables in constructor (eg. let gameOne =)
  -reflectWin() -- for when user presses playGames. It will change the class of winning divs and losing divs to

*class League: Populates a new league to have games pulled from. Constructor:
  -this.numTeams = numTeams
  -this.cities = array of cities
  -this.nicknames = array of possible nicknames
  -buildTeams()
