var container;
var i=0;
var right=0;
var needed=0;
var picturesRendered=0;
var timerReference;

function prepare() {
	container = document.getElementById('container');
	container.innerHTML = '';
	for(i=0; i < 20; i++) {
		container.innerHTML += addPictureElement('1.jpg');
		
	}
	needed = 2;
    timerReference = setInterval(function(){
		if(picturesRendered === needed) {
			clearInterval(timerReference);
			return;
		}
		animateFadeIn(getPicture());
		picturesRendered++;
	},2000);
}

function getPicture() {
	var elem;
	var numOfChildren = document.getElementById('container').childNodes.length;
	
	elem = Math.floor((Math.random()*100 % 16));
	
	return elem;
	
}


function animateFadeOut(elem) {
	//elem.style.background = 'rgba(' + 20 + ',' + 20 + ',' + 255 + ',' + 0 + ')';
	elem.style.opacity = 0;
	elem.onclick=function() {animateFadeIn(this);};
}

function animateFadeIn (num) {
	//elem.style.background = '#36f';
	var elem=document.getElementById('d' + num);
	elem.style.opacity = 1;
	elem.onclick=function() {animateFadeOut(this);};

	
}

function addPictureElement(src) {
	return '<img id="d'+ i +'" class="fadeelem" src="pics/' + src + '" onclick="animateFadeIn(this)" />';
}

function start(elem) {
	
}

function levelWon(elem) {
	
}
