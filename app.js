
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle('open');
    links.forEach(link=>
        link.classList.toggle('fade'));
});

// const logo =document.querySelectorAll('#circle path');
// const logo =document.querySelector('#strips');

//     for(let i=0; i<logo.length; i++){
//         console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);

//     }