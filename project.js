// prompt for the deposit
const prompt = require("prompt-sync")();

const rows = 3;
const cols = 3;

const symbols_count = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const symbol_values = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

// create deposit function
const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again");
        } else{
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid number of lines, try again");
        } else{
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter total bets: ");
        const numberOfBets = parseFloat(bet);

        if (isNaN(numberOfBets) || numberOfBets <= 0 || numberOfBets > balance / lines){
            console.log("Invalid bet, try again");
        } else{
            return numberOfBets;
        }
    }
}

const spin = () => {
    const symbols = [];

    for (const [symbol, count] of Object.entries(symbols_count)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
        console.log(symbols);
    }

    const reels = [[], [], []];

    for(let i = 0; i < cols; i++){
        const reelSymbols = [...symbols];
        for (let j = 0; j < rows; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
        }
    }
}

spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);