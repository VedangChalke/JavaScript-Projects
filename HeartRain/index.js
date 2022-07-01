function createHeart() {
  const heart = document.createElement
  ("div");
  heart.classList.add("heart")
  heart.innerText = "💖"
  

  heart.style.left= Math.random()*100 + "vw"; 
  

  document.body.appendChild(heart);
}

setInterval(createHeart,50);
 
