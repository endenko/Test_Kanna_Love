import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://static.zerochan.net/Ogata.Kanna.1024.4223153.webp" target="_blank">
      <img id="kanna-1" src="https://static.zerochan.net/Ogata.Kanna.1024.4223153.webp" class="logo" alt="Vite logo" />
    </a>
    <a href="https://cdn.polyspeak.ai/speakmaster/c82a2f83eb033444eb3df35020e36c8e.webp" target="_blank">
      <img id="kanna-2" src="https://cdn.polyspeak.ai/speakmaster/c82a2f83eb033444eb3df35020e36c8e.webp" class="logo vanilla" alt="Ogata Kanna" />
    </a>
    <h1>My wife</h1>
    <div class="card">
      <button id="counter" type="button">Love Kanna</button>
    </div>
    <p class="read-the-docs">
      Click on the Kanna picture to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

// Floating heart logic
function spawnHeart(pageX, pageY) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = '❤';
  // Position at the given page coordinates
  heart.style.left = `${pageX}px`;
  heart.style.top = `${pageY}px`;
  document.body.appendChild(heart);

  // Remove after animation finishes to keep the DOM clean
  heart.addEventListener('animationend', () => heart.remove());
}

// Remove image click heart behavior (hearts only on button now)

// Add listener to the counter button to spawn a heart at the button center
const counterBtn = document.querySelector('#counter');
if (counterBtn) {
  counterBtn.addEventListener('click', (e) => {
    // Get button center in page coordinates so heart appears over the button
    const rect = counterBtn.getBoundingClientRect();
    const pageX = rect.left + rect.width / 2 + window.scrollX;
    const pageY = rect.top + rect.height / 2 + window.scrollY;
    spawnHeart(pageX, pageY);
    // Optionally spawn multiple hearts (burst) — uncomment to enable:
    // for (let i = 0; i < 5; i++) {
    //   spawnHeart(pageX + (Math.random()-0.5)*60, pageY + (Math.random()-0.5)*20);
    // }
  });
}
