$(document).ready(function() {

	var current_section = 1;
	var BeforeTaxPrice = 0;
	var Tax = 0;
	var TotalCharge = 0;

	$('.inner_section').hide();
	$('.section_title').hide();
	$('.section_number').css({ opacity: 0.5 });

	$('#section_number_1').css({ opacity: 1.0 });
	$('#section_1 .inner_section').show();
	$('#section_1 .section_title').show();

	$("#no-js-at-all-uh-oh").hide().css("z-index", "-9999");

	function updatePricing() {
		if ( $("#ship_op option:selected").val()==0 ) {
			$("#cart-shipping").text("$0.00");
		} else {
			$("#cart-shipping").text('$'+ $("#ship_op option:selected").val() + ".00");
		}
		BeforeTaxPrice = parseFloat($("#ship_op option:selected").val()) + 609.99;
		Tax = BeforeTaxPrice * 0.07;
		TotalCharge = BeforeTaxPrice + Tax;
		$("#cart-tax").text('$' + String(Tax.toFixed(2)));
		$("#cart-total").text('$'+ String(TotalCharge.toFixed(2)));
	}

	/*checks which payment section should be active in section 3 */
	function check3payment(){
		if ( $("#trans_type_cc").is(":checked") ) {
			$("#sec-3-1-dw_payment_info").fadeOut(300, function() {
				$("#sec-3-1-cc_payment_info").fadeIn(300);
			});
			$("#sec-3-1-cc_payment_info input").attr("required", "required");
		} else if ( $("#trans_type_dw").is(":checked") ) {
			$("#sec-3-1-cc_payment_info").fadeOut(300, function() {
				$("#sec-3-1-dw_payment_info").fadeIn(300);
			});
			$("#sec-3-1-dw_payment_info input").attr("required", "required");
		} else {
			$("#sec-3-1-cc_payment_info").fadeOut(300);
			$("#sec-3-1-dw_payment_info").fadeOut(300);
		}
	}

	/* checks to see if "use same address" is checked in section 3 */
	function check3address(){
		if ( $("#same_address").is(":checked") ) {
			$("input.bill_address").attr("readonly", "readonly").addClass("pre-fill");
			$("select.bill_address").val( $("#recv_state").val() ).attr("disabled", "disabled");
			$("#bill_first_name").val( $("#recv_first_name").val() );
			$("#bill_last_name").val( $("#recv_last_name").val() );
			$("#bill_address_1").val( $("#recv_address_1").val() );
			$("#bill_address_2").val( $("#recv_address_2").val() );
			$("#bill_city").val( $("#recv_city").val() );
			$("#bill_zip").val( $("#recv_zip").val() );
			$("#bill_telephone").val( $("#recv_telephone").val() );
			$(".bill_address label.error").hide();
  		} else {
			$("input.bill_address").attr("readonly", "").removeClass("pre-fill").val("");
			$("select.bill_address").removeAttr("disabled").val("select");
			$(".bill_address label.error").show();
  		}
	}

	/* sets up section 4 */
	function setupSection4() {

		$(".sec-4-1-details").empty();
		$(".sec-4-1-details-nofloat").empty();

		if ( $("#trans_type_cc").is(":checked") ) {
			$(".sec-4-cc").show();
			$(".sec-4-dw").hide();
		} else if ( $("#trans_type_dw").is(":checked") ) {
			$(".sec-4-cc").hide();
			$(".sec-4-dw").show();
		}

		$("#sec-4-1-ship_fname").append( $("#recv_first_name").val() );
		$("#sec-4-1-ship_lname").append( $("#recv_last_name").val()  );
		$("#sec-4-1-ship_addr1").append( $("#recv_address_1").val()  );
		$("#sec-4-1-ship_addr2").append( $("#recv_address_2").val()  );
		$("#sec-4-1-ship_city").append(  $("#recv_city").val()       );
		$("#sec-4-1-ship_city").append(  ","                         );
		$("#sec-4-1-ship_state").append( $("#recv_state").val()      );
		$("#sec-4-1-ship_zip").append(   $("#recv_zip").val()        );
		$("#sec-4-1-ship_phone").append( $("#recv_telephone").val()  );

		if ( $("#ship_op").val()==5 ) {
			$("#sec-4-1-ship_method").append( "standard shipping" );
		} else if ( $("#ship_op").val()==20 ) {
			$("#sec-4-1-ship_method").append( "2 day express" );
		} else if ( $("#ship_op").val()==30 ) {
			$("#sec-4-1-ship_method").append( "overnight" );
		}

		$("#sec-4-1-bill_fname").append( $("#bill_first_name").val() );
		$("#sec-4-1-bill_lname").append( $("#bill_last_name").val()  );
		$("#sec-4-1-bill_addr1").append( $("#bill_address_1").val()  );
		$("#sec-4-1-bill_addr2").append( $("#bill_address_2").val()  );
		$("#sec-4-1-bill_city").append(  $("#bill_city").val()       );
		$("#sec-4-1-bill_city").append(  ","                         );
		$("#sec-4-1-bill_state").append( $("#bill_state").val()      );
		$("#sec-4-1-bill_zip").append(   $("#bill_zip").val()        );
		$("#sec-4-1-bill_phone").append( $("#bill_telephone").val()  );
		$("#sec-4-1-bill_email").append( $("#bill_email").val()      );

		$("#sec-4-1-cc_number").append(  $("#cc_card_type").val() + " " + $("#cc_number").val() );
		$("#sec-4-1-cc_expiry").append(  $("#cc_expiry_date").val() );
		$("#sec-4-1-dw_account").append( $("#dw_account").val()     );
		$("#sec-4-1-dw_routing").append( $("#dw_routing_no").val()  );

		$("#sec-4-1-bill_items").append( "2" );
		$("#sec-4-1-bill_shipping").append("$" + $("#ship_op option:selected").val() + ".00");
		$("#sec-4-1-bill_total").append( "$" + String(TotalCharge.toFixed(2)) );

	}


	/* sets up section 5 */
	function setupSection5() {
		
		$(".sec-5-1-details").empty();
		$(".sec-5-1-details-nofloat").empty();

		if ( $("#trans_type_cc").is(":checked") ) {
			$(".sec-5-cc").show();
			$(".sec-5-dw").hide();
		} else if ( $("#trans_type_dw").is(":checked") ) {
			$(".sec-5-cc").hide();
			$(".sec-5-dw").show();
		}

		$("#sec-5-1-ship_fname").append( $("#recv_first_name").val() );
		$("#sec-5-1-ship_lname").append( $("#recv_last_name").val()  );
		$("#sec-5-1-ship_addr1").append( $("#recv_address_1").val()  );
		$("#sec-5-1-ship_addr2").append( $("#recv_address_2").val()  );
		$("#sec-5-1-ship_city").append(  $("#recv_city").val()       );
		$("#sec-5-1-ship_city").append(  ","                         );
		$("#sec-5-1-ship_state").append( $("#recv_state").val()      );
		$("#sec-5-1-ship_zip").append(   $("#recv_zip").val()        );
		$("#sec-5-1-ship_phone").append( $("#recv_telephone").val()  );
		$("#sec-5-1-bill_email").append( $("#bill_email").val()      );

		if ( $("#ship_op").val()==5 ) {
			$("#sec-5-1-ship_method").append( "standard shipping" );
		} else if ( $("#ship_op").val()==20 ) {
			$("#sec-5-1-ship_method").append( "2 day express" );
		} else if ( $("#ship_op").val()==30 ) {
			$("#sec-5-1-ship_method").append( "overnight" );
		}

		$("#sec-5-1-bill_fname").append( $("#bill_first_name").val() );
		$("#sec-5-1-bill_lname").append( $("#bill_last_name").val()  );
		$("#sec-5-1-bill_addr1").append( $("#bill_address_1").val()  );
		$("#sec-5-1-bill_addr2").append( $("#bill_address_2").val()  );
		$("#sec-5-1-bill_city").append(  $("#bill_city").val()       );
		$("#sec-5-1-bill_city").append(  ","                         );
		$("#sec-5-1-bill_state").append( $("#bill_state").val()      );
		$("#sec-5-1-bill_zip").append(   $("#bill_zip").val()        );
		$("#sec-5-1-bill_phone").append( $("#bill_telephone").val()  );

		$("#sec-5-1-cc_number").append(  $("#cc_card_type").val() + " " + $("#cc_number").val() );
		$("#sec-5-1-cc_expiry").append(  $("#cc_expiry_date").val() );
		$("#sec-5-1-dw_account").append( $("#dw_account").val()     );
		$("#sec-5-1-dw_routing").append( $("#dw_routing_no").val()  );


		$("#sec-5-1-bill_items").append( "2" );
		$("#sec-5-1-bill_shipping").append("$" + $("#ship_op option:selected").val() + ".00");
		$("#sec-5-1-bill_total").append( "$" + String(TotalCharge.toFixed(2)) );

	}

	function checkSteps() {
		if (current_section===3) {
			check3payment();
			check3address();
		} else if (current_section===4) {
			setupSection4();
		} else if (current_section===5) {
			setupSection5();
		}
	}

	function sectionGuideOn() {
		if (current_section===1) {
			$("#guide_section_1").toggleClass("active");
		} else if (current_section===2) {
			$("#guide_section_2").toggleClass("active");
		} else if (current_section===3) {
			$("#guide_section_3").toggleClass("active");
		} else if (current_section===4) {
			$("#guide_section_4").toggleClass("active");
		} else if (current_section===5) {
			$("#guide_section_5").toggleClass("active");
		}
	}

	/* functions to run on load */
	updatePricing();


	/*this function is for all form submissions*/
	$('.form_submit').submit(function(event){
		event.preventDefault();
		if ( $(this).validate().form() ) {
			current_section++;
			$(".guide_section.active").next().attr('src',"./img/arrow_green.png").css({ opacity: 1.0 });
			$(".guide_section.active").toggleClass("active");
			$(this).parent().parent(".section").toggleClass("active", 4000);
			$(this).parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
			$(this).parent(".inner_section").siblings(".section_title").fadeOut(300);
			$(this).parent(".inner_section").fadeOut(300, function(){
				$(this).siblings(".title_area").animate({width:'39px'}, 500);
				$(this).parent(".section").animate({width:'39px'}, 500, function(){
					$(this).css("z-index", "auto");
					$(this).next().css("z-index", "10");
					$(this).children(".section_number").css("z-index", "11");
					$(this).next().toggleClass("active", 4000);
					$(this).next().children(".inner_section").fadeIn(300);
					$(this).next().children(".section_title").fadeIn(300);
					$(this).children(".section_number").css({ opacity: 1.0 });
					$(".guide_arrow").attr('src',"./img/arrow_grey.png").css({ opacity: 0.5 });
					sectionGuideOn();
				}).css('overflow', 'visible');
			});
			checkSteps();
			updatePricing();
		}
	});


	/* this function is for buttons that continue, but do not involve submitting a form */
	$("button.next_step").click(function(){
		current_section++;
		$(".guide_section.active").next().attr('src',"./img/arrow_green.png").css({ opacity: 1.0 });
		$(".guide_section.active").toggleClass("active");
		$(this).parent().parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent().parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent().parent(".inner_section").fadeOut(300, function(){
			$(this).siblings(".title_area").animate({width:'39px'}, 500);
			$(this).parent(".section").animate({width:'39px'}, 500, function(){
				$(this).css("z-index", "auto");
				$(this).next().css("z-index", "10");
				$(this).children(".section_number").css("z-index", "11");
				$(this).next().toggleClass("active", 4000);
				$(this).next().children(".inner_section").fadeIn(300);
				$(this).next().children(".section_title").fadeIn(300);
				$(this).children(".section_number").css({ opacity: 1.0 });
				$(".guide_arrow").attr('src',"./img/arrow_grey.png").css({ opacity: 0.5 });
				sectionGuideOn();
			}).css('overflow', 'visible');
		});
		checkSteps();
		updatePricing();
	});

	/* this function provides backward movements */
	$("button.back_step").click(function(){
		current_section--;
		$(".guide_section.active").toggleClass("active");
		$(this).parent().parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent().parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent().parent(".inner_section").fadeOut(300, function(){
			$(this).parent(".section").css("z-index", "auto");
			$(this).parent(".section").prev().css("z-index", "10");
			$(this).parent(".section").prev().children(".title_area").animate({width:'490px'}, 500);
			$(this).parent(".section").prev().animate({width:'490px'}, 500, function() {
				$(this).toggleClass("active", 4000);
				$(this).children(".inner_section").fadeIn(300);
				$(this).children(".section_title").fadeIn(300);
				$(this).prev().children(".section_number").css({ opacity: 1.0 });
				sectionGuideOn();
			}).css('overflow', 'visible');
		});
		checkSteps();
		updatePricing();
	});


	$("#sec-3-1-payment_method input").click( check3payment );
	$("#sec-3-1-same_address input").click( check3address );

	$("button#edit_billing").click(function(){
		current_section--;
		$(".guide_section.active").toggleClass("active");
		$(this).parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent(".inner_section").fadeOut(300, function(){
			$(this).parent(".section").css("z-index", "auto");
			$(this).parent(".section").prev().css("z-index", "10");
			$(this).parent(".section").prev().children(".title_area").animate({width:'490px'}, 500);
			$(this).parent(".section").prev().animate({width:'490px'}, 500, function() {
				$(this).toggleClass("active", 4000);
				$(this).children(".inner_section").fadeIn(300);
				$(this).children(".section_title").fadeIn(300);
				$(this).prev().children(".section_number").css({ opacity: 1.0 });
				sectionGuideOn();
			}).css('overflow', 'visible');
		});
		checkSteps();
		updatePricing();
	});

	$("button#edit_shipping").click(function(){
		current_section=current_section-2;
		$(".guide_section.active").toggleClass("active");
		$(this).parent().parent(".section").toggleClass("active", 4000);
		$(this).parent().parent(".section").prev().children(".section_number").css({ opacity: 0.5 });
		$(this).parent(".inner_section").siblings(".section_title").fadeOut(300);
		$(this).parent(".inner_section").fadeOut(300, function(){

			$(this).parent(".section").css("z-index", "auto");

			$(this).parent(".section").prev().children(".title_area").animate({width:'490px'}, 500);
			$(this).parent(".section").prev().animate({width:'490px'}, 500);

			$(this).parent(".section").prev().prev().css("z-index", "10");
			$(this).parent(".section").prev().prev().children(".title_area").animate({width:'490px'}, 500);
			$(this).parent(".section").prev().prev().animate({width:'490px'}, 500, function() {
				$(this).toggleClass("active", 4000);
				$(this).children(".inner_section").fadeIn(300);
				$(this).children(".section_title").fadeIn(300);
				$(this).prev().children(".section_number").css({ opacity: 1.0 });
				sectionGuideOn();
			}).css('overflow', 'visible');
		});
		checkSteps();
		updatePricing();
	});


	$("button#sign-in-button").click(function(){
		alert("Sorry, this is just a demo. No sign-in functionality yet!");
		console.log("pressed!");
	});


	/* this function updates cart contents based on shipping options */
    $("select[name=ship_op]").change(function() {
    	updatePricing();
	});


});	

