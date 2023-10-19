const body = document.querySelector(".container");
const dringk1 = document.querySelector(".drink1");
const dringk2 = document.querySelector(".drink2");
const dringk3 = document.querySelector(".drink3");

const pepsi1 = document.querySelector(".pepsi1");
const pepsi2 = document.querySelector(".pepsi2");
const pepsi3 = document.querySelector(".pepsi3");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

pepsi2.addEventListener("click",()=>{
    dringk2.style.display ="block";
    dringk1.style.display = "none";
    dringk3.style.display = "none";
    body.style.backgroundColor = "red";
    gsap.from(".pepsi2",{
        y:-200
    })
    gsap.from(".drink2",{
        y:-10,
        duration:1.5
    })
   
})

pepsi3.addEventListener("click",()=>{
    dringk3.style.display ="block";
    dringk2.style.display = "none";
    dringk1.style.display = "none";
    body.style.backgroundColor = "black";
    gsap.from(".pepsi3 ",{
        y:-200
    })
    gsap.from(".drink3",{
        y:-10,
        duration:1.5
    })
   
})

pepsi1.addEventListener("click",()=>{
    dringk1.style.display = "block"
    dringk2.style.display = "none";
    dringk3.style.display ="none";
    body.style.backgroundColor = "#0261BF";
    gsap.from(".pepsi1",{
        y:-200
    })
    gsap.from(".drink1",{
        y:-10,
        duration:1.5
    })
   

})


