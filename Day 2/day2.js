
const fs = require("fs");
const AdventDay2Challenge1 = () => {

    const configuration = {
        red: 12,
        green: 13,
        blue: 14
    }

    fs.readFile("input.txt", (err, gameData) => {
            if(err) throw err;


            try {
                const validateGameResults = gameData.toString().trim().split("\n").map((game, gameIndex) => {
                    return game.split(":")[1].split(";").map((set) => {

                        const colours = set.trim().split(",");

                        return colours.map(countColor => {
                            const [count, color] = countColor.trim().split(' ');


                            return parseInt(count) <= configuration[color]
                        });
                    })
                })

                const answer = validateGameResults.reduce((previousAnswer, gameSet, index) => {
                    if (gameSet.every(gameSetSubArray => gameSetSubArray.every(gameSetValid => gameSetValid))) {
                        previousAnswer += index + 1;
                    }
                    return previousAnswer;
                }, 0);

                console.log(`Answer Part 1: ${answer}`)

            } catch (e) {
                console.log(`Error: ${e}`)
            }
        });
}

const AdventDay2Challenge2 = () => {

    const configuration = {
        red: 12,
        green: 13,
        blue: 14
    }

    fs.readFile("input.txt", (err, gameData) => {
        if(err) throw err;

        try {
            const minimumCubeCountRequired = gameData.toString().trim().split("\n").map((game, gameIndex) => {
                const sets = game.split(":")[1].split(";");
                let cubeRequiredCounts = {};

                sets.forEach((set, setIndex) => {
                    const colours = set.trim().split(",");

                    colours.forEach(countColor => {
                        const [count, color] = countColor.trim().split(' ');
                        const countNumber = parseInt(count);

                        if (!cubeRequiredCounts[color] || countNumber > cubeRequiredCounts[color]) {
                            cubeRequiredCounts[color] = countNumber;
                        }
                    });

                    if(setIndex === sets.length - 1){
                        cubeRequiredCounts.total = cubeRequiredCounts.red *  cubeRequiredCounts.blue *  cubeRequiredCounts.green
                    }
                });

                return cubeRequiredCounts
            });

            const answer = minimumCubeCountRequired.reduce((previousTotal, currentRow) => previousTotal + currentRow.total, 0);

            console.log(`Answer Part 2: ${answer}`)

        } catch (e) {
            console.log(`Error: ${e}`)
        }
    });
}


AdventDay2Challenge1();
AdventDay2Challenge2();
