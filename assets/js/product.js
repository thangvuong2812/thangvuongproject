var priceDelElement = $(".product-main .price-text")[0];
var stringDel = priceDelElement.innerText.replace(/,/g,"");
if (Number(stringDel) <= 0) {
    priceDelElement.parentElement.remove();
}

// Page: product-detail => quantity button
// Get quantity button
var quantityElement = $(".product-main input[type='number']");
console.log(quantityElement);
var minusElement = $(".product-main .minus");
console.log(minusElement);
var plusElement = $(".product-main .plus");
console.log(plusElement);


// console.log(i);
// Error => bug can fix ====> Done
plusElement.click(function () {
    let i = quantityElement.val();
    quantityElement.val(++i);
});

minusElement.click(function () {
    let i = quantityElement.val();    

    if(quantityElement.val() > 1) {
        quantityElement.val(--i);
    }
});


// Error => bug can fix ========> Done
const btnSubmit = $(".product-main button[type='submit']");
btnSubmit.click(function (e) {
    e.preventDefault();
    const radSizeElements = $(".product-main .sizepicker input[type='radio']");
    console.log(radSizeElements);
    let count = 0;
    for (const radElement of radSizeElements) {
        let checkedRad = radElement.checked;
        if(checkedRad) {
            alert("Thêm thành công!");
            return;
        } else {
            count++;
        }        
    }
    if(count >= 3) {
        alert("Vui lòng chọn Size!");
        return;
    }
});

