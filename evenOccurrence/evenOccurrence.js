/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
function evenOccurrence(array) {
	var refObject = {}
	if(array.length === 0) {
		return null;
	}
	for(var i = 0 ; i < array.length ; i++) {
		if(refObject.hasOwnProperty(array[i])){
			refObject[array[i]]++
			console.log(refObject)
		} else {
			refObject[array[i]] = 1
		}
	}
	for(var j = 0 ; j < array.length ; j++) {
		if(refObject[array[j]] % 2 === 0) {
			return array[j]
			console.log(refObject)
		}
	}
	return null
}


///// trying to solve the last exemple //////

// for(var x = 0 ; x < array.length ; x++) {
// 	for(var j = 1 ; j< array.length ; j++) {
// 	if(typeof array[i] === 'object') {
// 		if(JSON.stringify(array[i]) === JSON.stringify(array[j])){
// 			return array[i]
// 		}
// 	}
// }
// }
