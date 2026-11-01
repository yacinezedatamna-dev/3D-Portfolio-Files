export function initProjects(projects) {
  const track = document.getElementById('projectsTrack');
  if (!track) return;

  projects.forEach((p, i) => {
    const slot = document.createElement('div');
    slot.className = 'project-slot';

    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.setProperty('--i', i);

    card.innerHTML = `
      <div class="project-top">
        <div class="project-meta">
          <span class="project-num">${p.num}</span>
          <div class="project-titles">
            <span class="project-cat">${p.category}</span>
            <h3 class="project-name">${p.name}</h3>
          </div>
        </div>
        <a class="live-btn" href="${p.href}" target="_blank" rel="noopener">Live Project</a>
      </div>
      <div class="project-gallery">
        <div class="pg-col">
          <img src="${p.img1}" alt="${p.name} — 01" loading="lazy">
          <img src="${p.img2}" alt="${p.name} — 02" loading="lazy">
        </div>
        <div class="pg-col">
          <img class="pg-tall" src="${p.img3}" alt="${p.name} — 03" loading="lazy">
        </div>
      </div>
    `;

    slot.appendChild(card);
    track.appendChild(slot);
  });

  const slots = track.querySelectorAll('.project-slot');
  const total = slots.length;

  slots.forEach((slot, i) => {
    if (i === total - 1) return;

    const card = slot.querySelector('.project-card');
    const nextSlot = slots[i + 1];
    const targetScale = 1 - (total - 1 - i) * 0.03;

    function update() {
      const cardRect = card.getBoundingClientRect();
      const nextRect = nextSlot.getBoundingClientRect();
      const distance = nextRect.top - cardRect.top;
      const range = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - distance / range));
      const scale = 1 - (1 - targetScale) * progress;
      card.style.transform = `scale(${scale.toFixed(4)})`;
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  });
}
