// --->>>   Opne  and  Close  Navbar
let open = document.querySelector(".bars")
let close = document.querySelector(".xmark")
let navbar = document.querySelector(".navbar")
let covar = document.querySelector(".cover")

open.onclick =function() {
    navbar.classList.add("activee")
    covar.style.display = "block"
}
close.onclick =function() {
    navbar.classList.remove("activee")
    covar.style.display = "none"
}


// --->>>  Active Link
let allLinks = document.querySelectorAll(".navbar li a")
allLinks.forEach( (ele) => {
    ele.addEventListener( "click" , function(){
        allLinks.forEach( (lia) => {
            lia.classList.remove("active")
            this.classList.add("active")
        })
    })
})


//  --->>>>  Scroll Btn  :---
let  scrollBtn = document.querySelector(".scroll")

window.onscroll = function ()  {
    if (  this.scrollY  >=  300  ) {
        scrollBtn.classList.add("show")
    }  else {
        scrollBtn.classList.remove("show")
    }
}

scrollBtn.onclick =function( ) {
    window.scrollTo({
        top :0 ,
        behavior : "smooth" ,
    })
}


















