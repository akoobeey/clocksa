const clock = {
    soniya: document.querySelector('.s'),
    daqiqa: document.querySelector('.m'),
    soat: document.querySelector('.h'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
}

const date = new Date()
let soniya = date.getSeconds() * (360 / 60)
let daqiqa = date.getMinutes() * (360 / 60)
let soat = date.getHours() * (360 / 12)

clock.soniya.style = `transform: rotate(${soniya}deg); transition: 1s linear`
clock.daqiqa.style = `transform: rotate(${daqiqa}deg); transition: 1s linear`
clock.soat.style = `transform: rotate(${soat}deg); transition: 1s linear`

let sDeg = (360 / 60)
let mDeg = (60 / 360)
let hDeg = (12 / 360)


function start() {
    const date = new Date()
    soniya += sDeg
    daqiqa += mDeg
    soat += hDeg

    clock.soniya.style = `transform: rotate(${soniya}deg); transition: 1s linear`
    clock.daqiqa.style = `transform: rotate(${daqiqa}deg); transition: 1s linear`
    clock.soat.style = `transform: rotate(${soat}deg); transition: 1s linear`

    clock.hours.innerHTML = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
    clock.minutes.innerHTML = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()

    setTimeout(() => {
        start()
    }, 1000);
}

start()

const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')

tabsItem.forEach(function (el, i) {
    el.addEventListener('click', function (e) {
        tabsItem.forEach(function (el, i) {
            el.classList.remove('active')
            tabsContentItem[i].classList.remove('active')
        })
        el.classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
})





let tSekund = document.querySelector('.stopwatch__seconds'),
tMinutes = document.querySelector('.stopwatch__minutes'),
tHours = document.querySelector('.stopwatch__hours'),
sWatch = document.querySelector('.stopwatch__btn'),
indecator = document.querySelector('.tabsLink__span')



sWatch.addEventListener('click', function () {
    
    if (sWatch.innerHTML === 'start') {
        sWatch.innerHTML = 'stop';
        indecator.classList.add('active')
       
    } else if (sWatch.innerHTML === 'stop') {
        sWatch.innerHTML = 'clear';
        indecator.classList.remove('active')
        indecator.classList.add('active_clear')
      
    } else if (sWatch.innerHTML === 'clear') {
        sWatch.innerHTML = 'start';
        tSekund.innerHTML = 0;
        tMinutes.innerHTML = 0;
        tHours.innerHTML = 0;
        indecator.classList.remove('active_clear')
    }

})

function watchtimer() {
   if (  sWatch.innerHTML == 'stop') {
    tSekund.innerHTML++
    if ( tSekund.innerHTML >= 59) {
        tSekund.innerHTML = 0
        tMinutes.innerHTML++
    }
    if (tMinutes.innerHTML >= 59) {
        tMinutes.innerHTML = 0
        tHours.innerHTML++
    }
   }else if ( sWatch.innerHTML == 'start') {
    tSekund.innerHTML = 0;
    tMinutes.innerHTML = 0;
    tHours.innerHTML = 0;
   }
   setTimeout(() => { watchtimer() }, 1000);
   
  
}


watchtimer()