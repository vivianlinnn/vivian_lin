window.addEventListener("load", () => {
    const flowers = document.querySelectorAll(".flower");
    const photo = document.getElementById("photo");
    const photo_frame = document.getElementById("frame");
    const ribbon = document.getElementById("ribbon");
    const links = document.querySelectorAll(".external_links");
  
    // Wait 1 second before starting any animation
    setTimeout(() => {
  
      // Animate external links with bounce
      setTimeout(() => {
        links.forEach((link, i) => {
          setTimeout(() => {
            link.classList.add("bounce-in");
            // After bounce ends, replace with settled class
            setTimeout(() => {
              link.classList.remove("bounce-in");
              link.classList.add("settled");
            }, 200); // match bounce duration
          }, i * 300); // stagger each link
        });
      }, 0); // start after frame
    }, 300); // wait 1s before anything happens
  });
  
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const target = link.getAttribute("href");
  
      // Check if it's pointing to Home
      if (target.includes("index.html")) {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
        // If already on index.html → block reload
        if (currentPage === "index.html") {
          e.preventDefault();
          return;
        }
      }
  
      // Update "current" highlight
      navLinks.forEach(l => l.classList.remove("current"));
      link.classList.add("current");
    });
});


// takes user to external links

// linkedin
const linkedin = document.querySelector('#linkedin');
linkedin.addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/vivian-lin-131028250/');
});

// github
const github = document.querySelector('#github');
github.addEventListener('click', () => {
  window.open('https://github.com/vivianlinnn');
});

// my resume
const resume = document.querySelector('#resume');
resume.addEventListener('click', () => {
  window.open('../Vivian_Lin_Resume.pdf');
});
