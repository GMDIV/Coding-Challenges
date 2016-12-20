//Without using .includes(), this function searchs for a given string in an array.
//Returns a boolean value for if it is there or not.

/*function searchString (str, array) {

  var found = false;
  for(var i = 0; i < array.length; i++){
    if (array[i] === str){
      found = true;
    }
  
  }
  return found;
}
*/

//Recursive version:

var found = false;
var searchString = function (str, array) {
  if(array.length === 0){
    return false;
  }
  else if (str === array[0]){
    found = true;
  }
  else {
    var arrayz = array.slice(1)
    return searchString(str, arrayz)
  }
  return found;
}