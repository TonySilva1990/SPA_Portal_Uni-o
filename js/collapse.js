const CollapseButton = document.querySelector(".toggle-collapse-menu"),
CollapseMenu = document.querySelector(".collapse");

CollapseButton.addEventListener("click", (e) => {
    
    if(CollapseMenu.classList.contains("hidden")){
        CollapseMenu.classList.remove("hidden")
        CollapseMenu.classList.add("scale-in-top")
    }else{
        CollapseMenu.classList.add("hidden")
        CollapseMenu.classList.remove("scale-in-top")
    }

})