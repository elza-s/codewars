/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x){
  let multiple=1;
  for(i in x){multiple*=x[i]}
  return multiple;
}