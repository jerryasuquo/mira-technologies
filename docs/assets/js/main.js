const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  //   window.alert("Hello world!");
  alert(input.value);
});
