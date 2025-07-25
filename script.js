function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}


const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
  link.style.backgroundColor = "#59b0cf"; 
  link.style.color = "#000000";              
  link.style.borderRadius = "6px";
    
});

link.addEventListener("mouseleave", () => {
  link.style.backgroundColor = "";
  link.style.color = "";           
});
});

document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".course-title");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const details = this.nextElementSibling;
      details.style.display =
      details.style.display === "block" ? "none" : "block";
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const enrollButtons = document.querySelectorAll(".enroll-btn");

  enrollButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "#a73232"; 
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "#c84545"; 
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const courseTitles = document.querySelectorAll(".course-title");

  courseTitles.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "#ddd"; 
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = ""; 
    });
  });
});

