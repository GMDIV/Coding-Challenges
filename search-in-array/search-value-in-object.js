//Without using .find(), this checks to see if the array
//contains a an object with a that matches the given name property that then
//returns that person object's hobby property value.
//If it is not there, it returns false.

/*
function findPerson (name, people) {

  var activity = false;
  for(var i = 0; i < people.length; i++){
    for(var key in people[i]){
      if (people[i][key] === name){
      activity = people[i].hobby;
      }
    }
  }
  return activity;
}
*/

//Recursive version:

function findPerson (name, people) {

  if (people.length === 0){
    return false
  }
  else if (people[0].name === name){
    return people[0].hobby
  } 
  else{
    var peoplez = people.slice(1)
    return findPerson(name, peoplez)
  }  
}