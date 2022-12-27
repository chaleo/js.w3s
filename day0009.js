<h2>JavaScript Variables</h2>

<p id="demo1"></p>

<script>
// Create and display a variable:
let car = "Fiat";
document.getElementById("demo1").innerHTML = car;
</script>

<h2>JavaScript Objects</h2>

<p id="demo2"></p>

<script>
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo2").innerHTML = "The car type is " + car.type;
</script>

