
var change = document.getElementById('change')

change.style.color = 'white'
change.style.background = 'black'
 function color() {
    var color = change.style.color === 'white' ? 'black': 'white';
    change.style.color = color

    var background = change.style.background === 'black'? 'white': 'black';
    change.style.background = background
    change.textContent = 'night'

    document.body.style.backgroundColor = 'black';

 }