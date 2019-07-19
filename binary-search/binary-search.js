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

	let halfArraySecond = Math.ceil((array.length + 1)/ 2)  //index 4
	console.log('halfSecond', halfArraySecond)
	let halfArrayFirst = Math.floor((array.length)/2)	//index 5
	console.log('halfFirst', halfArrayFirst)
	let numMiddleFirst = halfArrayFirst[0] //5
	let numMiddleSecond = halfArraySecond[0] //6

	function Less (num){

		num = numMiddleFirst
		console.log("num",num)
		if(num === target){
			return true
		}else if (halfArrayFirst < 0) {
			return false
		} else {
			num = Math.floor(halfArrayFirst/2)
			halfArrayFirst = halfArrayFirst[0]
			Less(num)
			console.log("made it here")
		}

	}

	function more (num){
		num = numMiddleSecond
		console.log("num",num)
		if(num === target){
			return true
		} else if (halfArraySecond > array.length) {
			return false
		} else {
			num = Math.ceil(halfArraySecond/2)
			halfArraySecond = halfArraySecond[0]
			more(num)
		}

	}

	if(halfArraySecond === target){
		return true
	}
	 else if(halfArrayFirst === target){
		return true
	}
	else if(numMiddleFirst > target){
		Less(numMiddleFirst)
	}
	else if(numMiddleSecond < target){
		more(numMiddleSecond)
	}
};

console.log(binarySearch([3,4], 3))

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
