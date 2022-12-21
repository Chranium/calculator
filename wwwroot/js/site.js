// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const parser = math.parser()
parser.evaluate('pdecimal(x) = format(x - floor(x), { precision: 8 })');
parser.evaluate('pentera(x) = floor(x)');

document.onkeydown = function (e) { return false; }

function dis(val) {
   document.getElementById("result").value += val
}

function myFunction(event) {
   if (event.key == '0' || event.key == '1'
      || event.key == '2' || event.key == '3'
      || event.key == '4' || event.key == '5'
      || event.key == '6' || event.key == '7'
      || event.key == '8' || event.key == '9'
      || event.key == '+' || event.key == '-'
      || event.key == '*' || event.key == '/')
      document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
   if (event.keyCode === 13) {
      console.log("Enter");
      let x = document.getElementById("result").value
      console.log(x);
      solve();
   }
}

function solve() {
   let x = document.getElementById("result").value;
   try {
      let y = parser.evaluate(x);
      if (y == 'Infinity') throw error;
      document.getElementById("result").value = y;
   }

   catch {
      document.getElementById("result").value = "syntax error";
   }
}

function clr() {
   document.getElementById("result").value = ""
}