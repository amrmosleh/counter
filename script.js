function increase(){
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number+1
}

function decrease(){
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number-1
}

function reset(){
    document.getElementById('number').innerHTML= 0
}