//This takes a given an array of numbers, and then 
//returns all of the numbers concatenated 
//together, without using .reduce().


/*
function sum (numbers) {

  var total = 0;
  for(var i = 0; i < numbers.length; i++){
    total = total + numbers[i]
  }
  return total;
}
*/

//Recursive:

function sum (numbers){
  var total = 0
  gather(numbers)
  function gather(nums){
    if (nums.length === 0){
      return total 
    }
    else{
      total += nums[0]
    }
    return gather(nums.slice(1))
  }
  return total
}