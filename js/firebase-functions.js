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

function requirePageNews(){
    const SectionNews = document.querySelector("#section-news");

    fetch("/pages/news.html")
    .then(page => page.text())
        .then(html => {
            SectionNews.innerHTML = html
            returnNews()
        })
}

secretaries()

function secretaries(){
    const Insert = db.ref("/schedule/doctors");

    
  const characters ='0123456789';
  
  function generateSessionUser(length) {
      let resultSession = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        resultSession += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return resultSession;
  }

    let Arr = {
       specialization: "Dermatologista",
       code: 14,
       days: {
            monday: {
                code_day: 1
            },
            tuesday: {
                code_day: 2
            },
            wednesday: {
                code_day: 3
            },
            thursday: {
                code_day: 4
            },
            friday: {
                code_day: 5
            }
       }
    }

    Insert.push()
}