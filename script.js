  // poświata podążająca za kursorem
  const spot = document.getElementById('spot');
  window.addEventListener('mousemove', e => {
    spot.style.setProperty('--x', e.clientX + 'px');
    spot.style.setProperty('--y', e.clientY + 'px');
  });

  // podświetlenie aktywnej pozycji w nawigacji
  const links = [...document.querySelectorAll('#nav a')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        map.get(e.target.id)?.classList.add('active');
      }
    });
  }, { rootMargin: '-25% 0px -60% 0px' });
  document.querySelectorAll('main section').forEach(s => io.observe(s));
