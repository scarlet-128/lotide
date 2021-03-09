
const middle = function(arr){
  let mid = [];
  if (arr.length > 2){
    if (arr.length % 2 === 1){
      let x = (arr.length+1)/2;
     mid [0] = (arr[x-1]);
    } else {
      let x = arr.length/2;
      mid[0] =(arr[x-1]);
      mid[1] = (arr[x]);
    } 
  } else {
    mid = [];
  } return mid;
}
module.exports = middle;
console.log(middle([1, 2, 3, 4, 5, 6]))