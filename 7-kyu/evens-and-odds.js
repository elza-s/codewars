/* This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex. */

function evensAndOdds(num){
  //your code here
  if (num%2 === 0){
    
    return num.toString(2)
  } else {
    
    return num.toString(16)
  }
  
}