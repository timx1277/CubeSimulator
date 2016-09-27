<html>
<h1>Terninig udregner</h1>
<h2>By: Tim</h2>
<input type="text" id="myText" value="Indtast ønskede antal kast">
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction(){
var endf1 = 0;
var endf2 = 0;
var endf3 = 0;
var endf4 = 0;
var endf5 = 0;
var endf6 = 0;
var slagindtilnu = 0;
var slag = document.getElementById("myText").value;;
var a1 = 0;
var b2 = 0;
var c3 = 0;
var d4 = 0;
var e5 = 0;
var f6 = 0;
while(slag > slagindtilnu) {

var x = Math.floor(Math.random() * 6) + 1;  

switch(x){
case 1:
	a1++;
	slagindtilnu++;
	break;
case 2:
	b2++;
	slagindtilnu++;
	break;
case 3:
	c3++;
	slagindtilnu++;
	break;
case 4:
	d4++;
	slagindtilnu++;
	break;
case 5:
	e5++
	slagindtilnu++;
	break;
case 6:
	f6++;
	slagindtilnu++;
	break;
}
endf1 = (a1/slag)*100 + " %";
endf2 = (b2/slag)*100 + " %";
endf3 = (c3/slag)*100 + " %";
endf4 = (d4/slag)*100 + " %";
endf5 = (e5/slag)*100 + " %";
endf6 = (f6/slag)*100 + " %";

document.getElementById("demo").innerHTML =
"Udregner..." + "<br>" +endf1 + "<br>" + endf2 + "<br>" + endf3 + "<br>" + endf4 + "<br>" + endf5 + "<br>" + endf6;


}
}

</script>
</html>
