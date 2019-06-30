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
	let logo = document.getElementById('nav_logo_img');


	/*
	2. Set Header
	*/

	function setHeader()
	{

		if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && ($(window).width() < 991)) {
			header.classList.add("scrolled");
			logo.classList.add("logo-scrolled");
			header.style.backgroundColor = 'rgba(255,255,255,.8)';
		}
		else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
		{
			header.classList.add("scrolled");
			logo.classList.add("logo-scrolled");
		}
		else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && ($(window).width() < 991))
		{
			header.classList.remove("scrolled");
			logo.classList.remove("logo-scrolled");
			header.style.backgroundColor = 'rgba(255,255,255,0)';
		}
		else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && ($(window).width() > 991))
		{
			header.classList.remove("scrolled");
			logo.classList.remove("logo-scrolled");
			header.style.backgroundColor = 'rgba(255,255,255,.5)';
		}
		// else
		// {
		// 	header.classList.remove("scrolled");
		// 	logo.classList.remove("logo-scrolled");
		// }
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
        userId: '2118266624',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2118266624.1677ed0.6aa196e838ce4158a7d4835929255488',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

	initMenu();
	initTestSlider();

});
