export function initAnimatedText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return;

  el.innerHTML = '';
  const words = text.split(' ');
  const chars = [];

  words.forEach((word, wi) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'word';

    for (let i = 0; i < word.length; i++) {
      const ch = document.createElement('span');
      ch.className = 'ch';

      const ph = document.createElement('span');
      ph.className = 'ch-ph';
      ph.textContent = word[i];

      const an = document.createElement('span');
      an.className = 'ch-an';
      an.textContent = word[i];

      ch.appendChild(ph);
      ch.appendChild(an);
      wordSpan.appendChild(ch);
      chars.push(an);
    }
    el.appendChild(wordSpan);

    if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
  });

  function update() {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const startY = vh * 0.8;
    const endY = vh * 0.2;
    const totalDistance = startY - endY + rect.height;
    const currentDistance = startY - rect.top;
    const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));

    for (let i = 0; i < chars.length; i++) {
      const threshold = i / chars.length;
      const charProgress = Math.max(0, Math.min(1, (progress - threshold) * 5));
      chars[i].style.opacity = (0.2 + 0.8 * charProgress).toFixed(3);
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}
