
"use strict"


function myFn (base, times) {
	if ( typeof times != 'number' || times <= 0) {
		return base
	}

let str = '';

	for (i = 1; i < times; i++) {
		if (i === times) {
			str += `${base * i}`;
		} else {
			str += `${base * i}---`
		}
	}
	return str;
}

console.log(myFn (10, 5));