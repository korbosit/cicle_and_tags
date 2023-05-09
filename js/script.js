// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }

/*
Принцип работы вложенных циклов
Получаем в консоле 
0 - это i = 0
0 - это j = 0
1 - это j = 1
2 - это j = 2 и цикл j заканчивается
1 - это i= 1 увеличивается на единицу
0 - это j = 0
1 - это j = 1
2 - это j = 2
2 - это i= 2 увеличивается на единицу
0 - это j = 0
1 - это j = 1
2 - это j = 2
*/

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';
	}

	result += '\n';
}

console.log(result);

// first это метка в нашем случае, дойдя до continue мы остановимся и пойдем в родительский цикл

first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
		}
	}
}

/*
Second level: 0 
Third level: 0
First level: 0 
Third level: 1
First level: 1
Second level: 0
Third level: 0
Third level: 1
First level: 2
Second level: 0
Third level: 0
Third level: 1
*/

//========================================================================================================================================================

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
function firstTask() {
	let num = 5;
	while (num >= 5 && num <= 10) {
		console.log(num);
		num++
	}
}
firstTask();

function firstTask() {
	let num = 5;
	while (num <= 10) {
	  console.log(num);
	  num++;
	}
 }

 function firstTask() {
	for (i = 5; i < 11; i++) {
		console.log(i)
	}
}
firstTask();

 // При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

function secondTask() {
	for (let i = 20; i > 0; i--) {
		console.log(i);
		if (i===13) break;
	}
}
secondTask();


function secondTask() {
	for (let i = 20; i >= 1; i--) {
		console.log(i);
		if (i === 13) {
			break;
		}
	}
}

secondTask()

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTask() {
	for (let i = 2; i <= 10; i += 2) {
		console.log(i);
	 }
}

thirdTask()

function thirdTask() {
	for (let i = 2; i <= 10; i++) {
		 if (i % 2 === 0) {
			  console.log(i);
		 }
	}
}

thirdTask()

//========================================================================================================================================================

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:
 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }


function fourthTask() {
	let i = 2;

	while (i <= 16) {
		if (i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
		}
		i++;
	}
}

fourthTask();

function fourthTask() {
	let i = 1;

	while (i <= 16) {
	  i++;
	  if (i % 2 === 0) {
		 continue;
	  } else {
		 console.log(i);
	  }
	}
}

fourthTask();

//========================================================================================================================================================
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

function fifthTask() {
	const arrayOfNumbers = [];

	for (let i = 5; i < 11; i++) {
		 arrayOfNumbers[i - 5] = i;
	}

	console.log(arrayOfNumbers);
	return arrayOfNumbers;
}

fifthTask()







