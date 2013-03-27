$(document).ready(function() {
 $.validator.addMethod("firstname", function(value, element) 
{ 
return this.optional(element) || /^[a-z -']+$/i.test(value); 
}, "Please enter a valid First Name.");
 
$.validator.addMethod("lastname",function(value,element)
 {
 return this.optional(element) || /^[a-z -']+$/i.test(value); 
},"Please enter a valid Last Name.");
 
// Validate signup form
 $("#billingdetails").validate({
 rules: {
 firstname: "required firstname",
 lastname: "required lastname",
 },
 });
 });
     
  	
