function date(){
	var d=document.getElementById('pr').value;
	console.log(d);
}
function dates(){
	document.getElementById('pre').innerHTML="Date changed";
}
function mOver(obj) {
  obj.innerHTML = "Hello!"
}
function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
function mDown(obj) {
  obj.innerHTML = "Release Me";
}
function mUp(obj) {
  obj.innerHTML="Welcome";
}
function foc(x) {
  x.style.background = "lightblue";
}
function lod(){
	alert("Page is loaded");
}
function fibonacci()
{
	var n = document.getElementById("nf").value;
    var t1=0,t2=1,nextterm;
	var resfib = "";
	for(i = 1 ; i <= n ; ++i){
		resfib +=""+t1+" ";
		nextterm = t1 + t2;
		t1 = t2;
		t2 = nextterm;
	}
	document.getElementById("fib").innerHTML = "Fibonacci series of "+n+" terms : "+resfib;
}

function checker(){
	var num1=document.getElementById('numcheck').value;
	try{
		if(num>225) throw "number is very big";
		if(num1>=10 && num1<=100)
		{
		document.getElementById('pnum').innerHTML='Number is in between 10 and 100';
		}
		else{
		document.getElementById('pnum').innerHTML='Number is not in between 10 and 100';
		}

	}
	catch(err){
		alert("error"+err);
	}
	finally{
		alert("Thank you");
	}
}
function word(){
	var s="Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.";
	var words=s.split(" ");
	document.getElementById('html1').innerHTML=s;
	document.getElementById('abthtml').innerHTML="5th word is : "+words[4]+"7th word is : "+words[6]+"10th word is : "+words[9];
	

}
