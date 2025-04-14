const button = document.querySelector("button");

function greet() {
  const name = "山田";
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `${name}さん、こんにちは。はじめまして！`;
}

button.addEventListener("click", greet);