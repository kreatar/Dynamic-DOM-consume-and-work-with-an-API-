const inputRef = document.querySelectorAll(".input");
inputRef.forEach((inputRef) => {
  inputRef.addEventListener("keyup", function (e) {
    if (e.target.value && !isNaN(Number(e.target.value)));
    e.target.nextElementSibling?.focus();
  });
});

inputRef.forEach((inputRef) => {
  inputRef.addEventListener("keydown", function (e) {
    if (e.key == "Delete" || e.key == "Backspace") {
      console.log(e.target.value);
      if (!e.target.value) {
        e.target.previousElementSibling?.focus();
      }
    }
  });
});
