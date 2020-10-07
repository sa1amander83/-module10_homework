/*Напишите программу, которая работала бы следующим образом:
в prompt вводится значение. С помощью унарного плюса (арифметический оператор)
необходимо преобразовать его в число, затем проверить с помощью typeof, 
принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».*/


var a = prompt('Введите значение');
//let a='de234242wdewfwwf';
if (isNaN(+a)||a===null||a===''){
  console.log('тип данных Is not a number');}

 else if (typeof +a==='number'&& !isNaN(+a) && a%2 ===0){
  console.log('это число четное');  
}
    else  if(typeof +a==='number'&& !isNaN(+a) && a%2 ===1){
  console.log('Это число нечетное');  
} 

else if (typeof a==='string'){
    console.log('тип данных строка ');
  }
  else {console.log('O_oPsE');}



  var x;
x=100;// для проверки

if (typeof x==='number'){
  console.log(x+' -число');  
}
else if (typeof x==='string'){
  console.log(x+' - строка');  
} 
else if(x==true||x==false){
    console.log(x+' - логический тип');
}
else {
  console.log('Тип '+ x +' не определен');
}