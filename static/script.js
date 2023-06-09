const konamiCode = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a"
];
let konamiIndex = 0;

function handleKeyDown(event) {
  const key = event.key;
  if (key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      // Konami code correct, afficher le Rickroll
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  } else {
    konamiIndex = 0;
  }
}

document.addEventListener("keydown", handleKeyDown);
