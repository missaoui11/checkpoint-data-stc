// prob 1
let tableau1 = [1, 2, 3, 4, 5];
let tableau2 = [3, 4, 5, 6, 7];

var lkol =0;
function sommer(tableau1,tableau2){
for (let i = 0; i < tableau1.length; i++) {
  if (tableau2.includes(tableau1[i])) {
    lkol +=tableau1[i];
  }
} 
    return lkol;
}
console.log(summer(tableau1,tableau2))
// prob 2
 function sum2(set1, set2) {
    let unionObj = {};
    let sum = 0;
  
    for (let value of set1) {
      unionObj[value] = value;
    }
  
    for (let value of set2) {
      unionObj[value] = value;
    }
  
    for (let key in unionObj) {
      sum += unionObj[key];
    }
  
    return sum;
  }
  
  let setc = [1, 2, 3, 4];
  let setd = [3, 4, 5, 6];
  
  console.log(sum2(setA, setB)); 
