"use strict";

// tab 

const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tabcontent"),
    tabHeaderItem = document.querySelector(".tabheader__items");

  

function hideContent () {

  tabContents.forEach((item) => {
    item.style.display = "none"
  })

  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active")
  })

}

function showContent (i) {
  tabs[i].classList.add("tabheader__item_active");
  tabContents[i].style.display = "block";
}

hideContent()
showContent(0)


tabHeaderItem.addEventListener("click", (event) => {
  const target = event.target;

  if(target && target.classList.contains("tabheader__item")) {
    tabs.forEach((item, idx) => {
      if(item == target) {
        hideContent()
        showContent(idx)
      }
    })
    // console.log(target);
  }

})


  // Timer 

  const deadline = "2024.10.24";

  function getremainingTime (endtime) {

    const total = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor((total / (1000 * 60 * 60 * 24))),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((total / 1000 / 60) % 60),
      seconds = Math.floor((total / 1000) % 60);

      return { total, days, hours, minutes, seconds }

  }

  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }


  function setClock (selector, endtime) {

    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");

      const timeInterval = setInterval(updateClock, 1000);

      updateClock()

      function updateClock() {
        const t = getremainingTime(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.total <= 0) {
          clearInterval(setInterval)
        }

      }




  }

  setClock(".timer", deadline);