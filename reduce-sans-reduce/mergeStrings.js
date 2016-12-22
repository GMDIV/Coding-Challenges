//This takes a given an array of strings, and then 
//returns all of the strings concatenated 
//together, without using .reduce() or .join().

/*
function mergeStrings (strings) {

  var snowball = "";
  for(var i = 0; i < strings.length; i++){
    snowball += strings[i]
  }
  return snowball;
}
*/

//Using Recursion: 

function mergeStrings(strings) {
  var snowball="";
  ballin(strings)
  function ballin (str){
    if(str.length === 0){
      return snowball
    }else{
      snowball += str[0]
    }
    return ballin (str.slice(1))
  }
  return snowball
}