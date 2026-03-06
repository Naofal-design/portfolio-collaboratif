// ── CONSOLE MESSAGE ──
console.log("🚀 Portfolio Collaboratif — Naofal, Bruno, Marcel");

// ── ANIMATION AU SCROLL ──
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.5s ease';
  observer.observe(card);
});

// ── VALIDATION FORMULAIRE ──
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();

  if (nom === '' || email === '') {
    alert('⚠️ Veuillez remplir tous les champs !');
    return;
  }

  if (!email.includes('@')) {
    alert('⚠️ Email invalide !');
    return;
  }

  alert(`✅ Merci ${nom}, votre message a été envoyé !`);
  form.reset();
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});