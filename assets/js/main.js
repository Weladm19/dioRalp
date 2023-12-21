const state = {
    view : {
        squere: document.querySelectorAll('.squere'),
        enemy : document.querySelector('.enemy'),
        time : document.querySelector('#time-left'),
        score : document.querySelector('#score')
    },
    values: {
        hitPosition : 0,
        result: 0,
        currentTime: 60,
    },
    actions:{
        timeId: setInterval(randomSquere,1000),
        gameVelo : 1000,
        countDownTimeId: setInterval(countDown,1000),
    }
}


/*Vou colocar todas minhas funçoes*/
function countDown(){
    state.values.currentTime--
    state.view.time.textContent =  state.values.currentTime
    if(state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimeId)
        clearInterval(state.actions.timeId)
        alert(`Game Over! seu resultado foi: ${state.values.result}`)
    }
}

function randomSquere(){
    state.view.squere.forEach((e)=>{
        e.classList.remove('enemy')
    })

    let random = Math.floor(Math.random() * 9)
    let ranSquere = state.view.squere[random]
    ranSquere.classList.add("enemy")
    state.values.hitPosition = ranSquere.id
}

function addListener(){
    state.view.squere.forEach((e)=>{
        e.addEventListener("mousedown" , ()=>{
            if(e.id === state.values.hitPosition){
               state.values.result++
               state.view.score.textContent = state.values.result;
               state.values.hitPosition = null
               playSound()
            }
        })
    })
}

function playSound(){
    let som = new Audio("./assets/sound/hit.m4a")
    som.volume = 0.1
    som.play()
}
/*Aqui  adc a função de inicialização*/
function main(){
    addListener()
}


main();