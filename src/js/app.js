let tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:16",
        destination: "LONDON",
        flight: "DX 203",
        gate: "A 19",
        remarks: "ON TIME"
    },
    {
        time: "07:11",
        destination: "GERMANY",
        flight: "JT 800",
        gate: "A 19",
        remarks: "CANCELLED"
    },
    {
        time: "12:15",
        destination: "BRAZIL",
        flight: "AX 071",
        gate: "A 19",
        remarks: "ON TIME"
    },
    {
        time: "08:00",
        destination: "TOKYO",
        flight: "TK 690",
        gate: "A 19",
        remarks: "ON TIME"
    }
]

const destinations = ["LONDON","GERMANY","BRAZIL","TOKYO"]
const remarks = ["ON TIME","CANCELLED","DELAYED"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for (const [index, letter] of word.entries()) {
                const letterElement  = document.createElement("div")

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }

            tableRow.append(tableCell)
        }

        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber() {
    const numbers = "0123456789"
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if (hour < 24){
        hour++
    }

    if (hour >= 24){
        hour = 1
        displayHour = hour
    }

    if (hour < 10){
        displayHour = `0${hour}`
    }

    return `${displayHour}:${generateRandomNumber()}${generateRandomNumber()}`
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: `${generateRandomLetter()}${generateRandomLetter()} ${generateRandomNumber()}${generateRandomNumber()}${generateRandomNumber()}`,
        gate: `${generateRandomLetter()}${generateRandomNumber()} ${generateRandomNumber()}`,
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })

    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 5000)

