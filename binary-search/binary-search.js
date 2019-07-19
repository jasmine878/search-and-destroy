'use strict';

const testFour = [1,2,3,4]


// Complete this algo
const binarySearch = (array, target) => {
	if(array.length === 1){
		if(array[0] === target){
			return true
		} else {
			return false
		}
	}

		let currentMidpoint = Math.ceil(array.length / 2);
    let currentValue = array[currentMidpoint];

	if(currentValue === target){
		return true;
	}
	else if(currentValue < target){
		return binarySearch(array.slice(0, currentMidpoint))
	}
	//already looked a the target
	// console.log("currentValue", currentValue);

	else if(currentValue > target){
		 return binarySearch(array.slice(currentMidpoint + 1))
	}
};

console.log(binarySearch([1, 2, 3], 5))

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
