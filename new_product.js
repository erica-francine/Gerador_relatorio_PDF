const [code, description, amount, measures, unitaryValue, totalValue] = document.querySelectorAll('.dataProductValue')



function registerProduct() {
    let tableProduct = document.createElement('table')

    CreateTableHeader(tableProduct)


    closeWindow()
}


function CreateTableHeader(table) {
    let hasHeader = hasTableHeader(table)
    if (!hasHeader) {
        let rowProduct = document.createElement('tr')
        let thCode = document.createElement('th')
        thCode.innerText = 'Código Produto'
        let thDescrip = document.createElement('th')
        thDescrip.innerText = 'Descrição'
        let thAmount = document.createElement('th')
        thAmount.innerText = 'Quantidade'
        let thMeasures = document.createElement('th')
        thMeasures.innerText = 'Unidade de Medida'
        let thUnitaryValue = document.createElement('th')
        thUnitaryValue.innerText = 'Valor Unitário'
        let thTotalValue = document.createElement('th')
        thTotalValue.innerText = 'Valor Total'

        rowProduct.appendChild(thCode)
        rowProduct.appendChild(thDescrip)
        rowProduct.appendChild(thAmount)
        rowProduct.appendChild(thMeasures)
        rowProduct.appendChild(thUnitaryValue)
        rowProduct.appendChild(thTotalValue)


        table.appendChild(rowProduct)
        table.classList.add('tableProductIndex')
        table.id = 'tableProductIndex'
        window.opener.document.querySelector('.divProducts.products').appendChild(table);
    }else{
        getDataProduct(table)
    }
}


function getDataProduct(table) {

    let rowProduct = document.createElement('tr')
    let tdCode = document.createElement('td')
    tdCode.innerText = code.value
    let tdDescrip = document.createElement('td')
    tdDescrip.innerText = description.value
    let tdAmount = document.createElement('td')
    tdAmount.innerText = amount.value
    let tdMeasures = document.createElement('td')
    tdMeasures.innerText = measures.value
    let tdUnitaryValue = document.createElement('td')
    tdUnitaryValue.innerText = unitaryValue.value
    let tdTotalValue = document.createElement('td')
    tdTotalValue.innerText = totalValue.value

    rowProduct.appendChild(tdCode)
    rowProduct.appendChild(tdDescrip)
    rowProduct.appendChild(tdAmount)
    rowProduct.appendChild(tdMeasures)
    rowProduct.appendChild(tdUnitaryValue)
    rowProduct.appendChild(tdTotalValue)


    table.appendChild(rowProduct)
}

function hasTableHeader(table){
    let headerRow = table.querySelectorAll('tr th')

    // let headerCells = headerRow.querySelectorAll('th')
    return headerRow > 0
}
