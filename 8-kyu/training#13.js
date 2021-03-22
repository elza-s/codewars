// // Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// // whatNumberIsIt(100) should return "Input number is 100"

function whatNumberIsIt(n){
  //coding here
  let sentence = `Input number is`
  if(n === Number.MAX_VALUE){
    return `${sentence} Number.MAX_VALUE`
  } else if ( n === Number.MIN_VALUE){
    return `${sentence} Number.MIN_VALUE`
  } else if ( n === Number.POSITIVE_INFINITY){
    return `${sentence} Number.POSITIVE_INFINITY`
  } else if ( n === Number.NEGATIVE_INFINITY){
    return `${sentence} Number.NEGATIVE_INFINITY`
  }  else if ( isNaN(n)){
    return `${sentence} Number.NaN`
  } else {
    return `${sentence} ${n}`
  }
}