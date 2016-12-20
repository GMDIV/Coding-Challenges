//Without using .find(), this checks to see if the array contains a number that
//is evenly divisible by the given number.
//Returns a boolean value for if it is there or not.

function searchDivisible (divider, array) {

   var found = false;
  for(var i = 0; i < array.length; i++){
    if (array[i] % divider === 0 && array[i] !== 0){
      found = true;
    }
  
  }
  return found;
}

//Recursive Version:

function searchDivisible (divider, array) {

   var found = false
  if(array.length ===0){return found} 
  if(array[0] !== 0  && array[0] % divider === 0){
    found = true
  }else{
    found = searchDivisible(divider, array.slice(1));  
  }
  return found;
}