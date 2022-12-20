// big o step 1
function hasTargetSum(array, target) {
  let i 
  let matched = false
  // big o step 2
  for(i = 0; i <= array.length; i++){
    let firstElement = array.shift()
    console.log(array)
    //big o step 3 
    array.forEach((element) => {
        let sum = firstElement + element
        console.log(sum)
        console.log(target)
        //big o step 4 0(n squared)
        if(sum === target){
          //break
          matched = true
        } 
    })
  }
  //big o step 5
  return matched
}



/* 
  Write the Big O time complexity of your function here
  big o 0(5 + nsquared)
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, targetNumber){
    for each # in array 
    shift out first element and compare to each other elemenet
    w new shorter array
        shift out first element and compare to each other elemenet

    get its sum with every other element
    if( sum === targetNumber){
      return true
    } else {
      return false
    }
      
  }
*/

/*
  Add written explanation of your solution here
  make a function called hasTargetSum that has 2 arguments
  1. array of integers
  2. a target number
  if the sum of any pair of numbers in the array is
  euqal to the target number, return true
  if not return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
