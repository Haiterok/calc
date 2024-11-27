const screen = document.getElementById("screen")

const addToScreen = (input) => {
    if(screen.value === '0' || screen.value === 'Error') {
        screen.value = ''
    }
    screen.value += input
}

const addDot = () => {
    if (!screen.value.includes('.')) {
        screen.value += '.'
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