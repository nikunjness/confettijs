// confetti.js

(function() {
  // Confetti particle class
  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = Math.random() * 10 + 5;
      this.speedY = Math.random() * -1 - 1;
      this.speedX = Math.random() * 6 - 3;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.1) this.size -= 0.1;
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Main confetti class
  class Confetti {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    }

    createParticles(x, y, amount) {
      for (let i = 0; i < amount; i++) {
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.particles.push(new Particle(x, y, color));
      }
    }

    animateParticles() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      this.particles.forEach((particle, index) => {
        particle.update();
        particle.draw(this.ctx);
        
        if (particle.size <= 0.1) {
          this.particles.splice(index, 1);
        }
      });
      
      if (this.particles.length > 0) {
        requestAnimationFrame(this.animateParticles.bind(this));
      }
    }

    burst(x, y) {
      this.createParticles(x, y, 50);
      this.animateParticles();
    }
  }

  // Initialize confetti
  function initConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const confetti = new Confetti(canvas);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Add click event listener to elements with 'confetti-trigger' class
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('confetti-trigger')) {
        const rect = event.target.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        confetti.burst(x, y);
      }
    });
  }

  // Run initialization when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConfetti);
  } else {
    initConfetti();
  }
})();
