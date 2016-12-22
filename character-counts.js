

//This function takes as its input a string and returns an array of arrays as
//shown below sorted in descending order of particular character count/frequency
//and then by ascending order by character for frequency ties.


// function decending (a , b){ //classic sorting configuration for decending
//     var sort = b[1] - a[1]; 
//     if(sort === 0){
//       if(a[0] > b[0])
//         return -1;
//       else
//         return 1;
//     } else
//       return sort;
//   }  

function characterFrequency (string) {

  var splitString = string.split('').sort(); 
  //split the string into a sorted array of all the characters
  var counters = {}
  var newestArray = [];
  //check to see if the input is undefined or not before proceeding
  if(string === undefined){
    return [];
   }
  
  //loop through the new string-array
  for (var i = 0; i < splitString.length; i++){
  	 //if the character of the current iteration of the string-array is not
  	 //in the counters object as a key...
     if(!counters[splitString[i]]){
       //put it there and give it the value of 1 (there is 1 of those characters)
       counters[splitString[i]] = 1;
    }
     //otherwise..
     else{
       //go ahead and increase the already existent counter by 1
       counters[splitString[i]] +=1;
     }
  }

  //now proceed to loop through the counters object
  for (var prop in counters) {
    if (counters.hasOwnProperty(prop)) {
    	//push into the empty newArray an array that contains the key, and the value
        newestArray.push([prop, counters[prop]]);
    }
  }
  
  //now we return a sorted version of newestArray
  return newestArray.sort(function(a,b){
  if(a[1] - b[1] === 0) {
    return a[0].charCodeAt(0) - b[0].charCodeAt(0)
  }else{
    return b[1] - a[1]
  }
})
  
}  