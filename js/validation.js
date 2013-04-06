$(document).ready(function() {

	//change default required message
	$.validator.messages.required = "required";

	$.validator.addMethod("valueNotEquals", function(value, element, arg)
	{
		return arg != value;
	}, "Value must not equal arg.");




	//Validating inputs in shipping form section
	$.validator.addMethod("recv_first_name", function(value, element) 
	{ 
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	}, "enter a valid name");

	$.validator.addMethod("recv_last_name",function(value,element)
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"enter a valid name");

	$.validator.addMethod("recv_address_1",function(value,element)
	{
		return this.optional(element) || /^(?=\s*\S).*$/i.test(value); 
	},"enter a valid address");

	$.validator.addMethod("recv_city",function(value,element)
	{
		return this.optional(element) || /([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)/i.test(value); 
	},"enter a valid city");

	$.validator.addMethod("recv_zip",function(value,element)
	{
		return this.optional(element) || /^\d{5}(-\d{4})?$/i.test(value); 
	},"enter a valid zip code");

	$.validator.addMethod("recv_telephone",function(value,element)
	{
		return this.optional(element) || /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(value); 
	},"enter a valid phone number");

	//Rules in validating inputs in shipping form section
	$("#shipping_form").validate({
		rules: {
			recv_first_name: "required recv_first_name",
			recv_last_name: "required recv_last_name",
			recv_address_1: "required recv_address_1",
			recv_city: "required recv_city",
			recv_state: { valueNotEquals: "default" },
			recv_zip: "required recv_zip",
			recv_telephone: "required recv_telephone",
			ship_op: { valueNotEquals: "default" },
		}, messages: {
			recv_state: { valueNotEquals: "required" },
			ship_op: { valueNotEquals: "required" },
		}, errorPlacement: function(error, element) {
			error.insertAfter(element.prev().children("label"));
		},
		debug:true
	});




	//Validating inputs in billing details form section
	$.validator.addMethod("bill_first_name", function(value, element) 
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"enter a valid name");


	$.validator.addMethod("bill_last_name",function(value,element)
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"enter a valid name");


	$.validator.addMethod("bill_address_1",function(value,element)
	{
		return this.optional(element) || /^(?=\s*\S).*$/i.test(value); 
	},"enter a valid address");

	$.validator.addMethod("bill_city",function(value,element)
	{
		return this.optional(element) || /([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)/i.test(value); 
	},"enter a valid city");

	$.validator.addMethod("bill_zip",function(value,element)
	{
		return this.optional(element) || /^\d{5}(-\d{4})?$/i.test(value); 
	},"enter a valid zip code");

	$.validator.addMethod("bill_telephone",function(value,element)
	{
		return this.optional(element) || /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(value); 
	},"enter a valid phone number");


	$("#billing_form").validate({
		rules: {
			bill_first_name: "required bill_first_name",
			bill_last_name: "required bill_last_name",
			bill_address_1: "required bill_address_1",
			bill_city: "required bill_city",
			bill_state: { valueNotEquals: "default" },
			bill_zip: "required bill_zip",
			bill_telephone: "required bill_telephone",
			cc_card_type: { valueNotEquals: "default" },
		}, messages: {
			bill_state: { valueNotEquals: "required" },
			cc_card_type: { valueNotEquals: "required" },
		}, errorPlacement: function(error, element) {
			error.insertAfter(element.prev().children("label"));
		},
		debug:true
	});
});