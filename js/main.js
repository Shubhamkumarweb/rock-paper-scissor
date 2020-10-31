// const you= document.getElementById('you');
const ai= document.getElementById('comp');
// const scissor= document.querySelector('.scissor');
const win=document.getElementById('win-count');
const tie=document.getElementById('tie-count');
const lose=document.getElementById('lose-count');
const round=document.getElementById('round');
const result=document.getElementById('result');
// consoleuter.log(lose);
var tcount=0;
var wcount=0;
var lcount=0;
var roundcount=0;

function rock()
{  shake();
     user="rock";
    start(user);
}
function paper()
{   shake();
     user="paper";
    start(user);
}
function scissor()
{   shake();
     user="scissor";
    start(user);
}
function start(user)
{
    setTimeout(function(){
        startgame(user);
    },2000)
}
function startgame(user)
{
roundcount++;
round.innerHTML=roundcount;
var comp=getcomputerchoice();
if((user=="scissor"&&comp =="rock")||(user=="paper"&&comp =="scissor")||(user=="rock"&&comp =="paper"))
{
    lcount++;
    lose.innerHTML=lcount;
    result.innerHTML="YOU LOSE";
if(user=="rock"&&comp =="paper")
{
    ai.src="img/paper.png";
}
else if(user=="scissor"&&comp =="rock")
{ you.src="img/scissor-you.png";}
else if(user=="paper"&&comp =="scissor")
{
    you.src="img/paper-you.png";
ai.src="img/scissor.png";
}}
else if((comp=="rock"&&user =="paper")||(comp=="scissor"&&user=="rock")||(comp=="paper"&&user =="scissor"))
{wcount++;
    win.innerHTML=wcount;
result.innerHTML="YOU WON";

if(comp=="rock"&&user =="paper")
{
    you.src="img/paper-you.png";
}
else if(comp=="scissor"&&user=="rock")
{ ai.src="img/scissors.png";
}
else if(comp=="paper"&&user =="scissor")
{
    you.src="img/scissor-you.png";
    ai.src="img/paper.png";
}}
else if(user==comp)
{
 if(user="rock"&&comp=="rock"){
    tcount++;
    tie.innerHTML=tcount;
    result.innerHTML="Its a Tie";
}
else if(user="paper"&&comp=="paper")
{ ai.src="img/paper.png";
you.src="img/paper-you.png";
    tcount++;
    tie.innerHTML=tcount;
    result.innerHTML="Its a Tie";
}
else if(user="scissor"&&comp=="scissor")
{ ai.src="img/scissor.png";
you.src="img/scissor-you.png";
    tcount++;
    tie.innerHTML=tcount;
    result.innerHTML="Its a Tie";
}
}
}
function shake()
{   result.innerHTML=""; 
    you.src="img/rock-you.png";
        ai.src="img/rock.png";
    you.classList.add("shaking");
    comp.classList.add("shaking-anti");
    setTimeout(function(){
    you.classList.remove("shaking");
    comp.classList.remove("shaking-anti");
},2000);
}
function getcomputerchoice()
{
    var x=Math.random();
    if(x<.34)
    {return "rock"; 
    }
    if(x>.34&&x<67)
    {return "paper"; 
    }
    if(x>.67&&x<=1)
    {return "scissor"; 
    }

}
