document.querySelectorAll('section, article, .panel').forEach(el => el.classList.add('reveal'));

const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

const img = document.querySelector('.portrait-stage img');
img.addEventListener('error', () => {
  img.style.display = 'none';
});
