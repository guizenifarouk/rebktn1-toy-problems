/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  // your code here...
  var hours = time.split(':')[0]
  var minutes = time.split(':')[1].slice(0,2)
  var clock = time.split(':')[1].slice(2)
  if(clock === 'undefined') {
  	return time
  }
  	if (clock ==='am') {return time.slice(clock)}
}
