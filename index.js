
function card(title , time , prev , color){
`
    
        <div class="card">
          <div class="card_top ${color}"></div>
          <div class="card_bottom ${color}">
              <div class="text">
                <div class="title_report">
                  <span class="title">${title}</span>
                  <img src="images/icon-ellipsis.svg" alt="">
                </div>
                <span class="time">${time}hrs</span>
                <span class="last">Last Week - ${prev}h</span>
              </div>
          </div>
        </div>
    `

}

let title = document.getElementById('title')
let weekly = document.getElementById('weekly')
let cards = document.getElementById('cards')
let daily = document.getElementById('daily')
let monthly = document.getElementById('monthly')
const weeklyMode = () => {
    cards.innerHTML = ''
    fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                cards.innerHTML += 
                    `<div class="card">
                        <div class="card_top ${data[i].color}"></div>
                        <div class="card_bottom ${data[i].color}">
                            <div class="text">
                                <div class="title_report">
                                <span class="title" id="title">${data[i].title}</span>
                                <img src="images/icon-ellipsis.svg" alt="">
                                </div>
                                <div class="txt_details">
                                <span class="time">${data[i].timeframes.weekly.current}hrs</span>
                                <span class="last">Last Week - ${data[i].timeframes.weekly.previous}hrs</span>
                            </div>
                        </div>
                    </div>
                    `
            }
        })
}


const dailyMode = () => {
    cards.innerHTML = ''
    fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                cards.innerHTML += 
                    `
                    <div class="card">
                        <div class="card_top ${data[i].color}"></div>
                        <div class="card_bottom ${data[i].color}">
                            <div class="text">
                                <div class="title_report">
                                    <span class="title" id="title">${data[i].title}</span>
                                    <img src="images/icon-ellipsis.svg" alt="">
                                </div>
                                <div class="txt_details">
                                    <span class="time">${data[i].timeframes.daily.current}hrs</span>
                                    <span class="last">Last Week - ${data[i].timeframes.daily.previous}hrs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
            }
        })
}


const monthlyMode = () => {
    cards.innerHTML = ''
    fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                cards.innerHTML += 
                `
                <div class="card">
                    <div class="card_top ${data[i].color}"></div>
                    <div class="card_bottom ${data[i].color}">
                        <div class="text">
                            <div class="title_report">
                                <span class="title" id="title">${data[i].title}</span>
                                <img src="images/icon-ellipsis.svg" alt="">
                            </div>
                            <div class="txt_details">
                                <span class="time">${data[i].timeframes.monthly.current}hrs</span>
                                <span class="last">Last Week - ${data[i].timeframes.monthly.previous}hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
        }   
    })
}

weekly.addEventListener('click', weeklyMode)    
daily.addEventListener('click', dailyMode)
monthly.addEventListener('click', monthlyMode)


let links = document.querySelectorAll(".bottom_card ul li span")

links.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        links.forEach((ele) => {
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})

window.onload = () => {
    weeklyMode()
}
