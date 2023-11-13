const btnCalculate = document.querySelector('[data-calculate]')

function Calculate() {
    let result = document.querySelector('[data-res]')
    let height = +document.getElementById('height').value
    let weight = +document.getElementById('weight').value
    let BMI = +weight / +(height ** 2)
    result.value = `Your BMI is ${Math.round(BMI)}`
}

btnCalculate.addEventListener('click', Calculate)