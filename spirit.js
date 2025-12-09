// ===== STICKY NAVBAR =====
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow', 'bg-light');
  } else {
    navbar.classList.remove('shadow', 'bg-light');
  }
});

// ===== SMOOTH SCROLLING FOR INTERNAL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== HERO CAROUSEL AUTO PAUSE / PLAY =====
const heroCarousel = document.getElementById('heroCarousel');
if(heroCarousel) {
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 10000,
    pause: false,
    ride: 'carousel'
  });
}


const salvationForm = document.getElementById('salvation-form');
salvationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Get the text from the textarea
    const prayerText = this.querySelector('textarea').value || 'I just said the salvation prayer!';
    
    // WhatsApp link (replace with your number)
    const phone = '2347031198484'; 
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(prayerText)}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
  });


// ===== OPTIONAL: CLOSE DROPDOWN ON LINK CLICK (MOBILE) =====
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
    }
  });
});
