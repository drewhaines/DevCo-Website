// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var slide_number = 1;
var number_of_slides = 4;
var current_slide = ".slide_1";


$(document).ready(function(){
  
	var menu = document.querySelector('#nav_wrapper');
	var origOffsetY = menu.offsetTop;
	var current_menu=1;

	var partial_1 = document.querySelector('#what_we_do');
	var partial_2 = document.querySelector('#how_we_work');
	var partial_3 = document.querySelector('#about_us');
	var partial_4 = document.querySelector('#contact');
	
	var origOffsetY_partial_1 = partial_1.offsetTop;
	var origOffsetY_partial_2 = partial_2.offsetTop;
	var origOffsetY_partial_3 = partial_3.offsetTop;
	var origOffsetY_partial_4 = partial_4.offsetTop;


function scroll () {
  if ($(window).scrollTop() >= origOffsetY) {
    $('#nav_wrapper').addClass('sticky');
  } else {
    $('#nav_wrapper').removeClass('sticky');
  }
  

		
	/* ***********   Partial 1 Logic   ************/
		  slide_number = 1;
		  
		  if ($(window).scrollTop() >= (origOffsetY_partial_1-200)) {
		  
			$('.menu_title').removeClass('current');
			$('#menu_1').addClass('current');
					
 					number_of_slides = 4;
					slide_number = 1;
			}
			
		if (($(window).scrollTop() >= (origOffsetY_partial_1+450)) && ($(window).scrollTop() <= (origOffsetY_partial_2-100))) {
					$('.arrow_left').hide();
					$('.arrow').show();
					
					
					$('.slide_1').hide();
					$('.slide_2').hide();
					$('.slide_3').hide();
					$('.slide_4').hide();
					$('.slide_1').show(); 
		  }
		  
		  
	/* ***********   Partial 2 Logic   ************/
		  if ($(window).scrollTop() >= (origOffsetY_partial_2-200)) {
		  
			$('.menu_title').removeClass('current');
			$('#menu_2').addClass('current');
			
 					slide_number = 1;
					number_of_slides = 3;
					current_menu = 2;
		  }
		  
		if (($(window).scrollTop() >= (origOffsetY_partial_2+450)) && ($(window).scrollTop() <= (origOffsetY_partial_3-100))) {
					$('.arrow_left').hide();
					$('.arrow').show();
					
					
					$('.slide_1').hide();
					$('.slide_2').hide();
					$('.slide_3').hide();
					$('.slide_4').hide();
					$('.slide_1').show(); 
		  }

		  
		/* ***********   Partial 3 Logic   ************/
		  if ($(window).scrollTop() >= (origOffsetY_partial_3-200)) {
			
			$('.menu_title').removeClass('current');
			$('#menu_3').addClass('current');
			
				slide_number = 1;
				number_of_slides = 3;
		
				
				$('.arrow_left').hide();
				$('.arrow').show();
				
				
				$('.slide_1').hide();
				$('.slide_2').hide();
				$('.slide_3').hide();
				$('.slide_4').hide();
				$('.slide_1').show(); 
		  } 

		  
		/* ***********   Partial 4 Logic   ************/
		  if ($(window).scrollTop() >= (origOffsetY_partial_4-200)) {
			$('.menu_title').removeClass('current');
			$('#menu_4').addClass('current');
		  } 
}

document.onscroll = scroll;





});
