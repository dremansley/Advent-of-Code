// ADVENT OF CODE 2023 Day 1
// https://adventofcode.com/2023/day/1

const fs = require('fs');
const sumNumbersFromStrings = (text) => {
    return text.reduce((previousElfCalibrationSum, elf) => {
        const numbers = elf.replace(/\D/g, '');
        return isNaN(numbers[0]) ? previousElfCalibrationSum : previousElfCalibrationSum + parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
    },0);
}

const AdventDay1Challenge1 = () => {
        fs.readFile('input.txt', (err, data) => {
            if(err) throw err;
           console.log(sumNumbersFromStrings(data.toString().split("\n")))
    })
}

const AdventDay1Challenge2 = () => {

    const numberDict = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    }

    const overlappingNumberWords = {
        'twone': 21,
        'eightwo': 82,
        'threeight': 38,
        'sevenine': 79,
        'oneight': 18,
        'eighthree': 83,
        'fiveight': 58,
        'nineight': 98,
    }

    const regExSimple = new RegExp(Object.keys(numberDict).join("|"), "g");
    const regExCombo = new RegExp(Object.keys(overlappingNumberWords).join("|"), "g");

    fs.readFile('input.txt', (err, data) => {

        const convertedStringsToNumbers = data.toString().split("\n").map((elfData) => {
            const removedCombinations =  elfData.toLowerCase().replace(regExCombo, numberMatched =>  overlappingNumberWords[numberMatched]);
            return removedCombinations.replace(regExSimple, numberMatched => numberDict[numberMatched]);
        })

       console.log(sumNumbersFromStrings(convertedStringsToNumbers))

    });
}

AdventDay1Challenge1();
AdventDay1Challenge2();
