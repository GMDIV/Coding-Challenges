//Bubblesort!!!

//This is a sorting algorithm that basically will loop through an array,
//then check the current iteration against the next iteration and switch them to 
//make it so that the lesser value is the one at an earlier position. This loop 
//recursively repeats until it finds everything is in accending order.

function bubbleSort (input) {
  
  var sorted = true; // we start out true as it could be sorted for all we know
  for(var i = 0; i < input.length; i++) { //iterate through the array
    if(input[i] > input[i+1]) {//if i is less than i+1
      var temp = input[i]; //we set up a temp equal to i
      input[i] = input[i+1]; //then we make i equal to i+1
      input[i+1] = temp; //then make i+1 equal to temp. The ol switcharoooo
      sorted = false; //now that we have seen that it needed sorting, we switch it to false, so we 
      //can keep checking with the if statement on line 5 to see if we need to continue to sort
      if(!sorted){ //if it isn't sorted
        bubbleSort(input); //keep sorting
      }
    }
  }

  return input; //return the modified input array
}