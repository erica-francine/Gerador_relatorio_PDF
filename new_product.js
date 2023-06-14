const [code, description, amount, measures, unitaryValue, totalValue] = document.querySelectorAll('.dataProductValue')
let divProduct = document.querySelector('.products');


function registerProduct() {
    let tableProduct = document.createElement('table')
    let rowProduct = document.createElement('tr')
    let thCode = document.createElement('th')
    thCode.innerText = 'Código Produto'
    let thDescrip = document.createElement('th')
    thDescrip.innerText = 'Descrição'
    let thAmount = document.createElement('th')
    thAmount.innerText = 'Quantidade'

}