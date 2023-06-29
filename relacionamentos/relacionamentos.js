document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('funcoes').addEventListener('click', function () {
        let drawValue = Math.floor(Math.random() * 47)
        document.getElementById('funcoes').src = `./cards/${drawValue}.png`

    })

    addEventListener('click', function () {
        allDraws = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    })
})

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 