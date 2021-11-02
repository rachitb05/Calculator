var screen = document.getElementById("screen");
var btn = document.querySelectorAll(".btn");
screenValue = "";
for (var i = 0; i < btn.length; i++) {
  // console.log(btn[i].innerHTML);
  btn[i].addEventListener("click", function () {
    // console.log("hello");
    buttontext = this.innerHTML;

    if (buttontext == "RESET") {
      screen.value = "";
      screenValue = "";
    } else if (buttontext == "=") {
      // console.log(screenValue);
      screen.value = eval(screenValue);
      screenValue = screen.value;
    } else if (buttontext == "DEL") {
      screen.value = screen.value.slice(0, screen.value.length - 1);
      screenValue = screenValue.slice(0, screenValue.length - 1);
    } else {
      screen.value += buttontext;
      screenValue += buttontext;
    }
    console.log(screenValue);
  });
}
// screenValue = screen.value;
document.addEventListener("keypress", function (e) {
  //   console.log(e.key);
  if (e.key == "Enter") {
    screen.value = eval(screenValue);
    screenValue = screen.value;
  } else if (e.key == " ") {
    screen.value = "";
    screenValue = "";
  } else if (e.target.nodeName == "INPUT") {
    // console.log("inside");
    // screen.value = e.key;
   
    screenValue += e.key;
    // screen.value = screenValue;
  } else {
    screen.value = e.key;

    screenValue += screen.value;
    screen.value = screenValue;
  }
  console.log(screenValue);
});
var theme = document.querySelector(".theme");
theme.addEventListener("click", function () {
  document.body.classList.toggle("night");
  console.log(this.innerHTML);
  if (this.innerHTML == '<i class="fas fa-sun" aria-hidden="true"></i>')
    this.innerHTML = '<i class="fas fa-moon"></i>';
  else this.innerHTML = '<i class="fas fa-sun">';
  console.log(this.innerHTML);
});
