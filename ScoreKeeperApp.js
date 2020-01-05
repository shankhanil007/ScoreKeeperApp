var b1=document.getElementById("one");
var score1=0;
b1.addEventListener("click",function(){
	var p=document.getElementById("FirstScore");
	var limit=document.getElementById("limit");
	if(score1<limit.innerHTML && score2<limit.innerHTML)
	{
	score1++;	
	p.innerHTML=score1;
	}

	if(score1==limit.innerHTML)
	{
		p.style.color="green";
	}
	
});


var b2=document.getElementById("two");
var score2=0;
b2.addEventListener("click",function(){
	var q=document.getElementById("SecondScore");
	var limit=document.getElementById("limit");
	if(score1<limit.innerHTML && score2<limit.innerHTML)
	{
	score2++;
	q.innerHTML=score2;
	}
	if(score2==limit.innerHTML)
	{
		q.style.color="green";
	}

});


var b3=document.getElementById("reset");
b3.addEventListener("click",function(){
	var q=document.getElementById("SecondScore");
	var p=document.getElementById("FirstScore");
	p.innerHTML=0;
	q.innerHTML=0;
	p.style.color="black";
	q.style.color="black";
	score2=0;
	score1=0;
});


var num=document.querySelector("input")
var limit=document.getElementById("limit");
num.addEventListener("click", function()
{
	var x=document.querySelector("input").value;
	limit.innerHTML=x;
});