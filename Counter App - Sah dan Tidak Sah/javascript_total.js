let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
// let reset = document.querySelector("#reset");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let output1 = document.querySelector("#output1");
  let output2 = document.querySelector("#output2");
  let output3 = document.querySelector("#output3");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) + 1;
  output.innerText = result;

  let total =
    Number(output.innerText) +
    Number(output1.innerText) +
    Number(output2.innerText);
  output4.innerText = total;
});

subract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let output1 = document.querySelector("#output1");
  let output2 = document.querySelector("#output2");
  let output3 = document.querySelector("#output3");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }
  output.innerText = result;

  let total =
    Number(output.innerText) +
    Number(output1.innerText) +
    Number(output2.innerText);
  output4.innerText = total;
});

// reset.addEventListener("click", function () {
//   let output = document.querySelector("#output");
//   let result = Number(output.innerText) * 0;

//   output.innerText = result;
// });

let add1 = document.querySelector("#add1");
let subract1 = document.querySelector("#subtract1");
// let reset1 = document.querySelector("#reset1");

add1.addEventListener("click", function () {
  let output = document.querySelector("#output1");
  let output1 = document.querySelector("#output");
  let output2 = document.querySelector("#output2");
  let output3 = document.querySelector("#output3");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) + 1;
  output.innerText = result;

  let total =
    Number(output.innerText) +
    Number(output1.innerText) +
    Number(output2.innerText);
  output4.innerText = total;
});

subract1.addEventListener("click", function () {
  let output = document.querySelector("#output1");
  let output1 = document.querySelector("#output");
  let output2 = document.querySelector("#output2");
  let output3 = document.querySelector("#output3");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }
  output.innerText = result;

  let total =
    Number(output.innerText) +
    Number(output1.innerText) +
    Number(output2.innerText);
  output4.innerText = total;
});

// reset1.addEventListener("click", function () {
//   let output = document.querySelector("#output1");
//   let result = Number(output.innerText) * 0;

//   output.innerText = result;
// });

let add2 = document.querySelector("#add2");
let subract2 = document.querySelector("#subtract2");
// let reset2 = document.querySelector("#reset2");

add2.addEventListener("click", function () {
  let output = document.querySelector("#output2");
  let output1 = document.querySelector("#output1");
  let output2 = document.querySelector("#output");
  let output3 = document.querySelector("#output3");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) + 1;
  output.innerText = result;

  let total =
    Number(output.innerText) +
    Number(output1.innerText) +
    Number(output2.innerText);
  output4.innerText = total;
});

subract2.addEventListener("click", function () {
  let output = document.querySelector("#output2");
  let output1 = document.querySelector("#output1");
  let output2 = document.querySelector("#output");
  let output3 = document.querySelector("#output3");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }
  output.innerText = result;

  let total =
    Number(output.innerText) +
    Number(output1.innerText) +
    Number(output2.innerText);
  output4.innerText = total;
});

// reset2.addEventListener("click", function () {
//   let output = document.querySelector("#output2");
//   let result = Number(output.innerText) * 0;

//   output.innerText = result;
// });

let add3 = document.querySelector("#add3");
let subract3 = document.querySelector("#subtract3");
// let reset3 = document.querySelector("#reset3");

add3.addEventListener("click", function () {
  let output = document.querySelector("#output3");
  let output1 = document.querySelector("#output1");
  let output2 = document.querySelector("#output2");
  let output3 = document.querySelector("#output");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) + 1;
  output.innerText = result;

  let totalSah =
    Number(output1.innerText) +
    Number(output2.innerText) +
    Number(output3.innerText);
  output4.innerText = totalSah;
});

subract3.addEventListener("click", function () {
  let output = document.querySelector("#output3");
  let output1 = document.querySelector("#output1");
  let output2 = document.querySelector("#output2");
  let output3 = document.querySelector("#output");
  let output4 = document.querySelector("#output4");

  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;

  let totalSah =
    Number(output1.innerText) +
    Number(output2.innerText) +
    Number(output3.innerText);
  output4.innerText = totalSah;
});

// reset3.addEventListener("click", function () {
//   let output = document.querySelector("#output3");
//   let result = Number(output.innerText) * 0;

//   output.innerText = result;
// });

// reset4.addEventListener("click", function () {
//   let output = document.querySelector("#output");
//   let output1 = document.querySelector("#output1");
//   let output2 = document.querySelector("#output2");
//   let output3 = document.querySelector("#output3");
//   let result = Number(output.innerText) * 0;

//   output.innerText = result;
//   output1.innerText = result;
//   output2.innerText = result;
//   output3.innerText = result;
// });

// select javascript
