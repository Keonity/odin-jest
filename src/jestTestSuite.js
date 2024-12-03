function capitalize(string) {
    let returnString = string.charAt(0).toUpperCase() + string.slice(1);
    return returnString;
}

function reverseString(string) {
    let returnString = '';
    let reverseCount = string.length - 1;
    while (reverseCount >= 0) {
        returnString += string[reverseCount];
        reverseCount--;
    }
    return returnString;
}

const Calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    },
    testVal: 1,
};

function caesarCipher(string, shift) {
    let shiftNum = shift;
    let returnString = '';
    let stringLength = string.length;
    let currentIndex = 0;
    let currentCode = 0;
    while (currentIndex < stringLength) {
        // unfinished - plan: convert to charcode, shift charcode, convert back to characters
        currentCode = string.charCodeAt(currentIndex)
        if (currentCode > 64 && currentCode < 91) {
            currentCode = currentCode + shiftNum;
            if (currentCode < 64) {
                currentCode = 91 - (64 % currentCode);
            }
            else if (currentCode > 91) {
                currentCode = 64 + (currentCode % 91);
            }
        }
        returnString += String.fromCharCode(currentCode);
        currentIndex++;
        
    }

    return returnString;
}

module.exports = { capitalize, reverseString, Calculator, caesarCipher } ;