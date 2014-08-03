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
	
	
	var WWD = document.querySelector('#WWD_slide_1');
	var HWW = document.querySelector('#HWW_slide_1');
	var AU = document.querySelector('#AU_slide_1');
	
	var WWD_height = WWD.offsetHeight;
	var HWW_height = HWW.offsetHeight;
	var AU_height = AU.offsetHeight;
	

	if (origOffsetY == 0){
	origOffsetY = 154;
	}
	
function scroll () {


  if ($(window).scrollTop() >= origOffsetY) {
    $('#nav_wrapper').addClass('sticky');
	$('#Logo_2').show();
  } else {
    $('#nav_wrapper').removeClass('sticky');
	$('#Logo_2').hide();
	$('.menu_title').removeClass('current');
	
  }
  

		
	/* ***********   Partial 1 Logic   ************/
		  slide_number = 1;
		  
		  
		  if ($(window).scrollTop() >= (origOffsetY_partial_1-WWD_height) && ($(window).scrollTop() <= (origOffsetY_partial_1))) {
		  
			$('.menu_title').removeClass('current');
			$('#menu_1').addClass('current');
					
 					number_of_slides = 4;
					slide_number = 1;
					$('#arrow_left_1').hide();
					
			}
			
		
			 
		if (($(window).scrollTop() >= (origOffsetY_partial_1+WWD_height+100)) && ($(window).scrollTop() <= (origOffsetY_partial_1+WWD_height+250))) {
					$('.arrow_left').hide(); 
					$('.arrow').show();
					
					
					
					$('.slide_1').hide();
					$('.slide_2').hide();
					$('.slide_3').hide();
					$('.slide_4').hide();
					$('.slide_1').show(); 
					
				$('.menu_title').removeClass('current');
				$('#menu_1').addClass('current');
 					number_of_slides = 4;
					slide_number = 1;

		  }
		  
		  
		  
	
		  
		  
	/* ***********   Partial 2 Logic   ************/
		  if ($(window).scrollTop() >= (origOffsetY_partial_2-HWW_height) && ($(window).scrollTop() <= (origOffsetY_partial_2))) {
		  
			$('.menu_title').removeClass('current');
			$('#menu_2').addClass('current');
			
 					slide_number = 1;
					number_of_slides = 3;
					current_menu = 2;
					$('#arrow_left_2').hide();

					
		  }
		  
		if (($(window).scrollTop() >= (origOffsetY_partial_2+HWW_height+100)) && ($(window).scrollTop() <= (origOffsetY_partial_2+HWW_height+250))) {
					$('.arrow_left').hide();
					$('.arrow').show();
					
					
					
					$('.slide_1').hide();
					$('.slide_2').hide();
					$('.slide_3').hide();
					$('.slide_4').hide();
					$('.slide_1').show(); 
					
					
					$('.menu_title').removeClass('current');
					$('#menu_2').addClass('current');
 					slide_number = 1;
					number_of_slides = 3;
					current_menu = 2;
		  }
		  
		 

		  
		/* ***********   Partial 3 Logic   ************/
		  if ($(window).scrollTop() >= (origOffsetY_partial_3-AU_height) && ($(window).scrollTop() <= (origOffsetY_partial_3))) {
			
			$('.menu_title').removeClass('current');
			$('#menu_3').addClass('current');
			
				slide_number = 1;
				number_of_slides = 2;

			}

			if (($(window).scrollTop() >= (origOffsetY_partial_3+AU_height+100)) && ($(window).scrollTop() <= (origOffsetY_partial_3+AU_height+250))) {
				
				$('.arrow_left').hide();
				$('.arrow').show();
				
				
				$('.slide_1').hide();
				$('.slide_2').hide();
				$('.slide_3').hide();
				$('.slide_4').hide();
				$('.slide_1').show(); 
				
				$('.menu_title').removeClass('current');
				$('#menu_3').addClass('current');
				slide_number = 1;
				number_of_slides = 2;
		  } 
		  
		 

		  
		/* ***********   Partial 4 Logic   ************/
		  if ($(window).scrollTop() >= (origOffsetY_partial_4-250)) {
			$('.menu_title').removeClass('current');
			$('#menu_4').addClass('current');
		  } 
}

scroll();
document.onscroll = scroll;
	
$('.menu_title').click(function() {
	$('.arrow_left').hide();
	$('.arrow').show();
				
			
	$('.slide_1').hide();
	$('.slide_2').hide();
	$('.slide_3').hide();
	$('.slide_4').hide();
	$('.slide_1').show(); 
	scroll();
	});



});
