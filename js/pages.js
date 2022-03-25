const SectionPageLoad = document.querySelector("#section-init"),
LinksPages = document.querySelectorAll(".menu-links a")


LinksPages.forEach(Element => {
    Element.addEventListener("click", (e) => {
        const DataPage = Element.getAttribute("data-page");
        const Page = "#";
   
        if(DataPage == 1){
            alert("oi")
            fetch(Page)
            .then( html => html.text())
                .then(pagina => {
                    SectionPageLoad.innerHTML = pagina
    
                })

        }
    
        e.preventDefault()
    })
})
