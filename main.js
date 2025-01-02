var searchInp=document.getElementById("search");
var icon=document.getElementById("icon_search");
searchInp.addEventListener("mouseover",function(){

    searchInp.style.color="white";
  searchInp.style.borderBottom="1px solid white";
    searchInp.style.backgroundColor="black";
    icon.style.color="white";
})
searchInp.addEventListener("mouseout",function(){
    searchInp.style.color=" #969090";
  searchInp.style.borderBottom="1px solid #969090";
  searchInp.style.backgroundColor="#191919";
  icon.style.color=" #969090";


    
})  