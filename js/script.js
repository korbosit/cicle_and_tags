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

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// first это метка в нашем случае, дойдя до continue мы остановимся и пойдем в родительский цикл

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

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
// function firstTask() {
//   let num = 5;
//   while (num >= 5 && num <= 10) {
//     console.log(num);
//     num++;
//   }
// }
// firstTask();

// function firstTask() {
//   let num = 5;
//   while (num <= 10) {
//     console.log(num);
//     num++;
//   }
// }

// function firstTask() {
//   for (i = 5; i < 11; i++) {
//     console.log(i);
//   }
// }
// firstTask();

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
//   for (let i = 20; i > 0; i--) {
//     console.log(i);
//     if (i === 13) break;
//   }
// }
// secondTask();

// function secondTask() {
//   for (let i = 20; i >= 1; i--) {
//     console.log(i);
//     if (i === 13) {
//       break;
//     }
//   }
// }

// secondTask();

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function thirdTask() {
//   for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
//   }
// }

// thirdTask();

// function thirdTask() {
//   for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// thirdTask();

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

// function fourthTask() {
//   let i = 2;

//   while (i <= 16) {
//     if (i % 2 === 0) {
//       i++;
//       continue;
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// }

// fourthTask();

// function fourthTask() {
//   let i = 1;

//   while (i <= 16) {
//     i++;
//     if (i % 2 === 0) {
//       continue;
//     } else {
//       console.log(i);
//     }
//   }
// }

// fourthTask();

//========================================================================================================================================================
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }

//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }

// fifthTask();

//========================================================================================================================================================

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function firstTask() {
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }

//   console.log(result);
//   return result;
// }

// firstTask();

//========================================================================================================================================================

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];

//   for (i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] *= 2;
//     } else if (typeof data[i] === "string") {
//       data[i] += "done";
//     }
//   }

//   return data;
// }

// console.log(secondTask());

//========================================================================================================================================================

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   // Пишем решение вот тут

//   // Не трогаем
//   return result;
// }

// function thirdTask() {
//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }

//   console.log(result);
//   return result;
// }

// thirdTask();

//========================================================================================================================================================

// Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

// *
// ***
// *****
// *******
// *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// function howMany(selectObject) {
// 	var numberSelected = 0;
// 	for (var i = 0; i < selectObject.options.length; i++) {
// 	  if (selectObject.options[i].selected) {
// 		 numberSelected++;
// 	  }
// 	}
// 	return numberSelected;
//  }
 
//  var btn = document.getElementById("btn");
//  btn.addEventListener("click", function(){
// 	alert('Выбрано элементов: ' + howMany(document.selectForm.musicTypes))


//========================================================================================================================================================

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done'); 
	} else {
		console.log('error');
		i--;
	}
	

	if(personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

console.log(personalMovieDB);


