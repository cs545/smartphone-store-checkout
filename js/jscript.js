$(document).ready(function() {
				
	$('#section2-1').hide();
	$('#section3-1').hide();
	$('#section4-1').hide();
	$('#section5-1').hide();

	$('#section_1').css("z-index", "10");
	
	$("#section_1 button").click(function(){
		$('#section1-1').fadeOut(300, function(){
			$('#section_1').animate({width:'38px'}, 500, function(){
				$('#section2-1').fadeIn(300);
				$('#section_1').css("z-index", "0");
				$('#section_2').css("z-index", "10");
			});
		});
	});

	$("#section_2 button").click(function(){
		$('#section2-1').fadeOut(300, function(){
			$('#section_2').animate({width:'39px'}, 500, function(){
				$('#section3-1').fadeIn(300);
				$('#section_2').css("z-index", "0");
				$('#section_3').css("z-index", "10");
			});
		});
	});

	$("#section_3 button").click(function(){
		$('#section3-1').fadeOut(300, function(){
			$('#section_3').animate({width:'39px'}, 500, function(){
				$('#section4-1').fadeIn(300);
				$('#section_3').css("z-index", "0");
				$('#section_4').css("z-index", "10");
			});
		});
	});

	$("#section_4 button").click(function(){
		$('#section4-1').fadeOut(300, function(){
			$('#section_4').animate({width:'39px'}, 500, function(){
				$('#section5-1').fadeIn(300);
				$('#section_4').css("z-index", "0");
				$('#section_5').css("z-index", "10");
			});
		});
	});


});	