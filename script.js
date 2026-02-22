window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');

  // Doors open after 0.5s
  setTimeout(() => {
    intro.classList.add('open');
  }, 1000);

  // Intro fades out after 3s (doors + text animation)
  setTimeout(() => {
    intro.classList.add('fade-out');
  }, 3000);
});

  const backToTopButton = document.getElementById("backToTop");

  // Show button after scrolling 200px
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  // Scroll to top on click
  backToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // smooth scroll
    });
  });


// hamburger k liye
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
// typing effect k liye
const roles = ["Front-end Developer", "Back-end Developer", "Full-stack Developer"];
let roleIndex = 0;

function showRole() {
  const roleElement = document.getElementById("role");
  roleElement.textContent = roles[roleIndex];
  roleElement.classList.remove("typing");

  void roleElement.offsetWidth;
  roleElement.classList.add("typing");

  roleIndex = (roleIndex + 1) % roles.length;
}
showRole();
setInterval(showRole, 2000);
// about 

  const aboutSection = document.querySelector("#about");

  const aboutobserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("show");
        }
      });
    },
    {
      threshold: 0.3, 
    }
  );

  aboutobserver.observe(aboutSection);



// paragraph ko read more k liye
function readMore() {
  let moreText = document.getElementById("moreText");
  let btn = document.getElementById("readmore");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerHTML = "Read More";
  }
}



// projects scroll  k liye
const cards = document.querySelectorAll(".project-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });


cards.forEach(card => observer.observe(card));


// certificate scroll k liye
const certCards = document.querySelectorAll('.certificate-card');

function showCertificates() {
  certCards.forEach((card) => {
    const cardPos = card.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (cardPos < screenPos) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showCertificates);


// experience scroll k liye


  document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.2 });

    containers.forEach((container) => {
      observer.observe(container);
    });
  });

// my skills k liye
document.addEventListener("DOMContentLoaded", () => {
  const skillBoxes = document.querySelectorAll(".skill");
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        let progress = entry.target.querySelector(".progress");
        if (progress) {
          progress.style.width = progress.getAttribute("data-width");
        }
      }
    });
  }, { threshold: 0.3 });

  skillBoxes.forEach(box => observer.observe(box));
});



  // Custom Cursor Glow Effect

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

/* SMOOTH EASING MOVEMENT */
document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animate(){
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  requestAnimationFrame(animate);
}

animate();


// chat bot
function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBody = document.getElementById("chatBody");

  // User Message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  input.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";

    botMsg.textContent = getBotReply(message);
    chatBody.appendChild(botMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hire") || message.includes("work")) {
    return "Great! You can contact warisha via LinkedIn or Email. LinkedIn id Name is Warisha Turab. Email : warishaturab@gmail.com";
  }

  if (message.includes("price") || message.includes("cost")) {
    return "Pricing depends on project scope. Please share your requirements.";
  }

  if (message.includes("skills")) {
    return "Warisha specializes in Full Stack Development using React, Next.js, Node.js and UI/UX.";
  }

  return "Thanks for your message! Warisha will respond soon.";
}