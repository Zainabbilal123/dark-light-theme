var change = document.getElementById('change')
var body = document.body



change.style.color = 'white'
change.style.backgroundColor = 'black'
body.style.backgroundColor = 'white'

function color() {


if(body.style.backgroundColor === 'white'){
    body.style.backgroundColor = 'black'
   change.style.color = 'black'
   change.style.backgroundColor = 'white'
   change.textContent = 'Night'
} else {
   body.style.backgroundColor = 'white'
   change.style.color = 'white'    
   change.style.backgroundColor = 'black'
     change .textContent = 'DAY'
}
}