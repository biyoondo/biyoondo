const texts = [
  "well, hello there",
  "my name is... zombika",
  "zombika biyoondo",
  "Did you think it was easy for me to find you?",
  "well...",
  "hell no",
  "But you still came to me",
  "welcome to my world"
];

let currentIndex = 0;
let isPrinting = false;
let shownHistory = [];

const textContainer = document.getElementById("text-container");
const scene = document.querySelector(".scene");

function typeText(text, callback) {
  isPrinting = true;
  textContainer.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    textContainer.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      isPrinting = false;

      // Добавляем в историю только если ещё нет
      if (!shownHistory.includes(text)) {
        shownHistory.push(text);
      }

      if (callback) callback();
    }
  }, 30);
}

scene.addEventListener("click", () => {
  if (isPrinting) return;

  if (currentIndex === 0 && textContainer.style.display !== "block") {
    textContainer.style.display = "block";
    typeText(texts[currentIndex]);
    return;
  }

  currentIndex++;

  if (currentIndex < texts.length) {
    typeText(texts[currentIndex]);
  } else {
    textContainer.style.display = "none";

  if (!document.querySelector(".button")) {
  const btn = document.createElement("button");
  btn.textContent = "Enter the world";
  btn.className = "button";
  btn.onclick = () => {
    localStorage.setItem('lastPage', 'index.html');  // сохраняем
    window.location.href = "index2.html";
  };
  scene.appendChild(btn);
}

  }
  
});

// Модалка и кнопка журнала
const btn = document.getElementById('logBtn');
const modal = document.getElementById('logPopup');
const closeBtn = document.getElementById('closeLog');

btn.addEventListener('click', () => {
  const logText = document.getElementById('logText');
  logText.innerHTML = ''; // Очистка перед вставкой

  const historyToShow = (currentIndex >= texts.length) ? shownHistory : shownHistory.slice(0, -1);


  historyToShow.forEach(line => {
    const div = document.createElement('div');
    div.textContent = line;
    logText.appendChild(div);
  });

  modal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
