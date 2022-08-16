let artistRight = document.querySelector(".ri-arrow-right-line")
let artistleft = document.querySelector(".ri-arrow-left-line")
let imgesPoplar = document.querySelector(".imgesPoplar")
// music.play
artistRight.addEventListener("click", function (e) {
    imgesPoplar.scrollLeft += 300
})
artistleft.addEventListener("click", function (e) {
    imgesPoplar.scrollLeft -= 300
})


let song = [
    {
        id: 1,
        names: "<h5>Kont Fe Baly<br><p> Amr Diab</p></h5 >"

    }
    ,
    {
        id: 2,
        names: "<h5>Albak Keber<br><p> Amal Maher</p></h5 >"

    }
    ,
    {
        id: 3,
        names: "<h5>Aashaang<br><p> Tamer Hosny</p></h5 >"

    }
    ,
    {
        id: 4,
        names: "<h5>Malaksh<br><p>Sherine</p></h5 >"

    }
    ,
    {
        id: 5,
        names: "<h5>Ra’sa.Slow<br><p>Mahmoud El Esseily</p></h5 >"
    }
    ,
    {
        id: 6,
    }
]

const music = new Audio("music/44.mp3")

Array.from(document.getElementsByClassName("control")).forEach((e, i) => {
    console.log(i)

})

let play = document.querySelector(".playAmy")
let pause = document.querySelector(".sameh")
let on = document.querySelector(".sameh2")
let move = document.querySelector(".live")
play.addEventListener('click', function (e) {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        pause.classList.remove("displayNone")
        on.classList.add("displayNone")
        move.classList.add("move")
    } else {
        music.pause()
        pause.classList.add("displayNone")
        on.classList.remove("displayNone")
        move.classList.remove("move")

    }
})
let index = 0
let control = document.querySelectorAll(".control")
let plaYNow = document.querySelectorAll(".playMusic .i")
let plaYNowI = document.querySelectorAll(".playMusic .i i")
let masterImg = document.querySelector(".master .img img")
let namesH5 = document.querySelector(".master h5")
plaYNow.forEach(function (s) {
    s.addEventListener("click", function (e) {


        if (e.target.className === "ri-play-line") {
            e.target.classList = "ri-pause-line"
        } else {
            e.target.classList = "ri-play-line"
        }
        index = e.target.id
        control.forEach(function (e) {
            e.classList.remove("active")
        })
        e.target.parentElement.parentElement.classList.add("active")
        music.src = `music/${e.target.id}.mp3`
        masterImg.src = `img/${e.target.id}.jpg`
        music.play()
        let songName = song.filter(function (dd) {
            return dd.id == index
        })
        songName.forEach(eess => {
            let { names } = eess
            namesH5.innerHTML = names
        })
        if (music.paused || music.currentTime <= 0) {
            music.play()
            pause.classList.remove("displayNone")
            on.classList.add("displayNone")
            move.classList.add("move")
        } else {
            music.pause()
            pause.classList.add("displayNone")
            on.classList.remove("displayNone")
            move.classList.remove("move")

        }
    })

})
let time = document.querySelector(".time")
let timeEnd = document.querySelector(".time-End")
let parMove = document.querySelector(".parMove")
let movePar = document.querySelector(".movePar")
let seek = document.getElementById("seek")
music.addEventListener("timeupdate", function (e) {
    let secFuc = music.currentTime
    let minfuc = music.duration
    let min = Math.floor(minfuc / 60)
    let sec = Math.floor(minfuc % 60)

    let min1 = Math.floor(secFuc / 60)
    let sec2 = Math.floor(secFuc % 60)

    if (sec < 10) {
        sec = `0${sec}`
    }
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    time.innerHTML = `${min}: ${sec}`
    timeEnd.innerHTML = `${min1}: ${sec2}`

    let perd = parseInt((secFuc / minfuc) * 100)
    seek.value = perd
    let seeks = seek.value
    parMove.style.width = `${seeks}%`
    movePar.style.left = `${seeks}%`
})


seek.addEventListener("change", () => {
    let seeks = seek.value
    parMove.style.width = `${seeks}%`
    movePar.style.left = `${seeks}%`
})

let back = document.querySelector(".back")
back.addEventListener("click",function(){
    index -= 1
    music.src = `music/${index}.mp3`
    console.log(music.src)
    music.play()
    masterImg.src = `img/${index}.jpg`
    let songName = song.filter(function (dd) {
        return dd.id == index
    })
    songName.forEach(eess => {
        let { names } = eess
        namesH5.innerHTML = names
    })
    
})