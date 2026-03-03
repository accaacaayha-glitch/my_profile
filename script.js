/* ==========================================
   GIRLY PINK JAVASCRIPT - CUTE INTERACTIONS
   ========================================== */

// ==========================================
// 1. CUSTOM CURSOR SYSTEM
// ==========================================
const cursor = document.querySelector('.custom-cursor');
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// ==========================================
// 2. CURSOR TRAIL - EMOJI BERGANTIAN
// ==========================================
const emojiList = ['💖', '✨', '🌸', '💕', '⭐', '🎀', '🌟', '💗', '🌺', '🍒'];
let emojiIndex = 0;
let lastTrailTime = 0;
const trailDelay = 150; // Delay antar emoji trail (ms)

document.addEventListener('mousemove', (e) => {
  const currentTime = Date.now();
  
  // Hanya buat trail jika sudah lewat delay yang ditentukan
  if (currentTime - lastTrailTime < trailDelay) return;
  
  lastTrailTime = currentTime;
  
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.textContent = emojiList[emojiIndex];
  trail.style.left = e.pageX + 'px';
  trail.style.top = e.pageY + 'px';
  
  document.body.appendChild(trail);
  
  // Ganti emoji untuk trail berikutnya
  emojiIndex = (emojiIndex + 1) % emojiList.length;
  
  // Hapus trail setelah animasi selesai
  setTimeout(() => trail.remove(), 800);
});

// ==========================================
// 3. FLOATING PARTICLES
// ==========================================
function createFloatingParticles() {
  const particlesContainer = document.querySelector('.particles-container');
  const particleEmojis = ['🌸', '💕', '✨', '🎀', '⭐', '💖', '🌺'];
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.textContent = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.fontSize = (Math.random() * 15 + 20) + 'px';
    
    particlesContainer.appendChild(particle);
  }
}

// ==========================================
// 4. FADE IN ANIMATION ON SCROLL
// ==========================================
function handleScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// ==========================================
// 5. SKILL TAGS INTERACTION
// ==========================================
function setupSkillTags() {
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.15) rotate(-3deg)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
    
    tag.addEventListener('click', function() {
      // Animasi klik
      this.style.transform = 'scale(0.95) rotate(0deg)';
      setTimeout(() => {
        this.style.transform = 'scale(1.15) rotate(-3deg)';
      }, 100);
      
      // Spawn sparkles
      createSparkles(this);
    });
  });
}

// ==========================================
// 6. CREATE SPARKLES EFFECT
// ==========================================
function createSparkles(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = centerX + (Math.random() - 0.5) * 50 + 'px';
    sparkle.style.top = centerY + (Math.random() - 0.5) * 50 + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1200);
  }
}

// ==========================================
// 7. MUSIC TRIGGER INTERACTION
// ==========================================
function setupMusicTrigger() {
  const musicTriggers = document.querySelectorAll('.music-trigger');
  
  musicTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      createMusicNotes(this);
    });
  });
}

function createMusicNotes(element) {
  const rect = element.getBoundingClientRect();
  const notes = ['♪', '♫', '♬', '𝄞'];
  
  for (let i = 0; i < 8; i++) {
    const note = document.createElement('div');
    note.className = 'music-note';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 100 + 'px';
    note.style.top = rect.top + 'px';
    note.style.color = ['#ff69b4', '#ffd700', '#ff1493', '#e6b3ff'][Math.floor(Math.random() * 4)];
    
    document.body.appendChild(note);
    
    setTimeout(() => note.remove(), 4000);
  }
}

// ==========================================
// 8. BUTTON HOVER EFFECTS
// ==========================================
function setupButtonEffects() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      createButtonSparkles(this);
    });
  });
}

function createButtonSparkles(button) {
  const rect = button.getBoundingClientRect();
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const sparkle = document.createElement('div');
      sparkle.textContent = '✨';
      sparkle.style.position = 'fixed';
      sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
      sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
      sparkle.style.fontSize = '20px';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.zIndex = '9999';
      sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1000);
    }, i * 100);
  }
}

// ==========================================
// 9. CARD HOVER EFFECTS
// ==========================================
function setupCardEffects() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.borderColor = '#ffd700';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.borderColor = '#ff69b4';
    });
  });
}

// ==========================================
// 10. SMOOTH SCROLL
// ==========================================
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
}

// ==========================================
// 11. PROFILE IMAGE CLICK EFFECT
// ==========================================
function setupProfileImageEffect() {
  const profileImage = document.querySelector('.profile-image');
  
  if (profileImage) {
    profileImage.addEventListener('click', function() {
      // Create heart burst effect
      const rect = this.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const hearts = ['💖', '💕', '💗', '💓', '💝'];
      
      for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '30px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = 150;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        heart.animate([
          { 
            left: centerX + 'px', 
            top: centerY + 'px', 
            opacity: 1, 
            transform: 'scale(0)' 
          },
          { 
            left: endX + 'px', 
            top: endY + 'px', 
            opacity: 0, 
            transform: 'scale(1.5) rotate(360deg)' 
          }
        ], {
          duration: 1500,
          easing: 'ease-out'
        });
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1500);
      }
    });
  }
}

// ==========================================
// 12. INITIALIZE ALL FUNCTIONS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  createFloatingParticles();
  handleScrollAnimations();
  setupSkillTags();
  setupMusicTrigger();
  setupButtonEffects();
  setupCardEffects();
  setupSmoothScroll();
  setupProfileImageEffect();
  
  console.log('💖 Amira\'s Cute Profile Loaded! ✨');
});

// ==========================================
// 13. PERFORMANCE OPTIMIZATION
// ==========================================
// Throttle function untuk optimize performance
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// ==========================================
// 14. EASTER EGG - KONAMI CODE
// ==========================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join('') === konamiSequence.join('')) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  // Rainbow effect on entire page
  document.body.style.animation = 'rainbowBackground 3s infinite';
  
  // Spawn lots of emojis
  const emojis = ['🌸', '💖', '✨', '🎀', '⭐', '💕', '🌺', '🦄', '🍓', '🍒'];
  
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const emoji = document.createElement('div');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = 'fixed';
      emoji.style.left = Math.random() * window.innerWidth + 'px';
      emoji.style.top = '-50px';
      emoji.style.fontSize = (Math.random() * 40 + 30) + 'px';
      emoji.style.pointerEvents = 'none';
      emoji.style.zIndex = '9999';
      emoji.style.animation = 'emojiFloat 3s ease-out forwards';
      
      document.body.appendChild(emoji);
      
      setTimeout(() => emoji.remove(), 3000);
    }, i * 50);
  }
  
  alert('🎉 Yay! Kamu nemu Easter Egg! 💖✨');
}

// Add rainbow background animation
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbowBackground {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
  
  @keyframes emojiFloat {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(${window.innerHeight + 100}px) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
