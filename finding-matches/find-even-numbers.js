//Without using .filter(), this function returns all even numbers in an array

/*
function findEven (numbers) {

  var newArray = [];
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      newArray.push(numbers[i])
    }
  }
  return newArray;
}
*/

//Recursive: 

function findEven (numbers) {
  var newArray = [];
  finder(numbers)
  function finder(numberz){
    if(numberz.length === 0 || undefined){
      return newArray
    }
    if(numberz[0] % 2 === 0){
      newArray.push(numberz[0])
    }
    return finder(numberz.slice(1))
  }
  return newArray;
}