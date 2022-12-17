<p>When adding a number and a string, JavaScript will treat the number as a string.</p>

<p id="demo"></p>

<script>
let x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;
</script>

<p>When adding a string and a number, JavaScript will treat the number as a string.</p>

<p id="demo2"></p>

<script>
let x = "Volvo" + 16;
document.getElementById("demo2").innerHTML = x;
</script>

