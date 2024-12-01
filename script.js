const screen = document.getElementById("screen")
const memoryDisplay = document.getElementById("memoryDisplay")

let memory = 0;

const addToScreen = (input) => {
    if(screen.value === '0' || screen.value === 'Error') {
        screen.value = ''
    }

    if (input === '.'){
        if (!screen.value.includes('.')) {
            screen.value += '.'
        }
    }else{
        screen.value += input
    }
}

const clearScreen = () => {
    screen.value = ''
}

const count = () => {
    try {
        if (screen.value === "Error") {
            screen.value = ''
        }else{
            screen.value = eval(screen.value)
        }
        if (screen.value === 'Infinity' || screen.value === 'undefined') {
            screen.value = 'Error'
        }
    } catch (err) {
        screen.value = 'Error'
    }
}

const changeMemory = (input) => {
    if(input === '+'){
        memory +=Number(eval(screen.value))
        memoryDisplay.innerText = memory
    }else if(input === '-'){
        memory -= Number(eval(screen.value))
        memoryDisplay.innerText = memory
    }

    if (memory > 0 || memory < 0) {
        memoryDisplay.style.display = 'block'
    }else{
        memoryDisplay.style.display = 'none'
    }
}

const clearMemory = () => {
    memory = 0;
    memoryDisplay.style.display = 'none'
}

const putMemoryOnScreen = () => {
    screen.value += memory;
}
