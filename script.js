// Magic button interaction
const magicBtn = document.getElementById('magicBtn');
const magicText = document.getElementById('magicText');

magicBtn.addEventListener('click', () => {
  const messages = [
    "✨ You discovered a secret! ✨",
    "💡 AI says: Keep learning!",
    "🚀 Coding is fun!",
    "🎯 You clicked the magic button!"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  magicText.textContent = randomMessage;
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = "✅ Thank you! Your message has been sent.";
  contactForm.reset();
});
