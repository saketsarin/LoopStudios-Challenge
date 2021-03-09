function menuSlide() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        menu.classList.toggle("menuActive");
        
        //Animate Links
        menuLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `menuLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

menuSlide();