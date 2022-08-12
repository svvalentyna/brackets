module.exports = function check(str, bracketsConfig) {
 
  let openBrackets = [];
  let bracketsPair = {}
  let bracketsSamePair = [];
  for(let i = 0; i < bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0])
    if(bracketsConfig[i][1] === bracketsConfig[i][0]){
      bracketsSamePair.push(bracketsConfig[i][1])
    }
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0]
  }
  
  let stack = [];
  for(let i=0; i < str.length; i++){
    let currentSymbol = str[i];
    if(openBrackets.includes(currentSymbol)){
      if(bracketsSamePair.includes(currentSymbol)){
        if(stack.includes(currentSymbol)){
          let topEl = stack[stack.length - 1];
          if(bracketsPair[currentSymbol] === topEl){
            stack.pop();
          } else {
            return false;
          }
        } else {

          stack.push(currentSymbol);
        }
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if(stack.length === 0){
        return false;
      }
      let topEl = stack[stack.length - 1];
      if(bracketsPair[currentSymbol] === topEl){
        stack.pop();
      } else {
        return false;
      }
    }
  } 
  
    return stack.length === 0
}
