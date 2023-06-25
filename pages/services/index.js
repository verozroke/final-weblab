
$('.footer__year')[0].innerHTML = new Date().getFullYear();



$('.services__card').each((idx, card) => {
    card.addEventListener('mouseenter', () => {

        card.style.backgroundColor = '#ccb770'
        card.style.color = '#000'
        $(card).find('[fill="#ccb770"]').attr('fill', '#000');
    })

    card.addEventListener('mouseleave', () => {
        $(card).find('[fill="#000"]').attr('fill', '#ccb770');

        card.style.backgroundColor = '#000'
        card.style.color = '#ccb770'



    })
})