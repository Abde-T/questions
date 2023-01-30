//EX1
const text = document.getElementById("text");

function js_style() {
  return (
    (text.style.fontSize = "30px"),
    (text.style.color = "green"),
    (text.style.fontFamily = "Comic Sans MS"),
    //EX3
    (text.style.backgroundColor = "pink")
  );
}

// EX2
function getFormvalue() {
  var x = document.getElementById("form1");
  for (var i = 0; i < x.length; i++) {
    if (x.elements[i].value != "Submit") {
      console.log(x.elements[i].value);
    }
  }
  //EX3
  myBodyElements = document.getElementsByTagName("input");
  inp1 = myBodyElements[0];
  inp1.style.backgroundColor = "yellow";
  inp2 = myBodyElements[1];
  inp2.style.backgroundColor = "red";
}

//EX4
function getAttributes() {
  var u = document.getElementById("w3r").href;
  alert("The value of the href attribute of the link is : " + u);
  var v = document.getElementById("w3r").hreflang;
  alert("The value of the hreflang attribute of the link is : " + v);
  var w = document.getElementById("w3r").rel;
  alert("The value of the rel attribute of the link is : " + w);
  var x = document.getElementById("w3r").target;
  alert("The value of the taget attribute of the link is : " + x);
  var y = document.getElementById("w3r").type;
  alert("The value of the type attribute of the link is : " + y);
}

// EX5
function insert_Row() {
  var x = document.getElementById("sampleTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML = "Row" + " cell";
  z.innerHTML = "Row" + " cell";
}

// EX6
function changeContent() {
  rn = window.prompt("Input the Row number(0,1,2)", "0");
  cn = window.prompt("Input the Column number(0,1)", "0");
  content = window.prompt("Input the Cell content");
  var x = document.getElementById("myTable").rows[parseInt(rn, 10)].cells;
  x[parseInt(cn, 10)].innerHTML = content;
}
