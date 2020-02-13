/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  // your code here...
  var array = string.split(' ')
  var result = []
  for(var i = 0 ; i < array.length ; i++) {
  	var checkPalindrome = array[i].split('').reverse().join('')
  	if(array[i] === checkPalindrome) {
  		result.push(array[i])
  	}
  }
  var longest = result[0];
  for(var j = 0 ; j < result.length; j++) {
  	if(longest.length < result[j].length){
  		longest = result[j]
  	}
  }
  return longest
}
