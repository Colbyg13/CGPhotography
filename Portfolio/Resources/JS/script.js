const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');
    //toggle Nav
    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
                body.style.overflowY = 'auto';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`;
                body.style.overflowY = 'hidden';
            }
          
        });

        //burger animation
        burger.classList.toggle('toggle');
    });



    
}

navSlide();
/*
const aboutMe = document.querySelector("#portrait");
var image = document.createElement("img");
var imageParent = aboutMe;
image.id = "testImage";
image.className = "image";
image.src = ""
image.classList.add("")
imageParent.appendChild(image);

console.log(aboutMe);
//how to add image programatically

*/

