const win = document.querySelector(".winner")
const scorehuman = document.querySelector("#scorehuman")
const scoremachine = document.querySelector("#scoremachine")

let machinenumber = 0
let humannumber = 0

const humanchoice = (human) =>{
    machinechoice()
    play(human, machinechoice())
}

const machinechoice = () =>{
    const choices = ["paper", "rock", "scissor"]
    const randomnumber = Math.floor(Math.random() * 3)

    return choices[randomnumber]
}

const play = (human, machine) =>{

    if(human === machine){
        win.innerHTML = "Empate"
        win.style.color = "gray"
    } else if(
        (human === "rock" && machine === "scissor") ||
        (human === "paper" && machine === "rock") ||
        (human === "scissor" && machine === "paper")
    ){
        humannumber++
        scorehuman.innerHTML = humannumber

        win.innerHTML = "Vitória"
        win.style.color = "gold"
    }else{
        machinenumber++
        scoremachine.innerHTML = machinenumber

        win.innerHTML = "Derrota"
        win.style.color = "red"
    }
}