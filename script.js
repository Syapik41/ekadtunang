const cover = document.getElementById('cover');
const invitation = document.getElementById('invitation');
const audio = document.getElementById('audio');
const soundButton = document.getElementById('soundButton');

document.getElementById('openButton').addEventListener('click', () => {
  cover.classList.add('open');
  invitation.classList.remove('is-locked');
  audio.play().catch(() => {});
});

soundButton.addEventListener('click', () => {
  if (audio.paused) { audio.play(); soundButton.textContent = '♫'; }
  else { audio.pause(); soundButton.textContent = '♩'; }
});

const target = new Date('2026-11-22T11:00:00+08:00').getTime();
const pad = value => String(value).padStart(2, '0');
const updateCountdown = () => {
  const remaining = Math.max(0, target - Date.now());
  document.getElementById('days').textContent = pad(Math.floor(remaining / 86400000));
  document.getElementById('hours').textContent = pad(Math.floor(remaining / 3600000) % 24);
  document.getElementById('minutes').textContent = pad(Math.floor(remaining / 60000) % 60);
  document.getElementById('seconds').textContent = pad(Math.floor(remaining / 1000) % 60);
};
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));