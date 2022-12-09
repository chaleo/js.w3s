<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo1">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo1").innerHTML = "Hello JavaScript!"'>Click Me!</button>

<h2>What Can JavaScript Do - p2?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

<h2>What Can JavaScript Do - p3?</h2>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me2!</button>

<h2>What Can JavaScript Do - p4?</h2>

<p id="demo3">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('demo3').style.display='none'">Click Me3!</button>

<h2>What Can JavaScript Do - p5?</h2>

<p>JavaScript can show hidden HTML elements.</p>

<p id="demo5" style="display:none">Hello JavaScript!</p>

<button type="button" onclick="document.getElementById('demo5').style.display='block'">Click Me5!</button>

</body>
</html>


<h2>JavaScript Statements</h2>

<p>In HTML, JavaScript statements are executed by the browser.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello Dolly.";
</script>

<p id="xina">Where is my ice cream?</p>

<script>
function myFunction() {
  document.getElementById("xina").innerHTML = "Xina Bing Chiling ate it, LOL :v !!!";
}
</script>

<button type="button" onclick="myFunction()")>"Find it now"</button>

