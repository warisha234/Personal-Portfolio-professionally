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



