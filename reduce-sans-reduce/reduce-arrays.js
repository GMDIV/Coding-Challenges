//This takes a given an array of arrays, and then 
//returns all of the arrays concatenated 
//together, without using .reduce().


function concatArrays (arrays) {

    
    var newArray = [].concat(arrays)
    var snowball = [];
  for(var i = 0; i < newArray.length; i++){
    
    snowball.concat.apply(snowball, arrays)
  }
  return snowball;
}