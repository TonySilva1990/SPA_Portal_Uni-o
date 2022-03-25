/*Bar content*/
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


sidebar.addEventListener("mouseleave", HiddenSideBar ,false)

sidebar.addEventListener("mouseenter", ShowSideBar, false)

//TIME SIDEBAR TOGGLE CLASS
const TimeSideBar = 100;

function HiddenSideBar(){
    sidebar.classList.toggle("close");
}

function ShowSideBar(){
   setTimeout(() => {
    sidebar.classList.toggle("close");
   }, TimeSideBar)
}

toggle.addEventListener("click", () => {
    setTimeout(() => {
        sidebar.classList.toggle("close");
    }, TimeSideBar)
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});
