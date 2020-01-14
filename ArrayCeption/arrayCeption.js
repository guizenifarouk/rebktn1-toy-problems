// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0
function arrayCeption(array) {
	var deepest = 0 ;
	function deepestLevel(array, level) {
		for(var i = 0 ; i < array.length ; i++) {									//i'll loop through all the array element
			if(Array.isArray(array[i]) && array[i].length > 0) {					//i'll check if that element is an array and it's not empty
				deepestLevel(array[i], level+1)										//if yes i'll call the same function with that element and i'll increment the level
			}
			if(!Array.isArray(array[i])){											//if no more element inside the elements of the array is an array
			deepest = Math.max(deepest,level)										// i'll check if the level is bigger than 0 or no
			}
		}
	}
		deepestLevel(array, 0)														// i'll invoke the recursive function with the array and the level of 0
		return deepest                                                              // and i'll return the max between the level and the depth declared at the beginning
}

//still fixing it