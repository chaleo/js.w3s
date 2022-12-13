<p id="demo">Click the button to display the cookies associated with this document.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML =
  "Cookies associated with this document: " + document.cookie;
}
</script>

<p id="demo2"></p>

<script>
let x = 100 + 50;
document.getElementById("demo2").innerHTML = x;
</script>

<p id="demo3"></p>

<script>
let a = 5;
let b = 2;
let c = a + b;
document.getElementById("demo3").innerHTML = c;
</script>
