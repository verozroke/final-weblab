import getDoctor from "./helpers/getDoctor.js"

$(document).ready(function() {
    $('#select').change((e) => {
        setPriceInfo(e.target.value)
    })
})

function setPriceInfo(doctorIdx) {
    
    const priceInfo = getDoctor(doctorIdx)
    $('.price__info')[0].innerHTML = `
        <div class="price__info-title">${priceInfo.doctor_name}</div>
        <div class="price__info-prices">
            <p><b>Первичная консультация врача:</b> 	${priceInfo.prices[0]} тенге</p>
            <p><b>Повторная консультация врача:</b> 	${priceInfo.prices[1]} тенге</p>
            <p><b>On-line консультация:</b> 	        ${priceInfo.prices[2]} тенге</p>
        </div>
    `
}


$('.footer__year')[0].innerHTML = new Date().getFullYear();

