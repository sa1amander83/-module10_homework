
//  
var M=[2,3,4,61,2,1,432,'dcsad', ,40,-20,0,null];
var i;
var j=0; //четные элементы
var k=0;//нечетные элементы
var y=0;// нулевые элементы
for(i=0; i<M.length; i++) {
	
if (typeof M[i]==='number'&& M[i] %2===0){
	j++;}
	else if (typeof M[i]==='number' && M[i]%2===1){
	k++;}
	else if(M[i]==0||M[i]==null){
		y++;}	
}
console.log('четных элементов в массиве -'+j+' '+
' нечетных элементов в массиве -'+k+' '+
' нулевых элементов в массиве - '+ y);
