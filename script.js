const button = document.getElementById("nao");

button.addEventListener("mouseover", function() {
  const newPosX = Math.floor(Math.random() * window.innerWidth);
  const newPosY = Math.floor(Math.random() * window.innerHeight);
  
  button.style.left = newPosX + "px";
  button.style.top = newPosY + "px";
});