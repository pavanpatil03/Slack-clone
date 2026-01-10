let btn = document.getElementById("salesButton");

btn.addEventListener("click", () => {
  window.location.href = "request.html";
});

let btn2 = document.querySelectorAll("#tempButton, #startButton");

btn2.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "getStarted.html";
  });
});

const menuIcon = document.querySelector("#icon");
const navLinks = document.querySelector(".textHeader");

const mobileMenu = document.createElement("div");
mobileMenu.classList.add("mobileMenu");
mobileMenu.innerHTML = navLinks.innerHTML;
document.body.appendChild(mobileMenu);

menuIcon.addEventListener("click", (evt) => {
  console.log("hehy");
  evt.stopPropagation();
  mobileMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});

const revealItems = document.querySelectorAll(
  ".points2, .points3, .mainVideo, .iconContainer, .data1"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((el) => revealObserver.observe(el));
