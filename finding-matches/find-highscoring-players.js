//Without using .filter(), this function takes a look through an 
//array of "player" objects and returns the names of all players
//that have a score above 100.

/*
function topPlayers (players) {

  var newArray = [];
  for(var i = 0; i < players.length; i++){
    if(players[i].score > 100){
      newArray.push(players[i].name);
    }
  }
  return newArray;
}
*/

//Recursive: 

function topPlayers (players) {
  var newArray = [];
  function finder (players){
    if(players.length === 0){
      return newArray
    }
    if(players[0].score > 100){
      newArray.push(players[0].name);
      return finder(players.slice(1))
    }
    else{
      return finder(players.slice(1))
    }
  }
  finder(players);
  return newArray;
}