let str=('Hello, SkillFactory!');
console.log(str.split('').reverse().join(''));


//Задание4
let a= Math.round(Math.random()*100);
console.log(a);

// Здесь есть ошибка: ваш код возвращает числа от 0 до 99, число 100 не попадает в возвращаемый диапазон (а по заданию должно). Вот верный вариант решения:

const random = Math.floor(Math.random() * 101);