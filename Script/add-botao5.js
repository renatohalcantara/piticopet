var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto5()
{
    var loja = document.getElementById("loja")
    var produto5 = document.getElementById("produto5")
    var produto5real = (produto5.textContent)

    var preço5 = document.getElementById("preço5")
    var preço5real = (preço5.textContent)
    
    gerarTabela(produto5real, preço5real)
    num++
    contador.textContent = num
}

function gerarTabela(produto5real, preço5real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto5 = novaLinha.insertCell(0)
    let celulaPreço5 = novaLinha.insertCell(1)

    celulaProduto5.textContent = produto5real
    celulaPreço5.textContent = preço5real
}