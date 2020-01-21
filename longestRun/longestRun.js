/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string) {
	var toArray = string.split('');
	var initial = [0,0]
	var initialDifference = initial[1] - initial[0]

	for(var i = 0 ; i < toArray.length  ; i++) {

			var current = toArray[i]			
			var next = toArray[i+1]		
			var reference = [0,0]
			var difference = reference[1] - reference[0]

			if(next == current) {
				reference[1] = i
				console.log(reference[1])
				if(next !== current) {
					reference[0] = i
				if(difference >= initialDifference){
					initial = reference.slice(0)
				console.log(reference[1])

				}
			}
			} 
	}
	return initial
}
// still working 
=======



>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
