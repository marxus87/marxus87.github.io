var mss = 0,
	sec = 0,
	min = 0,
	hrs = 0,
	time = ['00','00','00','000'],
	time_=['00','00','00','000'];

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
	timeSplit=0,
	timeMemory=0,
	timeLine=0,
	timeTotal=0;

function startTimer() {
	if (switcher==1) {
		switcher=0;
		timeInit=new Date();
		timeNew=timeInit;
		console.log('split on', timePause);
		console.log('total on', timeTotal);
		elementStart.innerHTML='pause';
		timer();
	}
	else {
		stopTimer();
	}
	console.log(switcher);
}

function stopTimer() {
	if (switcher==0) {
		switcher=1;
		timeNew=new Date();
		timePause=timeNew.getTime()-timeInit.getTime();
		elementStart.innerHTML='start';
	}
	timeTotal=timeTotal+timePause;
	console.log('split off', timePause);
	console.log('total off', timeTotal);
}

function timer() {
	if (switcher==0) {
		if (switcher==0) {
			var timeNow=new Date();
			var hms=(timeNow.getTime()-timeNew.getTime()+timeTotal)-(60*hrs)-(60*min)-(1000*sec);
		}
		else {
			var timeNow=new Date();
			var hms=(timeNow.getTime()-timeInit.getTime()+timeTotal)-(60*hrs)-(60*min)-(1000*sec);
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
	elementHTML=document.querySelector('.wrapper');
	elementNEW=document.createElement('p');
	elementNEW.classList.add('split-line');
	timeMemory=new Date();
	if (switcher==0) {
		if (timeLine==0) {
			timeLine=timeMemory.getTime()-timeInit.getTime();
		}
		else {
			timeLine=timeMemory.getTime()-timeInit.getTime();
			timeMemory=new Date();
			timeLine=timeMemory.getTime()-timeInit.getTime()+timeLine;
		}
	}
	
	for (i=0; timeLine>999; i++) {
		if (timeLine>999) {
			time_[2]++;
			timeLine=timeLine-1000;
		}
		if (time_[2]>=60) {
			time_[1]++;
		}
		if (time_[1]>=60) {
			time_[0]++;
		}
		time_[3]=timeLine;
		if (switcher==0) {
			timeMemory=timeLine;
		}
	}
	timeSplit=new Date();

	console.log('marker 3 = timeMemory', timeMemory);

	elementNEW.innerHTML=time_[0]+' : '+time_[1]+' : '+time_[2]+' : '+time_[3];
	elementHTML.appendChild(elementNEW);
}

function RESET (){
	hrs=0;
	min=0;
	sec=0;
	mss=0;
	elementH.innerHTML='00';
	elementM.innerHTML='00';
	elementS.innerHTML='00';
	elementMS.innerHTML='000';
	timeInit=new Date();
	timeNew=new Date();
	timePause=0;
	timeTotal=0;
	switcher=1;
	timeMemory=0;
	timeLine=0;
	elementStart.innerHTML='start';
	elementHTML=document.querySelector('.wrapper');
	elementNEW=document.querySelectorAll('.split-line');
	for (var i=0; i<elementNEW.length; i++) elementHTML.removeChild(elementNEW[i]);
}

elementStart.addEventListener('click', START);
elementSplit.addEventListener('click', SPLIT);
elementReset.addEventListener('click', RESET);