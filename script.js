const layer = document.getElementById('bgLayer');
const tulipColors = ['#e8001a','#ff2244','#cc0022','#ff6680','#ff99aa','#ffccdd','#dd0033'];

for (let i = 0; i < 55; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.style.left = Math.random() * 105 + 'vw';
  p.style.background = tulipColors[Math.floor(Math.random() * tulipColors.length)];
  p.style.width = (10 + Math.random() * 10) + 'px';
  p.style.height = (16 + Math.random() * 14) + 'px';
  p.style.animationDuration = (5 + Math.random() * 9) + 's';
  p.style.animationDelay = (Math.random() * 14) + 's';
  p.style.opacity = '0';
  p.style.borderRadius = Math.random() > 0.5
    ? '60% 60% 40% 40% / 70% 70% 30% 30%'
    : '50% 0 50% 0';
  layer.appendChild(p);
}

function accept() {
  const emojis = ['❤️','❤️','❤️','💗','💖','💝','🌷','🌷','🌹','🌹','✨','💞','💕','🌷'];
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  for (let i = 0; i < 55; i++) spawnBurst(emojis, cx, cy, i * 18, 1.4 + Math.random() * 2.2);

  setTimeout(() => {
    // Show thank you page
    document.getElementById('mainPage').style.display = 'none';
    const tp = document.getElementById('thankPage');
    tp.style.display = 'flex';
    tp.style.animation = 'fadeUp 1s ease both';

    // More bursts on new page
    for (let i = 0; i < 60; i++) spawnBurst(emojis, Math.random()*window.innerWidth, Math.random()*window.innerHeight*0.5, i * 20, 1.2 + Math.random() * 2);
  }, 800);
}

function spawnBurst(emojis, ox, oy, delay, size) {
  const el = document.createElement('div');
  el.className = 'burst';
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  const angle = Math.random() * 360;
  const dist = 80 + Math.random() * 260;
  const tx = Math.cos(angle * Math.PI / 180) * dist + 'px';
  const ty = (Math.sin(angle * Math.PI / 180) * dist - 60) + 'px';
  const tr = (Math.random() * 160 - 80) + 'deg';
  const dur = 900 + Math.random() * 900;
  el.style.cssText = `left:${ox}px; top:${oy}px; font-size:${size}rem; --tx:${tx}; --ty:${ty}; --tr:${tr}; animation-duration:${dur}ms; animation-delay:${delay}ms;`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), dur + delay + 200);
}