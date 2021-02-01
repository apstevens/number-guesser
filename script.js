let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/**
 * Function called at the start of each round
 * returns a random integer between 0 and 9
 */
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
/**
 * Function called each round to determine which guess is closest to 
 * the target number
 * return true if humanGuess wins
 */
const compareGuesses = (humanGuess, computerGuess, target) => {
    const humanDifference = Math.abs(target - humanGuess);
    const computerDifference = Math.abs(target - computerGuess);
    return humanDifference <= computerDifference;
}

/**
 * Function to correctly increase winners score after each round
 */
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

/**
 * Function to update the round number after each round
 */
const advanceRound = () => currentRoundNumber++;
