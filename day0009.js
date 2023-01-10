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

<h2>JavaScript Objects</h2>

<p id="demo3"></p>

<script>
// Create an object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Display some data from the object:
document.getElementById("demo3").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>

<h2>JavaScript Objects</h2>

<p id="demo4"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Display some data from the object:
document.getElementById("demo4").innerHTML =
person.firstName + " is " + person.age + " years old. " + "He has " + person.eyeColor + " eyes."
</script>


<h2>JavaScript Objects</h2>
<p>An object method is a function definition, stored as a property value.</p>

<p id="demo5"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo5").innerHTML = person.fullName();
</script>

// 2023 01 10 // JavaScript Events

<body>

<button onclick="document.getElementById('demo0110a').innerHTML=Date()">The time is?</button>

<p id="demo0110a"></p>

</body>

<body>

<h2>JavaScript HTML Events</h2>
<button onclick="this.innerHTML=Date()">The time is?</button>

</body>

