<p>When adding a number and a string, JavaScript will treat the number as a string.</p>

<p id="demo"></p>

<script>
let x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;
</script>

<p>When adding a string and a number, JavaScript will treat the number as a string.</p>

<p id="demo2"></p>

<script>
let y = "Volvo" + 16;
document.getElementById("demo2").innerHTML = y;
</script>

<p>JavaScript has dynamic types. This means that the same variable can be used to hold different data types:</p>

<p id="demo3"></p>

<script>
let z;         // Now z is undefined
z = 5;         // Now z is a Number
z = "John";    // Now z is a String

document.getElementById("demo3").innerHTML = z;
</script>

<p>You can use quotes inside a string, as long as they don't match the quotes surrounding the string:</p>

<p id="demo4"></p>

<script>
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

document.getElementById("demo4").innerHTML =
answer1 + "<br>" + 
answer2 + "<br>" + 
answer3;
</script>
