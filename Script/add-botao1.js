var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto1()
{
    var loja = document.getElementById("loja")
    var produto1 = document.getElementById("produto1")
    var produto1real = (produto1.textContent)

    var preço1 = document.getElementById("preço1")
    var preço1real = (preço1.textContent)
    
    gerarTabela(produto1real, preço1real)
    num++
    contador.textContent = num
}

function gerarTabela(produto1real, preço1real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto1 = novaLinha.insertCell(0)
    let celulaPreço1 = novaLinha.insertCell(1)

    celulaProduto1.textContent = produto1real
    celulaPreço1.textContent = preço1real
}