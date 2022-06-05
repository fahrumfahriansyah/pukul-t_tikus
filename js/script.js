const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const contain = document.querySelectorAll('.container')
function animasi() {
    contain[0].setAttribute('class', 'contain')
}
function tikusDatang(tanah) {
    const random = Math.floor(Math.random() * tanah.length)
    return tanah[random]
}

function randomWaktu(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}
function mulai() {
    const contain = animasi()
    const randmWktu = randomWaktu(300, 500)
    const random = tikusDatang(tanah)
    random.classList.toggle('tikus')
    setTimeout(() => {
        random.classList.toggle('tanah')
        mulai()
    }, randmWktu)

}

function pukul() {
    skorNy++;
    skor.textContent = skorNy

}
