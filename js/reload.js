let load = document.getElementById("preloader")
let section = document.querySelector("section")
document.addEventListener("DOMContentLoaded",()=>{
    load.classList.add("off")
    section.classList.add("section")
})

let toggle_close = document.querySelector(".button-toggle")
 
let toggle_close_child = document.querySelector(".button-toggle-items")

let sidebar = document.querySelector(".menu-sidebar")

toggle_close.addEventListener("click",()=>{
    toggle_close_child.classList.toggle("button-toggle-transform")
    sidebar.classList.toggle("menu-sidebar-show")
})
