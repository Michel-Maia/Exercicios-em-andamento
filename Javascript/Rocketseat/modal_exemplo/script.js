const buttonOpen = document.getElementById('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

buttonOpen.onclick = function() {
    modalWrapper
    .classList
    .remove('invisible')
}

