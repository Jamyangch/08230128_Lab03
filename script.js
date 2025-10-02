// NAVBAR ACTIVE LINK
// Highlights the current page link in the navigation bar
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active'); // Add 'active' class to the link that matches current URL
  }
});

// HERO SOCIAL ICON HOVER EFFECT
// Adds a scale-up effect when hovering over social media icons
const socialIcons = document.querySelectorAll('.social a');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)'; // Grow icon
    icon.style.transition = '0.3s';       // Smooth transition
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';   // Return to original size
  });
});

// GREETING BASED ON TIME (WITH EMOJIS)
// Sets a dynamic greeting message depending on the current hour
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 5) return "🌙 Burning the midnight oil?";
  if (hour < 12) return "☀️ Rise and shine";
  if (hour < 17) return "💪 Keep going strong";
  if (hour < 21) return "🌆 Good evening, hope you're doing well";
  return "✨ Late night vibes ✨";
}

// Set the greeting text if the element exists
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  greetingEl.textContent = getGreeting();
}


// SCROLL TO TOP BUTTON
// Dynamically creates a scroll-to-top button and shows it after scrolling
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.id = 'scrollBtn';
document.body.appendChild(scrollBtn);

// Style the button
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 18px;
  display: none;          /* Hidden initially */
  cursor: pointer;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  border: none;
  z-index: 1000;
`;

// Show button only after scrolling down 300px
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll smoothly to top when clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// EDUCATION CARDS TOGGLE INFO
// Allows clicking on an education card to expand or collapse additional info
const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded'); // Toggle 'expanded' class
  });
});


// PROJECT CARDS HOVER EFFECT
// Lifts the project cards slightly when hovered
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.transition = '0.3s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// CONTACT FORM VALIDATION
// Checks if all fields are filled before submitting the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // Stop form submission
      alert('Please fill in all fields before sending.');
    }
  });
}

// AUTO-UPDATING FOOTER YEAR
// Automatically updates the year in the footer
const footerText = document.getElementById("footer-text");
if (footerText) {
  const currentYear = new Date().getFullYear();
  footerText.textContent = `© ${currentYear} Jamyang | Portfolio`;
}

// Logs the current window width whenever the browser is resized
function checkResponsive() {
  console.log('Window width:', window.innerWidth);
}
window.addEventListener('resize', checkResponsive);

// RANDOM QUOTE DISPLAY
// Shows a random inspirational quote in the page header
const quoteEl = document.querySelector('.page-quote');
if(quoteEl){
  const quotes = [
    "💻 Code is like humor. When you have to explain it, it’s bad.",
    "🎨 Design is intelligence made visible.",
    "🚀 Every great project starts with a small idea.",
    "📚 Learning never exhausts the mind."
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}


// READ MORE / READ LESS BUTTONS
// Toggles extra text in the education section
const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const moreText = button.previousElementSibling.querySelector(".more-text");
    if (moreText.style.display === "inline") {
      moreText.style.display = "none"; // Hide extra text
      button.textContent = "Read More"; // Change button text
    } else {
      moreText.style.display = "inline"; // Show extra text
      button.textContent = "Read Less"; // Change button text
    }
  });
});
