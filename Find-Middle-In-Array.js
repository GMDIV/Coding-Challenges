//Find the number that is positioned in the center of an array.
//If the amount of numbers in an array is even, then return the average
//of the two numbers at the center.


function middle (numbers) {

  var length = numbers.length;   
    if (length % 2 !== 0) {
      return numbers[((length - 1)/2) ]
    }
    else { 
      var middle1 = numbers[length/2];
      var middle2 = numbers[length/2 - 1];
      var average = (middle1 + middle2)/2;
      return average
    
  }
}