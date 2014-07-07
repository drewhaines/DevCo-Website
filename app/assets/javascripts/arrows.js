$(document).ready(function(){

	var slide_number = 1;
	var current_slide = "#slide_1";

	$('#arrow').click(function() {
		slide_number = slide_number+1;
		
		if(slide_number>=3){
		slide_number=3;
		$('#arrow').hide();
		}
		
		$('#arrow_left').show();
		
		current_slide = "#slide_"+slide_number;
		
		$('#slide_1').hide();
		$('#slide_2').hide();
		$('#slide_3').hide();
		$(current_slide).show();
	});


	$('#arrow_left').click(function() {
		slide_number = slide_number-1;
		
		if(slide_number<=1){
		slide_number=1;
		$('#arrow_left').hide();
		}
		
		$('#arrow').show();
		
		current_slide = "#slide_"+slide_number;
		
		$('#slide_1').hide();
		$('#slide_2').hide();
		$('#slide_3').hide();
		$(current_slide).show();
	});

});