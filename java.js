const sorra= document.querySelector(".sorra");
const menu= document.querySelector(".menu-navegacion");


console.log(menu);
console.log(sorra);



sorra.addEventListener("click",()=> {
    menu.classList.toggle("spread")
}) ;

window.addEventListener("click",e=>{
    if(menu.classList.contains("spread") && e.target !=menu && e.target!= sorra ){
        menu.classList.toggle("spread")
    }


})

