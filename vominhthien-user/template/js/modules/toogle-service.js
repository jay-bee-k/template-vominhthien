export default function toggleSerivce() {
    const toogleService = document.getElementById('toogleService');
    const listService = document.getElementById('listService');
    const cart = document.querySelector('.cart');
    if(toogleService && listService) {
        toogleService.addEventListener('click', () => {
            listService.classList.toggle('active');
            cart.classList.toggle('active')
        })
    }   
}