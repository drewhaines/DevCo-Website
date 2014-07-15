

$(document).ready(function(){

	
	$('.arrow').unbind().click(function() {
		slide_number = slide_number+1;
		
		if(slide_number>=number_of_slides){
		slide_number=number_of_slides;
		$('.arrow').hide();
		}
		
		$('.arrow_left').show();
		
		current_slide = ".slide_"+slide_number;
		
		$('.slide_1').hide();
		$('.slide_2').hide();
		$('.slide_3').hide();
		$('.slide_4').hide();
		$(current_slide).show();
	});


	
	
	$('.arrow_left').unbind().click(function() {
		slide_number = slide_number-1;
		number_of_slides=4;
		
		
		if(slide_number<=1){
		slide_number=1;
		$('.arrow_left').hide();
		}
		
		$('.arrow').show();
		
		current_slide = ".slide_"+slide_number;
		
		$('.slide_1').hide();
		$('.slide_2').hide();
		$('.slide_3').hide();
		$('.slide_4').hide();
		$(current_slide).show();
	});
	
	
	$('.menu_title').click(function() {
		slide_number = 1;
		
		$('.arrow_left').hide();
		$('.arrow').show();
		
		current_slide = ".slide_"+slide_number;
		
		$('.slide_1').hide();
		$('.slide_2').hide();
		$('.slide_3').hide();
		$('.slide_4').hide();
		$(current_slide).show();
	});

});