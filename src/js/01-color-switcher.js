
// Funkcja do generowania losowego koloru w formacie heksadecymalnym
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  // Przyciski "Start" i "Stop"
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  
  let intervalId = null; // Zmienna do przechowywania identyfikatora interwału
  
  // Obsługa przycisku "Start"
  startButton.addEventListener('click', () => {
    // Wyłącz przycisk "Start"
    startButton.disabled = true;
    
    // Zmiana koloru tła co 1 sekunda
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
  // Obsługa przycisku "Stop"
  stopButton.addEventListener('click', () => {
    // Włącz przycisk "Start"
    startButton.disabled = false;
    
    // Zatrzymaj zmianę koloru tła
    clearInterval(intervalId);
  });
  
  
  
  
  
  
  