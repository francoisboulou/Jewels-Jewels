/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Gallery
6. Init Testimonials Slider
7. Init Lightbox


******************************/


$(document).ready(function()
{
	"use strict";

	/*

	1. Vars and Inits

	*/

	let header = document.getElementById('header');
	let menuActive = false;
	let menu = document.getElementById('menu');
	let burger = document.getElementById('burger_container');



	/*
	2. Set Header
	*/

	function setHeader()
	{

		if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && ($(window).width() < 991)) {
			header.classList.add("scrolled");
			header.style.backgroundColor = 'rgba(255,255,255,.8)';
		}
		else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
		{
			header.classList.add("scrolled");

		}
		else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && ($(window).width() < 991))
		{
			header.classList.remove("scrolled");

			header.style.backgroundColor = 'rgba(255,255,255,0)';
		}
		else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && ($(window).width() > 991))
		{
			header.classList.remove("scrolled");

			header.style.backgroundColor = 'rgba(255,255,255,.5)';
		}
	}

	setHeader();

	window.onresize = function()
	{
		setHeader();
	}

	window.onscroll = function()
	{
		setHeader();
	}


	/*
	3. Init Menu
	*/

	function openMenu()
	{
		menu.classList.add("active");
		menuActive = true;
	}

	function closeMenu()
	{
		menu.classList.remove("active");
		menuActive = false;
	}

	function initMenu()
	{
		if(menu)
		{
			if(burger_container)
			{
				burger.onclick = function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						})
					}
				}
			}
		}
	}




	/*
	6. Init Testimonials Slider
	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');
			testSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				smartSpeed:1200,
				nav:false,
				dots:false
			});
		}
	}

// Instafeed

	var userFeed = new Instafeed({
        get: 'user',
        userId: '15533227278',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '15533227278.1677ed0.d4fe0f36ca7c48b8ad1e753f197976f4',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	});
	

//NiCe ScRoLl//	
	function niceScroll() {

		const homeTop = (document.getElementById('home_container').getBoundingClientRect()).top;
		const collTop = (document.getElementById('collections').getBoundingClientRect()).top;
		const arrivTop = (document.getElementById('arrivals').getBoundingClientRect()).top;
		const extTop = (document.getElementById('extra').getBoundingClientRect()).top;
		const testTop = (document.getElementById('testimonials').getBoundingClientRect()).top;
		const igTop = (document.getElementById('instafeed').getBoundingClientRect()).top;

		const throttle = (func, limit) => {
			let inThrottle
			return function() {
			const args = arguments
			const context = this
			if (!inThrottle) {
				func.apply(context, args)
				inThrottle = true
				setTimeout(() => inThrottle = false, limit)
			}
			}
		}

		let scrollPos = 0;
		
		window.addEventListener('scroll', throttle(function() {
			if ((document.body.getBoundingClientRect()).top > scrollPos) {
				if (pageYOffset > igTop) {
					window.scrollTo({
						top: igTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset > testTop) {
					window.scrollTo({
						top: testTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset > extTop) {
					window.scrollTo({
						top: extTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset > arrivTop) {
					window.scrollTo({
						top: arrivTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset > collTop) {
					window.scrollTo({
						top: collTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset > homeTop) {
					window.scrollTo({
						top: homeTop,
						left: 0,
						behavior: 'smooth',
					})
				}
			} else {
				if (pageYOffset < collTop) {
					window.scrollTo({
						top: collTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset < arrivTop) {
					window.scrollTo({
						top: arrivTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset < extTop) {
					window.scrollTo({
						top: extTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset < testTop) {
					window.scrollTo({
						top: testTop,
						left: 0,
						behavior: 'smooth',
					})
				} else if (pageYOffset < igTop) {
					window.scrollTo({
						top: igTop,
						left: 0,
						behavior: 'smooth',
					})
				} 
			}	
			scrollPos = (document.body.getBoundingClientRect()).top;
		}, 600))
	}

	userFeed.run();
	// niceScroll();
	initMenu();
	initTestSlider();

});
