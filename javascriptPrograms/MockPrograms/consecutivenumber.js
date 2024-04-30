function printConsecutiveNumbers(number) {
    const numberString = number.toString();
    const consecutiveNum = [];
    let currentSequence = '';

    for (let i = 0; i < numberString.length; i++) {
        if (parseInt(numberString[i]) + 1 === parseInt(numberString[i + 1])) {
            currentSequence += numberString[i];
        } else {
            currentSequence += numberString[i];
            if (currentSequence.length > 1) {
                consecutiveNum.push(currentSequence);
            }
            currentSequence = '';
        }
    }

    console.log("Consecutive number sequences:", consecutiveNum);
   // console.log("Count of consecutive sequences:", consecutiveNum.length);
}

const number = 91260856783;
printConsecutiveNumbers(number);