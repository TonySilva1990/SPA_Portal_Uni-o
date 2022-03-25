'use strict'

const SectionPages = document.querySelector("#section-pages"),
ButtonsPages = document.querySelectorAll(".button-page")

window.onload = () => {
    const DataPage = SectionPages.getAttribute("data-page"),
    DataUrlPage = SectionPages.getAttribute("data-url-page"),
    PageRequire = "/pages/";

    if(DataPage == 1){
       const UrlPage = PageRequire + DataUrlPage;
       FetchPages(UrlPage, DataPage)

       //RETORNA NOTÍCIAS
       requirePageNews()
    }

    //REQUIRE PAGES CLICK BUTTON
    ButtonsPages.forEach((element) => {
        element.addEventListener("click", (e) => {

           const ThisDataUrl = element.getAttribute("data-url-page"),
           ThisDataPage = element.getAttribute("data-page");

            const UrlPage = PageRequire + ThisDataUrl
            FetchPages(UrlPage, ThisDataPage)

            e.preventDefault()
        })
    })

}

//FUNCTION REQUIRE PAGES
function FetchPages(PageUrl, PageData){
    fetch(PageUrl)
    .then(page => page.text())
        .then(html => {

            const ArrayNameButtons = [
                {
                    text: 'Home',
                    key: 1
                },
                {
                    text: 'News',
                    key: 2
                },
                {
                    text: 'Covid',
                    key: 3
                },
                {
                    text: 'Sic',
                    key: 4
                }
            ];

            if(PageData == 3){
                
            }else
            {
                SectionPages.innerHTML = html;
            }

            if(PageData == 1){
                    new Swiper(".swiper-home", {
                        parallax: true,
                        speed: 600,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        on: {
                            init: function(){
                                const SwipersBullets = document.querySelectorAll(".swiper-pagination-bullet");
                                let CountSwiper = 0;
                                SwipersBullets.forEach((element) => {
                                    CountSwiper++
                                    element.setAttribute("data-count-pagination", CountSwiper)

                                    ArrayNameButtons.forEach(value =>{
                                        if(value.key == element.getAttribute("data-count-pagination")){
                                            element.innerText = value.text
                                        }
                                    })

                                })
                            }
                        }
                });
            }
        })
}