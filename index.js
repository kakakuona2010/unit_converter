// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const convertedValue = []

const convertBtn = document.querySelector("#convert-btn")
const unitInput = document.querySelector("#unit-input")

const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")


function convert(unit) {
    const feetToMeter = convertFeetToMeter(unit)
    const meterToFeet = convertMeterToFeet(unit)

    const literToGallon = convertLiterToGallon(unit)
    const gallonToLiter = convertGallonToLiter(unit)

    const kilosToPound = convertKilogramToPound(unit)
    const poundToKilos = convertPoundToKilogram(unit)

    lengthEl.textContent = `${unit} meters = ${meterToFeet} feet | ${unit} feet = ${feetToMeter} meters`
    volumeEl.textContent = `${unit} litres = ${literToGallon} gallons | ${unit} gallons = ${gallonToLiter} liters`
    massEl.textContent = `${unit} kilos = ${kilosToPound} pounds | ${unit} pounds = ${poundToKilos} kilos`

    // console.log(feetToMeter, meterToFeet, literToGallon, gallonToLiter, kilosToPound, poundToKilos)
}

function convertFeetToMeter(value) {
    return (value / 3.281).toFixed(3)
}

function convertMeterToFeet(value) {
    return (value * 3.281).toFixed(3)
}

function convertLiterToGallon(value) {
    return (value * 0.264).toFixed(3)
}

function convertGallonToLiter(value) {
    return (value / 0.264).toFixed(3)
}

function convertKilogramToPound(value) {
    return (value * 2.204).toFixed(3)
}

function convertPoundToKilogram(value) {
    return (value / 2.204).toFixed(3)
}


convertBtn.addEventListener('click', function (event) {
    const unitEntered = unitInput.value
    convert(unitEntered)
})