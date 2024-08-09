/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let lengthOutput = document.getElementById("length-output");
let volumeOutput = document.getElementById("volume-output");
let massOutput = document.getElementById("mass-output");
const meaterToFeetConversionRate = 3.281;
const literToGallonConversionRate = 0.264;
const kilogramToPoundConversionRate = 2.204;

convertBtn.addEventListener("click", function () {
  let inputNum = inputEl.value;

  function lengthConvert() {
    let feetConvert = Number(inputNum * meaterToFeetConversionRate).toFixed(3);

    let meterConvert = Number(inputNum / meaterToFeetConversionRate).toFixed(3);

    let length = ` ${inputNum} meters =  ${feetConvert} feet | ${inputNum} feet = ${meterConvert} meters`;
    return length;
  }
  function volumeConvert() {
    let gallonConvert = Number(inputNum * literToGallonConversionRate).toFixed(
      3
    );

    let litersConvert = Number(inputNum / literToGallonConversionRate).toFixed(
      3
    );
    let volume = `${inputNum} liters = ${gallonConvert} gallons | ${inputNum} gallons = ${litersConvert} liters`;

    return volume;
  }
  function massConvert() {
    let poundConvert = Number(inputNum * kilogramToPoundConversionRate).toFixed(
      3
    );

    let kilogramConvert = Number(
      inputNum / kilogramToPoundConversionRate
    ).toFixed(3);
    let mass = `${inputNum} kilos = ${poundConvert} pounds | ${inputNum} pounds = ${kilogramConvert} kilos`;

    return mass;
  }
  lengthOutput.innerHTML = lengthConvert();
  volumeOutput.innerHTML = volumeConvert();
  massOutput.innerHTML = massConvert();
});
