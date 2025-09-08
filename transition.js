window.addEventListener("load", () => {
    const flowers = document.querySelectorAll(".flower");
    const photo = document.getElementById("photo");
    const photo_frame = document.getElementById("frame");
    const ribbon = document.getElementById("ribbon");
    const links = document.querySelectorAll(".external_links");
  
    // Wait 1 second before starting any animation
    setTimeout(() => {
      // Show ribbon
      ribbon.classList.add("show");
  
      // Animate flowers
      flowers.forEach((flower, i) => {
        const rect = flower.getBoundingClientRect(); // final position of this flower
        let startX, startY;
  
        if (i === 0) {
          // Top flower starts at middle flower's final position
          startX = window.innerWidth * 0.35;
          startY = window.innerHeight * 0.87;
        } else if (i === 1) {
          // Middle flower starts at bottom flower's final position
          const bottomRect = flowers[2].getBoundingClientRect();
          startX = bottomRect.left;
          startY = bottomRect.top;
        } else {
          // Bottom flower starts near the ground
          startX = window.innerWidth * 0.35;
          startY = window.innerHeight * 0.87;
        }
  
        // Initially position at start
        flower.style.transform = `translate(${startX - rect.left}px, ${startY - rect.top}px)`;
        flower.style.opacity = 0;
  
        // Animate to final position
        setTimeout(() => {
          flower.style.transition = "transform 2s ease, opacity 1s ease";
          flower.style.transform = `translate(0, 0)`; // final pos
          flower.style.opacity = 1;
        }, i * 900); // staggered
      });
  
      // Fade in photo after flowers finish
      setTimeout(() => {
        photo.classList.add("show");
      }, flowers.length * 900 + 1000);
  
      // Fade in frame after photo
      setTimeout(() => {
        photo_frame.classList.add("show");
      }, flowers.length * 900 + 1800);
  
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
          }, i * 400); // stagger each link
        });
      }, flowers.length * 900 + 2500); // start after frame
    }, 500); // wait 1s before anything happens
  });
  