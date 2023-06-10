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

document.addEventListener("DOMContentLoaded", function() {
  // Obtenez l'élément de date du serveur
  var timeElement = document.getElementById("server-date");

  // Vérifiez si l'élément existe
  if (timeElement) {
    // Obtenez l'heure actuelle
    var currentTime = new Date();
    var timeString = "La date de ce serveur est : " + currentTime.toLocaleString();

    // Mettez à jour le contenu de l'élément avec l'heure du serveur
    timeElement.textContent = timeString;
  }
});


