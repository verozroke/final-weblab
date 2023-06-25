function scrollDown(blockID) {
    const $block = $(`#${blockID}`)[0]
    $block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}



$('.header__button').click(() => {
    scrollDown('online-consultation')
})

$('.hero__button').click(() => {
    scrollDown('contact-us')
})


$('.footer__year')[0].innerHTML = new Date().getFullYear();

$('.header__logo').click(() => {
    const audio = new Audio('/audio/bruh.mp3')
    audio.play()
})