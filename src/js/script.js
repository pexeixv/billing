const printBill = selector => {
    const printContents = document.querySelector(selector).innerHTML
    const originalContents = document.body.innerHTML
    document.body.innerHTML = printContents
    window.print()
    document.body.innerHTML = originalContents
}

const saveBill = selector => {
    const nameDateRow = document.querySelector('#nameDateRow')
    const receiptId = document.querySelector('#receiptId').innerText
    const fileName = `${receiptId}.png`
    domtoimage.toBlob(document.querySelector(selector))
        .then(function (blob) {
            window.saveAs(blob, fileName)
        })
}