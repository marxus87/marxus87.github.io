var mss = 0,
	sec = 0,
	min = 0,
	hrs = 0,
	time = ['00','00','00','000'];

var elementH=document.querySelector('.H'),
	elementM=document.querySelector('.M'),
	elementS=document.querySelector('.S'),
	elementMS=document.querySelector('.MS');
var elementNEW,
	elementHTML,
	elementStart=document.querySelector('.start'),
	elementSplit=document.querySelector('.split'),
	elementReset=document.querySelector('.reset');

var switcher=1,
	timeInit=0,
	timeNew=0,
	timePause=0,
	timeTotal=0;

function startTimer() {
	if (switcher==1) {
		switcher=0;
		timeInit=new Date();
		timeNew=timeInit;
		elementStart.innerHTML='pause';
		timer();
	}
	else {
		stopTimer();
	}
}

function stopTimer() {
	if (switcher==0) {
		switcher=1;
		timeNew=new Date();
		timePause=timeNew.getTime()-timeInit.getTime();
		elementStart.innerHTML='start';
	}
	timeTotal=timeTotal+timePause;
}

function timer() {
	if (switcher==0) {
		if (switcher==0) {
			var timeNow=new Date();
			var hms=(timeNow.getTime()-timeNew.getTime()+timeTotal)-1000*((60*60*hrs)+(60*min)+(sec));
		}
		else {
			var timeNow=new Date();
			var hms=(timeNow.getTime()-timeInit.getTime()+timeTotal)-1000*((60*60*hrs)+(60*min)+(sec));
		}
		mss=hms;
		if (hms>999) {
			mss=0;
			sec++;
		}
		if (sec>59){
			sec=0;
			min++;
		}
		if (min>59){
			min=0;
			hrs++;
		}
		if (mss<10) time[3]='00'+mss;
		else {
			if (mss<100) time[3]='0'+mss; else time[3]=mss;
		}
		elementMS.innerHTML=time[3];
		if (sec<10) time[2]='0'+sec; else time[2]=sec;
		elementS.innerHTML=time[2];
		if (min<10) time[1]='0'+min; else time[1]=min;
		elementM.innerHTML=time[1];
		if (hrs<10) time[0]='0'+hrs; else time[0]=hrs;
		elementH.innerHTML=time[0];
		setTimeout(timer, 1);
	}
}
function START (){
	if (timeTotal==0) {
		startTimer();
	}
	else {
		startTimer();
	}
}
function SPLIT (){
	elementHTML=document.querySelector('.split-box');
	elementNEW=document.createElement('li');
	elementNEW.classList.add('split-line');
	elementNEW.innerHTML=time[0]+' : '+time[1]+' : '+time[2]+' : '+time[3];
	elementHTML.appendChild(elementNEW);
}
function RESET (){
	hrs=0;
	min=0;
	sec=0;
	mss=0;
	for (i=0; i<=2; i++) {time[i]='00';};
	time[3]='000';
	elementH.innerHTML='00';
	elementM.innerHTML='00';
	elementS.innerHTML='00';
	elementMS.innerHTML='000';
	timeTotal=0;
	switcher=1;
	elementStart.innerHTML='start';
	elementHTML=document.querySelector('.split-box');
	elementNEW=document.querySelectorAll('.split-line');
	for (var i=0; i<elementNEW.length; i++) elementHTML.removeChild(elementNEW[i]);
}
elementStart.addEventListener('click', START);
elementSplit.addEventListener('click', SPLIT);
elementReset.addEventListener('click', RESET);