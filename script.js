console.log("ISTO É JAVASCRIPT")
console.log(martim_buscar_agua)

for(var i=0; i<martim_array.length;i++) {
    console.log(martim_array[i])
}

var title_element = document.getElementById("title_image");
console.log(title_element)

title_element.textContent = "Olá blablabla"

var cards = document.getElementsByClassName("card")

for (var i=0; i<cards.length; i++){
    console.log(cards[i].getElementsByClassName("btn"))
    var btn = cards[i].getElementsByClassName("btn")[0]
    btn.classList.remove("btn-primary")
    btn.classList.add("btn-success")
}

var buttons = document.getElementsByClassName("btn")
for (var i=0; i<buttons.length; i++){
    buttons[i].onclick = function() {
        console.log("CARREGOU NO BOTAO")
    }
}