<p>This example calls a function which performs a calculation, and returns the result:</p>

<p id="demo0"></p>

<script>
function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo0").innerHTML = myFunction(4, 3);
</script>

<p>This example calls a function to convert from Fahrenheit to Celsius:</p>
<p id="demo1"></p>

<script>
function toCelsius(f) {
  return (5/9) * (f-32);
}
document.getElementById("demo1").innerHTML = toCelsius(77);
</script>

<p id="demo2"></p>

<script>
document.getElementById("demo2").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 
</script>

