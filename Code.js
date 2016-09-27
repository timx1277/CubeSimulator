<html>
<h1>CubeSimulator</h1>
<h2>By: Tim</h2>
<input type="text" id="myText" value="Insert how many throws you want">
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
var currentTrows = 0;
var trows = document.getElementById("myText").value;;
var a1 = 0;
var b2 = 0;
var c3 = 0;
var d4 = 0;
var e5 = 0;
var f6 = 0;
while(trows > currentTrows) {

var x = Math.floor(Math.random() * 6) + 1;  

switch(x){
case 1:
	a1++;
	currentTrows++;
	break;
case 2:
	b2++;
	currentTrows++;
	break;
case 3:
	c3++;
	currentTrows++;
	break;
case 4:
	d4++;
	currentTrows++;
	break;
case 5:
	e5++
	currentTrows++;
	break;
case 6:
	f6++;
	currentTrows++;
	break;
}
endf1 = "1: "+ (a1/trows)*100 + " %";
endf2 = "2: "+ (b2/trows)*100 + " %";
endf3 = "3: "+ (c3/trows)*100 + " %";
endf4 = "4: "+ (d4/trows)*100 + " %";
endf5 = "5: "+ (e5/trows)*100 + " %";
endf6 = "6: "+ (f6/trows)*100 + " %";

document.getElementById("demo").innerHTML =
"Udregner..." + "<br>" +endf1 + "<br>" + endf2 + "<br>" + endf3 + "<br>" + endf4 + "<br>" + endf5 + "<br>" + endf6;


}
}

</script>
</html>
