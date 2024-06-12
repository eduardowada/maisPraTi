/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/
const prompt = require("prompt-sync")();

function processTime() {
    function isValidTime(hour, minute, second) {
        return (
            Number.isInteger(hour) && hour >= 0 && hour < 24 &&
            Number.isInteger(minute) && minute >= 0 && minute < 60 &&
            Number.isInteger(second) && second >= 0 && second < 60
        );
    }

    function readTime() {
        while (true) {
            let timeInput = prompt("Enter the time in the format HH.MM.SS: ");
            let timeParts = timeInput.split(".");

            if (timeParts.length === 3) {
                let [hour, minute, second] = timeParts.map(Number);

                if (isValidTime(hour, minute, second)) {
                    return { hours: hour, minutes: minute, seconds: second};
                }
            }

            else {
                console.log("Invalid time. Please, enter a valid time in the format HH.MM.SS.")
            }
        }
    }

    function formatTime({hours, minutes, seconds}) {
        return `${String(hours).padStart(2, '0')}.${String(minutes).padStart(2, '0')}.${String(seconds).padStart(2, '0')}`
    }

    let times = [];

    for (let i = 1; i < 6; i++) {
        console.log(`Enter the time ${i}: `);
        let time = readTime();
        times.push(time);
    }

    console.log("\nEntered times in the format HH.MM.SS:");
    times.forEach(time => {console.log(formatTime(time));});
}

processTime();

module.exports = processTime;