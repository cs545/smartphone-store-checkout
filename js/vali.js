
    function validateNumbers() {
  //if(document.getElementById("i1").value=="")
	// document.getElementById("check").disabled=false;
	//{
	var numbers = document.getElementById("i1").value;
    var regex = /(\d{4}-){3}\d{4}/,g;
	if(regex.test(numbers))
	{
	   
		    alert(regex.test(numbers)+" CARD ENTRY");
    }
}

function myFunction()
{ var q=document.getElementById('i1');
  var w=document.getElementById('i2');
  var e=document.getElementById('i3');
  var r=document.getElementById('i4');
  var t=document.getElementById('i5');
 
  

if(document.getElementById('cc').checked) {
  
  q.disabled=false;
  w.disabled=false;
  
  e.disabled=true;

  r.disabled=true;
  t.disabled=true;
  
  
  

}else if(document.getElementById('dw').checked) {
  
  q.disabled=true;
  w.disabled=true;
  e.disabled=false;
  
  r.disabled=false;
  
  t.disabled=false;
  
 
}
}
function validatecard () {
if (validatecardfunc() == true) 
alert ("Credit card validated!")
else
alert ("Credit card not valid!")
}

function validatecardfunc () {
validcard = false;
ret = stripNonNumbers (document.validate.accountnumber.value);
item = document.validate.cardtypelist.selectedIndex;
result = document.validate.cardtypelist.options[item].text;
if (result == "Mastercard") {
if (ret.length == 16) 
validcard = true;
if ((ret.substring (0, 2) >= "51") && 
(ret.substring (0, 2) <= "55"))
validcard = true;
else
validcard = false;
}
if (result == "Visa") {
if ((ret.length == 16) || (ret.length ==13))
validcard = true;
if (ret.substring (0, 1) != "4")
validcard = false;
}
if (result == "American Express") {
if (ret.length == 15) 
validcard = true;
if ((ret.substring (0, 2) != "34") && 
(ret.substring (0, 2) != "37"))
validcard = false;
}
if (result == "Discover") {
if (ret.length == 16) 
validcard = true;
if (ret.substring (0, 4) != "6011")
validcard = false;
}
return (validcard);
}

function stripNonNumbers (InString) {
OutString="";
for (Count=0; Count < InString.length; Count++) {
TempChar=InString.substring (Count, Count+1);
Strip = false;
CharString="0123456789";
for (Countx = 0; Countx < CharString.length; Countx++) {
StripThis = CharString.substring(Countx, Countx+1)
if (TempChar == StripThis) {
Strip = true;
break;
}
}
if (Strip)
OutString=OutString+TempChar;
}
return (OutString);
}
