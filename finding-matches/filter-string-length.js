//Without using .filter(), this function returns all matching strings in an array
//that have a length that is greater than or equal to the given length

/*
function filterLength (length, array) {
  var newArray = [];
  array.forEach(function(itemInArray){
    if(itemInArray.length >= length){
      newArray.push(itemInArray)
    }
  });
  return newArray;
}
*/

//Recursive: 

function filterLength (length, array) {
  var newArray = [];  
  function finder(length, array){
  if(array.length === 0){
    return newArray
  }  
    if(array[0].length >= length){
      newArray.push(array[0])
      return finder(length, array.slice(1))
    }
    else{
      return finder(length, array.slice(1))
    }
  }
  finder(length, array)
  return newArray;
  
}
