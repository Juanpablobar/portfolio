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

let lang = document.getElementById("language")
let lang_change = document.getElementById("change-lang")
let lang_close = document.getElementById("lang-close")

lang.addEventListener("click",()=>{
    lang.classList.add("language-out")
    setTimeout(()=>{
        lang_change.classList.add("change-lang-show")
    },300)
})

lang_close.addEventListener("click",()=>{
    lang_change.classList.remove("change-lang-show")
    setTimeout(()=>{
        lang.classList.remove("language-out")
    },300)
})


