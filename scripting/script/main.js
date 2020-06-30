
   

document.getElementById('head').innerHTML="This is JS";
document.getElementById('para').innerHTML="Hello World";
var var1 = '2';
var var2 = '1';
console.log(var1);
console.log(var2);
var num=[1,2,3,4,5];
var a=num[3];
var b=a.toString();
document.getElementById('p2').innerHTML="The element at index 3 in the array is = "+b;

function add_avg()
{
document.getElementById('total').innerHTML=70+77+82+64+78+80;
document.getElementById('avg').innerHTML=(70+77+82+64+78+80)/6;
}
var c=add_avg();

document.getElementById("pow").innerHTML="2 power 6 =  "+Math.pow(2,6);
document.getElementById("sqr").innerHTML="square root of 25 is = "+Math.sqrt(25);
document.getElementById("abso").innerHTML="Absolute value of -1.2 is = "+Math.abs(-1.2);
document.getElementById("rand").innerHTML="Some random number is = "+Math.random();

var p=0.179238908996872;
document.getElementById("ceil").innerHTML="Ceil of the above random number is = "+Math.ceil(p);
document.getElementById("round").innerHTML="Round of the above random number is = "+Math.round(p);
document.getElementById("floor").innerHTML="Floor of the above random number is = "+Math.floor(p);
document.getElementById("sin").innerHTML="Sine value of the above random number is = "+Math.sin(p);
document.getElementById("cos").innerHTML="Cosine value of the above random number is = "+Math.cos(p);
document.getElementById("tan").innerHTML="Tan value of the above random number is = "+Math.tan(p);





