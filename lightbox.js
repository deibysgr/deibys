const imagenes = document.querySelectorAll(".img-galeria");
const imagenlist= document.querySelector(".imagen-paola");
const contenedor= document.querySelector(".imagen-light");
const menu1= document.querySelector(".menu-navegacion");



console.log(imagenes)
console.log(imagenlist)
console.log(contenedor)

 imagenes.forEach(imagen=>{
     imagen.addEventListener("click",()=>{
        aparecer( imagen.getAttribute("src"))
     } )
 })




 contenedor.addEventListener("click", (e)=>{

if(e.target !== imagenlist){
    contenedor.classList.toggle("show")
     imagenlist.classList.toggle("showimagen-paola")
    menu1.style.opacity = "1"
}

 })

 const aparecer= (imagen)=>{
     imagenlist.src=imagen;
     contenedor.classList.toggle("show")
     
     imagenlist.classList.toggle("showimagen-paola")

     menu1.style.opacity = "0"
}
 
















