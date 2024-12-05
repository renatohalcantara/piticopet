var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto6()
{
    var loja = document.getElementById("loja")
    var produto6 = document.getElementById("produto6")
    var produto6real = (produto6.textContent)

    var preço6 = document.getElementById("preço6")
    var preço6real = (preço6.textContent)
    
    gerarTabela(produto6real, preço6real)
    num++
    contador.textContent = num
}

function gerarTabela(produto6real, preço6real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto6 = novaLinha.insertCell(0)
    let celulaPreço6 = novaLinha.insertCell(1)

    celulaProduto6.textContent = produto6real
    celulaPreço6.textContent = preço6real
}