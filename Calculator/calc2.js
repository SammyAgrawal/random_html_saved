
var value = 0
var x = 0

document.getElementById("display").innerHTML = value;

function number(a) {
  x = a
  document.getElementById("display").innerHTML = a;
}

function math(z) {
    document.getElementById("display").innerHTML = value;

    if (z==1) {
      value += x
    } else if (z==2) {
      value -= x
    } else if (z==3) {
      value *= x
    } else if (z==4) {
      value /= x
    } else if (z==5){
        document.getElementById("display").innerHTML = value;
    } else if (z==6) {
        value = 0;
    }

    }
