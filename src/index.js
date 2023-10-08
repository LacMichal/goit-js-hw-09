const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.body;

// Funkcja do generacji losowego koloru 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Zmienna która zmienia interwał czasowy (1 sek)
let intervalId;

// Obsługa kliknięcia przycisku "Start"
startButton.addEventListener('click', () => {
 // Wyłącz przycisk "Start"
 startButton.disabled = true;
  // Uruchamiamy interwał co sekundę (zmiana tła koloru)
  intervalId = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

// Obsługa kliknięcia przycisku "Stop"
stopButton.addEventListener('click', () => {
  // Włączamy przycisk "Start"
  startButton.disabled = false;

  // Zatrzymujemy interwał
  clearInterval(intervalId);
});

