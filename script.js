const screen = document.getElementById("screen");

let lastNumber;
let lastOperator;

const addToScreen = (input) => {
    if(screen.value === '0'){
        screen.value = '';
    }

    screen.value += input;
}

const manipulateNumbers = (input) => {
    lastNumber = Number(screen.value);
    screen.value = ' ';
    lastOperator = input;
}

const count = () => {
    try{
        let number = Number(screen.value);

        if (screen.value === "") {
            screen.value = "0";
        }
        if (lastOperator === "") {
            screen.value = "0";
        }

        if (lastOperator !== Number) {
            screen.value = "0";
        }

        switch (lastOperator) {
            case "+":
                screen.value = lastNumber + number;
                break;
            case "-":
                screen.value = lastNumber - number;
                break;
            case "*":
                screen.value = lastNumber * number;
                break;
            case "/":
                screen.value = lastNumber / number;
                break;
            default:
                screen.value = "0";
                break;
        }

        lastNumber = undefined;
    }catch(err){
        screen.value = '';
    }

}