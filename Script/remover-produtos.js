var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

var tabela = document.querySelector("#tabelaProdutos")
//Nessa linha é chamada a variável (tabela) e tornando-a uma variável "ouvinte" de uma função. Nesse caso a função a função "double click"
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 800)
    num--
    contador.textContent = num
})