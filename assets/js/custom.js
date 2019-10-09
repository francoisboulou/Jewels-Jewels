"use strict";

/////////////
//instafeed//
/////////////

const userFeed = new Instafeed({
	get: 'user',
	userId: '15533227278',
	limit: 12,
	resolution: 'standard_resolution',
	accessToken: '15533227278.1677ed0.d4fe0f36ca7c48b8ad1e753f197976f4',
	sortBy: 'most-recent',
	template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
userFeed.run();

window.onload = function() {

	
	const instaImgs = document.getElementsByClassName('instaimg');
	const dotCont = document.getElementById("nav-dots")

	Array.from(instaImgs).forEach((img, i) => {
		// remove Bootstrap classes, add Aria label
		img.classList.remove("col-lg-3")
		img.querySelector("a").setAttribute('aria-label', 'instagram image')
		img.querySelector("img").classList.remove("img-fluid")

		// add nav dots
		const dot = document.createElement("div")
		dot.setAttribute("class", "nav-dot")
		dot.setAttribute ("id", String(i))
		dotCont.appendChild(dot)
	})

	// set up dot listeners and behavior
	const dots =  document.getElementsByClassName("nav-dot")
	Array.from(dots).forEach( dot => {
		dot.addEventListener('click', () => {
			const dotId = event.target.id
			Array.from(instaImgs).forEach(img => {
				img.style.left = "-" + dotId + '00vw';
			})
		})
	})	

/////////
//modal//
/////////
	$('#newsletterModal').modal('show');
};

/////////////////////
//header and burger//
/////////////////////

const burger = document.getElementById('burger');
const header = document.getElementById('header');
let burger_clicked = false 

window.onresize = function()
{
	setHeader();

	if(document.body.clientWidth > 991) {
		header.style.backgroundColor = "rgba(255,255,255,.5)"
	} else if(document.body.clientWidth < 991 && burger_clicked === true) {
		header.style.backgroundColor = "white"
	}
}

window.onscroll = function()
{
	setHeader();
}

let prevScrollpos = window.pageYOffset;

function setHeader() {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos < currentScrollPos) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");;
	}
	prevScrollpos = currentScrollPos;
}

burger.onclick = function() {
	if(!burger_clicked) {
		burger_clicked = true
		header.style.backgroundColor = "white"
	} else {
		burger_clicked = false
		header.style.backgroundColor = "rgba(255,255,255,.5)"
	} 
}

///////////////////	
// mobile options//
///////////////////

// detect mobile
function isMobile() {
	try{ document.createEvent("TouchEvent"); return true; }
	catch(e){ return false; }
}

//Add hover effect to featured product images when not mobile.
if (!isMobile()) {
	$(".product-image").hover(function(){
		$(this).css("transform", "scale(1.1)");
	}, function() {
		$(this).css("transform", "scale(1)");
	});
}

