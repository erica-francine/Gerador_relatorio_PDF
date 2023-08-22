const [companyName, adressStreet, adressNumber, adressDistrict, adressCity, adressState, adressZipCode, adressTel] = document.querySelectorAll('.dataValue');

const handleZipCode = (event) => {
    let input = event.target
    input.value = zipCodeMask(input.value)
}

const zipCodeMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    return value
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}


function insertProduct() {
    let largura = 750;
    let altura = 600;
    let left = (screen.width - largura) / 2;
    let top = (screen.height - altura) / 2;


    window.open("new_product.html", "_blank", "width=" + largura + ", height=" + altura + ", left=" + left + ", top=" + top);
}

function closeWindow() {
    window.close()
}


function getData(){
    console.log(companyName.value)


}


function generatePDF(){
    getData()
}

