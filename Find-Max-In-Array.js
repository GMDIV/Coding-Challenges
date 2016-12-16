//Find the largest number in an array without using Math.max.


function max (numbers) {

  var largest = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if(numbers[i] > largest){
      largest = numbers[i];
    }
  }
  return largest
}


//Using .reduce :
/*

function max (numbers) {
  return numbers.reduce(function(largest, check) {
    if(check >largest) {
      return check
    }
    else {
      return largest
    }
  })
}



*/