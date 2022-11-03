function print() {
    console.log('print')
}

const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('Testando onkeydown')
}


input.onclick = function(event) {
    console.log(event)
}
