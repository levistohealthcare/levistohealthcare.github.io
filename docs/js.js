var imageno = 1;

var tochange = document.getElementById('tochange');
window.addEventListener('load', loadeverything)

function loadeverything() {
	changeoninterval();
	var tochange = document.getElementById('tochange');
	for (var i = 12; i >= 1; i--) {
		tochange.src = i.toString(10) + ".jpg";
	}
	window.setInterval(changeoninterval, 5000);
	if (document.getElementsByClassName("scroller").length > 0) {
		window.setTimeout(scrolleron, 100);
		window.setTimeout(scrollerons, 100);
	}
	window.setInterval(changeproducts, 5000);
	window.addEventListener('scroll', scrolling)
}
var text;
var quotes = [
	"Our Valuable Doctors",
	"Innovations and Research Developments",
	"Happiness lies in the joy of achievement and thrills of creative effort",
	"All happiness depends upon Courage and Work",
	"Nothing can Dim the Light that Shine from Within",
	"Our Valuable Doctors",
	"Innovations and Research Developments",
	"Happiness lies in the joy of achievement and thrills of creative effort",
	"All happiness depends upon Courage and Work",
	"Nothing can Dim the Light that Shine from Within",
	"Innovations and Research Developments",
	"Happiness lies in the joy of achievement and thrills of creative effort",
	"All happiness depends upon Courage and Work",
	"Nothing can Dim the Light that Shine from Within",
	"Innovations and Research Developments",
	"Happiness lies in the joy of achievement and thrills of creative effort",
	"All happiness depends upon Courage and Work",
	"Nothing can Dim the Light that Shine from Within"
];

function changeoninterval() {
	var tochange = document.getElementById('tochange');
	tochange.style.opacity = 0;
	window.setTimeout(changeimage, 700);
}

function changeimage() {
	if (imageno > 12) { imageno = 1 }
	var captionsbox = document.getElementById("overlay");
	var tochange = document.getElementById('tochange');
	tochange.src = imageno.toString(10) + ".jpg";
	captionsbox.textContent = quotes[imageno];
	window.setTimeout(function() {tochange.style.opacity = 1;}, 100)
	imageno++;
}

function hoverhome(eventer) {
	var dropdowncontent = eventer.target.getElementsByClassName('dropdowncontent');
	for (var i = 0; i < dropdowncontent.length; i++) {
		dropdowncontent[i].style.display = 'flex';
		dropdowncontent[i].style.flexFlow = 'column';
		dropdowncontent[i].style.animation = 'show 1s normal';
	}
}

function hoverleavehome(eventer) {
	var dropdowncontent = eventer.target.getElementsByClassName('dropdowncontent');
	for (var i = 0; i < dropdowncontent.length; i++) {
		dropdowncontent[i].style.display = 'none';
		dropdowncontent[i].style.animation = 'show 1s reverse';
	}
}

function enteredinslideshow(eventer) {
	var captions = document.getElementById("overlay");
	captions.style.opacity = 1;
}

function leftslideshow(eventer) {
	var captions = document.getElementById("overlay");
	captions.style.opacity = 0;
}
var noofselectedscrollingimage = 0;

function scrolleron() {
	if (noofselectedscrollingimage < 3) {
		var scrollingimages = document.getElementsByClassName("scrollingprod");
		scrollingimages[noofselectedscrollingimage].style.display = 'grid';
		scrollingimages[noofselectedscrollingimage].style.transform = 'translateX(' + noofselectedscrollingimage * 125 + '%)';
		noofselectedscrollingimage++;
		scrolleron();
	}
}

var translx = 0;
var offset = 5

function scrollerons() {
	if (noofselectedscrollingimage < 6) {
		var scrollingimages = document.getElementsByClassName("scrollingprod");
		translx = ((noofselectedscrollingimage - 3) * 125) + offset;
		scrollingimages[noofselectedscrollingimage].style.transform = 'translateX(' + translx + '%)';
		scrollingimages[noofselectedscrollingimage].style.opacity = '0';
		noofselectedscrollingimage++;
		scrollerons();
	}
}
var a = true;

function changeproducts() {
	var scrollingimages = document.getElementsByClassName("scrollingprod");
	if (a) {
		for (var i = 0; i < scrollingimages.length - 3; i++) {
			var index3 = i + scrollingimages.length / 2;
			var translx1 = ((i - 3) * 125);
			var translx2 = ((index3 - 3) * 125);
			scrollingimages[i].style.opacity = 0;
			scrollingimages[i].style.transform = 'translateX(' + translx1 + "%)";
			scrollingimages[index3].style.opacity = 1;
			scrollingimages[index3].style.transform = 'translateX(' + translx2 + "%)";
			a = false;
		}
	} else {
		for (var i = 3; i < scrollingimages.length; i++) {
			var index3 = i - scrollingimages.length / 2;
			var translx1 = ((i - 3) * 125);
			var translx2 = ((index3 - 3) * 125);
			scrollingimages[index3].style.opacity = 1;
			scrollingimages[index3].style.transform = 'translateX(' + translx1 + "%)";
			scrollingimages[i].style.opacity = 0;
			scrollingimages[i].style.transform = 'translateX(' + translx2 + "%)";
			a = true;
		}

	}
}

function scrolling() {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (document.body.scrollTop > height / 2 || document.documentElement.scrollTop > height / 2) {
		document.getElementById("slogan").style.opacity = 1;
		document.getElementsByClassName("productdisplay")[0].style.opacity = 1;
	} else {
		document.getElementById("slogan").style.opacity = 0;
		document.getElementsByClassName("productdisplay")[0].style.opacity = 0;
	}
	if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
		document.getElementById("scrollercontainer").style.opacity = 1;
	} else {
		document.getElementById("scrollercontainer").style.opacity = 0;
	}
}