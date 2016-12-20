// Find out if a given string has balanced ends when it comes to  (), {}, []. 
//Return a boolean value to see if they correctly close their container.

function isBalanced (str) {
  var stack = []; 
  //pairs - an object of starter bracket keys with ending bracket values
  var pairs = {
    '(' : ')', '[' : ']', '{' : '}'
  };

  for(var i = 0; i <str.length; i++){
    var currentCharacter = str[i];
    if(pairs[currentCharacter]){
      stack.push(currentCharacter);
    }
    else if( currentCharacter ===')'|| currentCharacter===']' || currentCharacter==='}'){
      if (pairs[stack.pop()] !== currentCharacter){
        return false;
      }
    }
  }
    return !!(stack.length ===0)
}