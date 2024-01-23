const resultRef = document.querySelector(".result");

const inputRef = document.querySelector(".delta input");

const plusRef = document.querySelector(".action button:nth-child(1)");
const minusRef = document.querySelector(".action button:nth-child(2)");

const resetRef = document.querySelector(".reset button");

let count = 0;
let delta = 1 ;

function addListener() {
  inputRef.addEventListener("change", (e) => {
    delta = Number(e.target.value);
  });

  plusRef.addEventListener("click", (e) => {
    increment();
  });

  minusRef.addEventListener("click", (e) => {
    decrement();
  });

  resetRef.addEventListener("click", (e) => {
    reset();
  });
}

function increment() {
  count += delta;
  updateResult();
}

function decrement() {
  count -= delta;
  updateResult();
}

function reset() {
  count = 0;
  updateResult();
}

function updateResult() {
  resultRef.innerText = count;
}

addListener();
