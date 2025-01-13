var searchInp=document.getElementById("search");
var icon=document.getElementById("icon_search");
var down=document.getElementsByClassName("down-arrow")[0];
var gallery=document.getElementsByClassName("items");
var products_img=document.getElementsByClassName("product-list");
var saletxt=document.getElementsByClassName("product-sale-text")[0];
var nabar=document.getElementsByClassName("nav-bar")[0];
var headertext=document.getElementsByClassName("headertext")[0];


down.addEventListener("click", function() {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    });
});
var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
    nabar.style.display="none";
 
    setTimeout(function () {
        preloader.style.transition = "opacity 0.3s ease";
        preloader.style.opacity = 0;
        nabar.style.display="block";  
        headertext.style.animation="tracking-in-contract-bck 1.2s ease-out both"; 

        
        setTimeout(function () {
            preloader.style.display = "none";

        }, 400)
    }, 1000)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}


window.onscroll = function () {

if(scrollY>1852)
    {
        saletxt.style.animation="text-flicker-out-glow 2.5s linear";
        saletxt.style.opacity=1;
    for(var i=0;i < products_img.length;i++){
        products_img[0].style.animation="fadeInUp 1.5s 0.2s ease forwards";
        products_img[1].style.animation="fadeInUp 1.5s 0.4s ease forwards";
        products_img[2].style.animation="fadeInUp 1.5s 0.8s ease forwards";
       
        

    }
   

}

}

