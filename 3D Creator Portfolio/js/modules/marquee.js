export function initMarquee(images, idA = 'marqueeRowA', idB = 'marqueeRowB') {
  const rowAEl = document.getElementById(idA);
  const rowBEl = document.getElementById(idB);
  if (!rowAEl || !rowBEl) return;

  const rowAImages = images.slice(0, 11);
  const rowBImages = images.slice(11);

  function fill(el, imgs) {
    for (let t = 0; t < 3; t++) {
      imgs.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'marquee-tile';
        img.loading = 'lazy';
        img.alt = '';
        el.appendChild(img);
      });
    }
  }
  fill(rowAEl, rowAImages);
  fill(rowBEl, rowBImages);

  const section = rowAEl.closest('.marquee');
  let sectionTop = 0;

  function updateSectionTop() {
    sectionTop = section.getBoundingClientRect().top + window.scrollY;
  }
  updateSectionTop();

  function update() {
    const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
    rowAEl.style.transform = `translate3d(${offset - 200}px, 0, 0)`;
    rowBEl.style.transform = `translate3d(${-(offset - 200)}px, 0, 0)`;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', () => { updateSectionTop(); update(); }, { passive: true });
  update();
}
