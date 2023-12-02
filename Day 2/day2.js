
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

                        return colours.map(colourCount => {
                            const [count, color] = colourCount.trim().split(' ');
                            const countNumber = parseInt(count);
                            return countNumber <= configuration[color]
                        });
                    })
                })

                const answer = validateGameResults.reduce((previousAnswer, gameSet, index) => {
                    if (gameSet.every(gameSetSubArray => gameSetSubArray.every(gameSetValid => gameSetValid === true))) {
                        previousAnswer += index + 1;
                    }
                    return previousAnswer;
                }, 0);

                console.log(answer)

            } catch (e) {
                console.log(`Error: ${e}`)
            }
        });
}

AdventDay2Challenge1();
