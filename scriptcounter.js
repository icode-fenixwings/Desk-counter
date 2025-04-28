let countE = 0;


function increment() {
  countE = countE + 1;
  
  document.getElementById("count").innerHTML = countE;
}

function save() {
 document.getElementById("save").innerHTML += countE + "-";

  document.getElementById("count").innerHTML = 0;
  countE = 0;
}



