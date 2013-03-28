$(document).ready(function() {
 $.validator.addMethod("firstname", function(value, element) 
{ 
return this.optional(element) || /[a-zA-z]+([ '-][a-zA-Z]+)*/i.test(value); 
}, "Please enter a valid First Name.");
 
$.validator.addMethod("lastname",function(value,element)
 {
 return this.optional(element) || /[a-zA-z]+([ '-][a-zA-Z]+)*/i.test(value); 
},"Please enter a valid Last Name.");

$.validator.addMethod("AddressLine1",function(value,element)
 {
 return this.optional(element) || /^(?=\s*\S).*$/i.test(value); 
},"Please enter a valid address.");

// Validate billing details form
 $("#billingdetails").validate({
 rules: {
 firstname: "required firstname",
 lastname: "required lastname",
 AddressLine1: "required AddressLine1",
 },
 });
 });
     
  	
