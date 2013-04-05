/*var validateThisForm = function(thisForm) {
	$(thisForm).validate({
		rules: {
			recv_first_name: "required recv_first_name",
			recv_last_name: "required recv_last_name",
			recv_address_1: "required recv_address_1",
			recv_city: "required recv_city",
			recv_zip: "required recv_zip",
			recv_telephone: "required recv_telephone",
		},
	});

};*/

$(document).ready(function() {

	//Validating inputs in shipping form section
	$.validator.addMethod("recv_first_name", function(value, element) 
	{ 
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	}, "Please enter a valid First Name.");

	$.validator.addMethod("recv_last_name",function(value,element)
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"Please enter a valid Last Name.");

	$.validator.addMethod("recv_address_1",function(value,element)
	{
		return this.optional(element) || /^(?=\s*\S).*$/i.test(value); 
	},"Please enter a valid address.");

	$.validator.addMethod("recv_city",function(value,element)
	{
		return this.optional(element) || /([a-zA-Z]+|[a-zA-Z]+\\s[a-zA-Z]+)/i.test(value); 
	},"Please enter a valid city.");

	$.validator.addMethod("recv_zip",function(value,element)
	{
		return this.optional(element) || /^\d{5}(-\d{4})?$/i.test(value); 
	},"Please enter a valid zip code.");

	$.validator.addMethod("recv_telephone",function(value,element)
	{
		return this.optional(element) || /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i.test(value); 
	},"Please enter a valid phone number.");

	//Rules in validating inputs in shipping form section
	$("#shipping_form").validate({
		rules: {
			recv_first_name: "required recv_first_name",
			recv_last_name: "required recv_last_name",
			recv_address_1: "required recv_address_1",
			recv_city: "required recv_city",
			recv_zip: "required recv_zip",
			recv_telephone: "required recv_telephone",
		},
	});

	//Validating inputs in billing details form section
	$.validator.addMethod("bill_first_name", function(value, element) 
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	}, "Please enter a valid First Name.");

	$.validator.addMethod("bill_last_name",function(value,element)
	{
		return this.optional(element) || /^[a-zA-Z]+([ '-][a-zA-Z]+)?$/i.test(value); 
	},"Please enter a valid Last Name.");

	$.validator.addMethod("bill_address_1",function(value,element)
	{
		return this.optional(element) || /^(?=\s*\S).*$/i.test(value); 
	},"Please enter a valid address.");


	//Rules in validating inputs in billing details form section
	$("#billingdetails").validate({
		rules: {
			bill_first_name: "required bill_first_name",
			bill_last_name: "required bill_last_name",
			bill_address_1: "required bill_address_1",
		},
	});


});