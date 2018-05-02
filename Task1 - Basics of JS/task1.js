const calculateButton = document.querySelector('#calculateButton');
const textArea = document.querySelector('#textArea');
const numberOfWords = document.querySelector('#numberOfWords');
const lengthOfMaxWord = document.querySelector('#lengthOfMaxWord');
const lengthOfMinWord = document.querySelector('#lengthOfMinWord');
const averageLengthOfWords = document.querySelector('#averageLengthOfWords');

calculateButton.addEventListener('click', function () {
    showResult(calculate(textArea.value));
});

/**
 *
 * @param inputString
 * @returns {{numberOfWords: number, lengthOfMaxWord, lengthOfMinWord, averageLengthOfWords: number}}
 */
function calculate(inputString) {
    // const words = inputString.trim().split(" ").filter((word) => word.length > 1 || word.match(/[a-z]/i) );
    const words = inputString.trim()
                             .replace(/([^\-\w]|[\d])/g, " ")
                             .split(" ")
                             .filter((word) => word.length > 1 || word.match(/[a-z]/i) );
    let overallLengthOfWords = 0;
    const result = {
        numberOfWords: 0,
        lengthOfMaxWord: words[0].length,
        lengthOfMinWord: words[0].length,
        averageLengthOfWords: 0
    };

    result.numberOfWords = words.length;
    for (let word of words) {
        overallLengthOfWords += word.length;
        if (word.length < result.lengthOfMinWord) {
            result.lengthOfMinWord = word.length
        }
        if (word.length > result.lengthOfMaxWord) {
            result.lengthOfMaxWord = word.length
        }
    }
    result.averageLengthOfWords = parseInt(overallLengthOfWords / result.numberOfWords);
    return result;
}

/**
 *
 * @param result
 */
function showResult(result) {
    numberOfWords.textContent = result.numberOfWords;
    lengthOfMaxWord.textContent = result.lengthOfMaxWord;
    lengthOfMinWord.textContent = result.lengthOfMinWord;
    averageLengthOfWords.textContent = result.averageLengthOfWords;
}