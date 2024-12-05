var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto2()
{
    var loja = document.getElementById("loja")
    var produto2 = document.getElementById("produto2")
    var produto2real = (produto2.textContent)

    var preço2 = document.getElementById("preço2")
    var preço2real = (preço2.textContent)
    
    gerarTabela(produto2real, preço2real)
    num++
    contador.textContent = num
}

function gerarTabela(produto2real, preço2real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto2 = novaLinha.insertCell(0)
    let celulaPreço2 = novaLinha.insertCell(1)

    celulaProduto2.textContent = produto2real
    celulaPreço2.textContent = preço2real
}