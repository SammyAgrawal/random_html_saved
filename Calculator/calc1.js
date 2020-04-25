var value = []
  var value1 = []
  var n = 0;
  var total = 0;
  var num = "";
  var num2 = "";
  var g = 0; /* Setting all variables */


document.getElementById("display").innerHTML = 0;

function number(a) {
  g = a
  value.push(g); value1.push(g);
  document.getElementById("display").innerHTML = value.join("")
}

function math(z) {
    document.getElementById("display").innerHTML = value;

    if (z==1) {
      value.push("+"); value1.push("+");
      n = value.indexOf("+");
      for (i=0; i < n; i++) {
          num = num.concat(value[i]);
          }
      total += parseFloat(num)
      num= ""
      document.getElementById("display").innerHTML = value.join(""); /* Getting first number*/

        }
        value1 = value.slice(n+1)
    if (z==2) {
      value.push("-")
    }
    if (z==3) {
      value.push("*")
    }
    if (z==4) {
      value.push("/")
    }
    if (z==5){ /* EQUALS */
        value.push("=");
        for (i=0;i<value1.length; i++) {
          num2 = num2.concat(value1[i]);
        }
        total += parseFloat(num2)
        value.push(total)

      document.getElementById("display").innerHTML = value.join("");


    } else if (z==6) { /* CLEAR */
        value = [0];
        total = 0
        document.getElementById("display").innerHTML = value;
    }

    }
