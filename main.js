// Dark & Light Mode //
let darkmode = document.querySelector("#darkmode");
let bodyEl = document.querySelector("#section");
let DARKMODE = false;
darkmode.addEventListener('change' , (event) => {
    DARKMODE = event.target.checked;
    if (DARKMODE) {
        bodyEl.classList.add("dark");
    }
    else {
        bodyEl.classList.remove("dark")
    }
});
// Calendar //
const currentDate = document.querySelector(".current-date");
const daysTag = document.getElementById("days");
const prevnextIcon = document.querySelectorAll(".calendar-icons span");

let date = new Date(),

currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const months = ["January" , "February" , "March" , "April" , "May" , "June"
, "July" ,"August" , "September" , "October" , "November" , "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currentYear , currentMonth , 1).getDay(),
    lastDateofMonth = new Date(currentYear , currentMonth + 1 , 0).getDate(),
    lastDayofMonth = new Date(currentYear , currentMonth , lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currentYear , currentMonth , 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
            && currentYear === new Date().getFullYear() ? "activeee" : "";
        liTag += `<li class="lid ${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevnextIcon.forEach(icon => {
    icon.addEventListener("click" , () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

        if (currentMonth < 0 || currentMonth > 11 ) {
            date = new Date(currentYear , currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        }
        else {
            date = new Date();
        }
        renderCalendar();
    });
});

const caleNdar = document.querySelector(".calender-text h6");
caleNdar.innerText = `${months[currentMonth]} ${currentYear}`;