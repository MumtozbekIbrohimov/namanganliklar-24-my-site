const showBtn = document.querySelector('#show-btn')
const modal = document.querySelector('#modal')
const closes = document.getElementById('close-btn')
const overly = document.getElementById('ovarly')

showBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    overly.classList.remove('hidden')
})
closes.addEventListener('click', () => {
    modal.classList.add('hidden')
    overly.classList.add('hidden')
})
overly.addEventListener('click', () => {
    modal.classList.add('hidden')
    overly.classList.add('hidden')
})