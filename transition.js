window.addEventListener("load", () => {
    const flowers = document.querySelectorAll(".flower");
    
    flowers.forEach((flower, i) => {
      // Get final position from CSS
      const rect = flower.getBoundingClientRect(); // final position
      const startX = window.innerWidth * 0.3;      // starting X (30% of screen)
      const startY = window.innerHeight * 0.7;     // starting Y (70% of screen)
  
      const deltaX = rect.left - startX;
      const deltaY = rect.top - startY;
  
      // Initially position at start
      flower.style.transform = `translate(${startX - rect.left}px, ${startY - rect.top}px)`;
      flower.style.opacity = 0;
  
      // Animate to final position
      setTimeout(() => {
        flower.style.transition = "transform 1.5s ease, opacity 1.5s ease";
        flower.style.transform = `translate(0, 0)`; // final pos (relative to CSS top/left)
        flower.style.opacity = 1;
      }, i * 400); // staggered
    });

    console.log('fsjhk')
  });