(() => {
  const nav = document.getElementById('nav');
  const progressBar = document.getElementById('scroll-progress-bar');
  const progressPct = document.getElementById('scroll-progress-pct');

  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;

    if (nav) nav.classList.toggle('scrolled', y > 70);

    if (progressBar || progressPct) {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (y / scrollable) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, pct));
      if (progressBar) progressBar.style.width = clamped + '%';
      if (progressPct) progressPct.textContent = Math.round(clamped) + '%';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
