//Take 2 arrays of numbers. Then return a new array that takes the sum of the index of both arrays,
//And places that sum at that index in the new array for each index that both given arrays have.
//(As in, if one array has 3 values and the other has 4 values, only sum up the first 3 values).


function mergingSum (xs, ys) {

  var total = [];
  
  
  var shortest;
  
  if (xs.length < ys.length) {
    shortest = xs;
  }
  else if (ys.length < xs.length) {
    shortest = ys;
  } 
  else {
    shortest = xs;
  };
  
  
  for(var i = 0; i < shortest.length; i++){
    var sum = xs[i] + ys[i];
    total.push(sum);
  }
  return total;
}