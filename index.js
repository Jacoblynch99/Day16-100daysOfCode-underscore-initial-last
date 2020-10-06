const _ = require("underscore")

const numArr = [12, 3, 45, 67, 104, 0, null, 3, 12]

const initial = _.initial(numArr, 5) // returns an array that contains the given array without the last element in the array. A second argument can be given to exclude an amount specified by the second argument. This does not mutate the original data.
const last = _.last(numArr, 5) // returns the last element of the given array. If a second argument is provided it will provide the specified number of element form the end of the array, providing a new array from the returned elements. This does not mutate the original data.

console.log(`Underscore Data:`, initial)
console.log(`Original Data:`, numArr)
console.log(
  `*****************************************************************************************`
)
console.log(`Underscore Data:`, last)
console.log(`Original Data:`, numArr)
