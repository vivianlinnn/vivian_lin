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

const experience_container = document.querySelector('#experiences');
fetch('experiences.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to load JSON");
    return response.json();
  })
  .then(my_experiences => {
    my_experiences.forEach((exp, index) => {
      const div = document.createElement("div");
      div.className = "experience_instance";

      const img = document.createElement("img");
      img.src = `images/${exp.imgSrc}`;
      img.alt = exp.company;
      img.className = "logos";

      const desc = document.createElement("div");
      desc.className = "experience_descriptions";

      const h3 = document.createElement("h3");
      h3.textContent = exp.title;

      const companyP = document.createElement("p");
      companyP.className = "company_location";
      companyP.textContent = `${exp.company} · ${exp.location}`;

      const periodP = document.createElement("p");
      periodP.className = "time_period";
      periodP.textContent = exp.period;

      const ul = document.createElement("ul");
      ul.className = "role_descriptions";
      exp.roles.forEach(role => {
        const li = document.createElement("li");
        li.textContent = role;
        ul.appendChild(li);
      });

      desc.append(h3, companyP, periodP, ul);

      // alternate layout (image left/right)
      if (index % 2 === 0) {
        div.append(img, desc);
      } else {
        div.append(desc, img);
      }

      experience_container.appendChild(div);
    });
  })
  .catch(error => console.error(error));