const clock = document.getElementById("clock")

let interval
let isPlaying = false
let isRunning = false
let stopClickCount = 0
let time = 25 * 60

function updateClock() {
  let minutes = Math.floor(time / 60)
  let seconds = time % 60
  clock.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

document.getElementById("start").addEventListener("click", function () {
  if (!isRunning) {
    interval = setInterval(function () {
      if (time > 0) {
        time--
        updateClock()
      } else {
        clearInterval(interval)
        isRunning = false
      }
    }, 1000)
    isRunning = true
    stopClickCount = 0
  }
})

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(interval)
  isRunning = false
  stopClickCount++

  if (stopClickCount === 2) {
    time = 25 * 60
    updateClock()
    stopClickCount = 0
  }
})

document.getElementById("increase").addEventListener("click", function () {
  time += 5 * 60
  updateClock()
})

document.getElementById("decrease").addEventListener("click", function () {
  if (time > 5 * 60) {
    time -= 5 * 60
  } else {
    time = 0
  }
  updateClock()
})

updateClock()



const audios = [
  document.getElementById("floresta"),
  document.getElementById("chuva"),
  document.getElementById("cafeteria"),
  document.getElementById("lareira"),
]

function playAudio(audioIndex) {
  audios.forEach((audio, index) => {
    if (index === audioIndex) {
      audios[index].play()
    } else {
      audios[index].pause()
    }
  })
}

document
  .getElementById("btn-floresta")
  .addEventListener("click", () => playAudio(0))
document
  .getElementById("btn-chuva")
  .addEventListener("click", () => playAudio(1))
document
  .getElementById("btn-cafeteria")
  .addEventListener("click", () => playAudio(2))
document
  .getElementById("btn-lareira")
  .addEventListener("click", () => playAudio(3))
