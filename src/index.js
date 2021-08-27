const delet = document.getElementById("btnClr");
const equal = document.getElementById("btnEql");
const btn1 = document.getElementById("btn1");
const btn0 = document.getElementById("btn0");

const Sum = document.getElementById("btnSum");
const Sub = document.getElementById("btnSub");
const Mul = document.getElementById("btnMul");
const Div = document.getElementById("btnDiv");

const inp = document.getElementById("res");

btn1.addEventListener("click", function () {
  inp.innerHTML += btn1.value;
});

delet.addEventListener("click", function () {
  inp.innerHTML = null;
});

btn0.addEventListener("click", function () {
  inp.innerHTML += btn0.value;
});

Sum.addEventListener("click", function () {
  inp.innerHTML += " + ";
});

Sub.addEventListener("click", function () {
  inp.innerHTML += " - ";
});

Mul.addEventListener("click", function () {
  inp.innerHTML += " * ";
});

Div.addEventListener("click", function () {
  inp.innerHTML += " / ";
});

equal.addEventListener("click", function () {
  const toCal = inp.innerText;
  const arr = toCal.split(" ");
  console.log(arr);
  let num1 = parseInt(arr[0], 2);
  let num2 = parseInt(arr[2], 2);
  console.log(num1, " ", num2);
  inp.innerText = "";

  let result;
  if (arr[1] === "+") {
    result = num1 + num2;
    result = result.toString(2);
    console.log(result);
    inp.innerText = result;
  } else if (arr[1] === "-") {
    result = num1 - num2;
    result = result.toString(2);
    console.log(result);
    if (result[0] === "-") {
      inp.innerText = result.substring(1);
    } else {
      inp.innerText = result;
    }
  } else if (arr[1] === "*") {
    result = num1 * num2;
    result = result.toString(2);
    console.log(result);
    inp.innerText = result;
  }

  if (arr[1] === "/") {
    if (num2 === 0) {
      return;
    }
    result = num1 / num2;
    result = result.toString(2);
    console.log(result);
    inp.innerText = result;
  }
});
