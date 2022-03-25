'use strict'

initTooltips()

function initTooltips(){
    const Tooltips = document.querySelectorAll(".tooltip");

    Tooltips.forEach((element) => {
        const TooltipText = element.getAttribute("data-tooltip-text"),
        ElementAfter = element.parentNode;

        ElementAfter.addEventListener("mouseenter", (e) =>{
            TooltipInit(element, TooltipText)
        });

        ElementAfter.addEventListener("mouseleave", (e) =>{
            TooltipHide(element)
        });
    })

    function TooltipInit(element, text){

        const ElementChildren = element.parentNode,
        ElementNext = element.nextElementSibling;

        if(ElementNext == null){
            const TooltipHTML = `
                <div class="tooltip tooltip-show">
                    ${text}
                </div>
            `

            ElementChildren.insertAdjacentHTML("beforeend", TooltipHTML)
        }else
        {
            if(ElementNext.classList.contains("tooltip-hidden")){
                ElementNext.classList.remove("tooltip-hidden")
                ElementNext.classList.add("tooltip-show")
            }
        }
    }

    function TooltipHide(element){
        const NextElement = element.nextElementSibling;

        if(NextElement.classList.contains("tooltip-show")){
            NextElement.classList.remove("tooltip-show")
            NextElement.classList.add("tooltip-hidden")
        }
    }
}