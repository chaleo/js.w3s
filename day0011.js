<body>

<h1>JavaScript Strings</h1>
<p>Strings are written inside quotes. You can use single or double quotes:</p>

<p id="demo"></p>

<script>
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes

document.getElementById("demo").innerHTML =
carName1 + " " + carName2; 
</script>

</body>

<body>

<h1>JavaScript Strings</h1>
<p>You can use quotes inside a string, as long as they do not match the quotes surrounding the string.</p>

<p id="demo1"></p>

<script>
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 

document.getElementById("demo1").innerHTML =
answer1 + "<br>" + answer2 + "<br>" + answer3; 
</script>

</body>

<body>

<h1>JavaScript Strings</h1>
<h2>The length Property</h2>

<p>The length of the string is:</p>
<p id="demo2"></p>

<script>
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo2").innerHTML = text.length;
</script>

</body>
