
function s(num, val) {
amount = num * 1; // amount is the num or NaN

sum = (!num ? 0 : num) * val;  // the sum for that bill or coin

if (isNaN(amount)) 
{ // if the entire is not a number
alert( "' " + num + " ' is invalid entry." );
return 0;
}
else	return sum; // if it is OK, send sum back
}

function money(form) 
{
	var uamt= document.getElementById("uramt").value;
	
fivek = s(form.fivek.value, 5000); // Each amount is the returned value
twok = s(form.twok.value, 2000);  // for the amount in the s() function
onek = s(form.onek.value, 1000);
fivehun = s(form.fivehun.value, 500);
twohun = s(form.twohun.value, 200);
hun = s(form.hun.value, 100);
fifty = s(form.fifty.value, 50);
twenty = s(form.twenty.value, 20);
ten = s(form.ten.value, 10);
five = s(form.five.value, 5);
two = s(form.two.value, 2);
one = s(form.one.value, 1);

// add amounts
var ttl = one+two+five+ten+twenty+fifty+hun+twohun+fivehun+onek+twok+fivek;
var chg= ttl-uamt;

if(ttl==0)
{ 		form.total.value="Please enter currency counts.";		}
else
{		form.total.value = "Rs. " + ttl; 		// display total amount		
}

if(chg<0)
{
	form.change.value="Currency given is less by " +(-chg);
}
else if(chg==ttl)
{		form.change.value="Please enter Bill amount." ;		}
else
{		form.change.value="Rs. " + chg;		}


}