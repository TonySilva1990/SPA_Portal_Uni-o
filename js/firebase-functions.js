const db = firebase.database();

function returnNews(){
    const News = db.ref("/news/"),
    NewsContainer = document.querySelector("#news-container");

    News.on("value", (data) => {
        const Results = data.val(),
        Keys = Object.keys(Results);

        Keys.forEach(key =>{
           const Title = Results[key].title,
           Image = Results[key].image;
           
           const DivNews = document.createElement("div"),
           DivImage = document.createElement("div"),
           DivInner = document.createElement("div"),
           DivAfter = document.createElement("div"),    
           ImageTag = document.createElement("img"),
           DivTitle = document.createElement("div");

           DivNews.classList.add("item-news")
           DivImage.classList.add("item-image")
           DivInner.classList.add("item-inner")
           DivTitle.classList.add("item-title")
           DivAfter.classList.add("item-after")
           ImageTag.classList.add("image-news")

           DivAfter.innerText = "12/04/2022"
           DivTitle.innerText = Title
           ImageTag.src = Image

           DivImage.appendChild(ImageTag)
           DivInner.appendChild(DivTitle)
           DivInner.appendChild(DivAfter)
           DivNews.appendChild(DivImage)
           DivNews.appendChild(DivInner)

           NewsContainer.appendChild(DivNews)
       
        })
    })
}