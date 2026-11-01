/**
 * app.js — نقطة الدخول الرئيسية لمشروع Yassine 3D Creator
 * تشغيل كل الوحدات بعد تحميل الصفحة
 */

import { initFadeIn }        from './modules/fade-in.js';
import { initMarquee }       from './modules/marquee.js';
import { initAnimatedText }  from './modules/animated-text.js';
import { initProjects }      from './modules/projects.js';
import { initPortrait }      from './portrait/engine.js';

import { MARQUEE_IMAGES }    from '../data/marquee-images.js';
import { PROJECTS }          from '../data/projects-data.js';

/* ─────────── نص قسم About ─────────── */
const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

/* ─────────── التهيئة ─────────── */
function boot() {
  // 1) Fade-in لكل العناصر التي تحمل .fade-in
  initFadeIn();

  // 2) Marquee — صفّان من صور GIF تتحرك مع الـ scroll
  initMarquee(MARQUEE_IMAGES, 'marqueeRowA', 'marqueeRowB');

  // 3) النص المتحرك في About (حرف بحرف)
  initAnimatedText('#aboutText', ABOUT_TEXT);

  // 4) بطاقات المشاريع المتكدسة (sticky + scale)
  initProjects(PROJECTS);

  // 5) الـ Living Portrait (محرك WebGL)
  try {
    initPortrait();
  } catch (err) {
    // إذا فشل WebGL، تُبقى الصورة الاحتياطية (#faceFallback) ظاهرة
    console.warn('[portrait] engine init failed:', err);
  }
}

/* ─────────── تشغيل آمن ─────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
