//criação dasvariaves para direcionar o javascript para as tags "a" das listas
const it1 = document.getElementById('item_01')
const it2 = document.getElementById('item_02')
const it3 = document.getElementById('item_03')
//funções que mudam a cor dos elementos usando classes do bootstrap
function mudarCor(objeto){
    objeto.classList.add("theme-primary")
}
function removerCor(objeto){
    objeto.classList.remove("theme-primary")
}
//chamada das funções
it1.addEventListener('mousemove',()=>mudarCor(it1))
it1.addEventListener('mouseleave',()=>removerCor(it1))
it2.addEventListener('mousemove',()=>mudarCor(it2))
it2.addEventListener('mouseleave',()=>removerCor(it2))
it3.addEventListener('mousemove',()=>mudarCor(it3))
it3.addEventListener('mouseleave',()=>removerCor(it3))
