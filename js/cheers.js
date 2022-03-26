function Cheers(){
    const ScheduleButtons = document.querySelectorAll(".button-page-cheers"),
    SectionPages = document.querySelector("#section-pages"),
    PageRequire = "/pages/cheers/";

    ScheduleButtons.forEach(element => {
        element.addEventListener("click", (e) => {
            const DataPage = element.getAttribute("data-page"),
            DataPageUrl = element.getAttribute("data-url-page");

            const ThisPage = PageRequire + DataPageUrl

            requireCheerPage(ThisPage, DataPage)

        })
    })

    function requireCheerPage(Page, Code){
        fetch(Page)
        .then(page => page.text())
            .then(html => {
                SectionPages.innerHTML = html

                if(Code == 12){
                    requireSpecializations()
                }
            })
    }
}

function requireSpecializations(){
    const Specializations = db.ref("/schedule/doctors"),
    ContainerSpecializations = document.querySelector("#list-specializations")

    Specializations.on("value", (data) => {
        const Data = data.val(),
        Keys = Object.keys(Data);

        ContainerSpecializations.innerHTML = ""

        Keys.forEach(key => {
            const Specialization = Data[key].specialization,
            Description = Data[key].description,
            Code = Data[key].code;

            const li = document.createElement("li"),
            a = document.createElement("button"),
            b = document.createElement("b"),
            p = document.createElement("p"),
            span = document.createElement("span");

            a.setAttribute("onclick", `OnL('${Specialization}', '${Code}')`)
            b.innerText = Specialization;
            span.innerText = Description;

            p.appendChild(span)
            a.appendChild(b)
            a.appendChild(p)
            li.appendChild(a)

            ContainerSpecializations.appendChild(li)
        })
    })
}

function OnL(Specialization, Code){

    const Body = document.querySelector("body")

    const Html = `
        <div class="dialog">
            <div class="dialog-header">
                <b>${Specialization}</b>
                <p>Escolha a data e horário</p>
            </div>
            <div class="dialog-body">
                <div id="container-days" class="container-days"></div>
            </div>
        </div>
    `   

    Body.classList.add("dialog-backdrop")
    Body.insertAdjacentHTML("afterend", Html)

    requireDatesCheers()

    function requireDatesCheers(){
        const Cheers = db.ref("/schedule/doctors/").orderByChild("code").equalTo(Number(Code)),
        ContainerDats = document.querySelector("#container-days")

        Cheers.once("value", (data) => {
            if(data.exists()){
                const Data = data.val(),
                Keys = Object.keys(Data);

                Keys.forEach(key => {
                   const Days = Data[key].days,
                   KeysDays = Object.keys(Days);

                   KeysDays.forEach(KeyDay => {
                     const NameDay = Days[KeyDay].day;

                     const P = document.createElement("p");

                     P.innerText = NameDay
                     
                     ContainerDats.appendChild(P)
                   })
                })
            }else{

            }
        })
    }
}