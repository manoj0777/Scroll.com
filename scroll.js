const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const toggleBtn=document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links =document.querySelector(".links");
toggleBtn.addEventListener("click", function()
{
    // linksContainer.classList.toggle("show-links")
    const containerHeight=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    
    if(containerHeight===0)
    {
        linksContainer.style.height=`${linksHeight}px`;
    }
    else{
        linksContainer.style.height=0;
    }
});
const navBar=document.getElementById("nav");
const topLink=document.querySelector(".top-link");

window.addEventListener("scroll",function(){
    const scrollHeight=(window.pageYOffset);
    const navHeight=navBar.getBoundingClientRect().height;
    if(scrollHeight>navHeight)
    {
    navBar.classList.add("fixed-nav");
    }
    else {
        navBar.classList.remove("fixed-nav");
    }
    if(scrollHeight>500)
    {
        topLink.classList.add("show-links");
    }
    else{
        topLink.classList.remove("show-links");
    }
});


const scrollLinks= document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e)
    {
        e.preventDefault();
        const id =e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position=element.offsetTop;
        
        window.scrollTo(
            {
                left:0,
                top:position,
            }

        );
        linksContainer.style.height=0;
    })
})