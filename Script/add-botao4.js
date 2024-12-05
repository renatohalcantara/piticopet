var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto4()
{
    var loja = document.getElementById("loja")
    var produto4 = document.getElementById("produto4")
    var produto4real = (produto4.textContent)

    var preço4 = document.getElementById("preço4")
    var preço4real = (preço4.textContent)
    
    gerarTabela(produto4real, preço4real)
    num++
    contador.textContent = num
}

function gerarTabela(produto4real, preço4real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto4 = novaLinha.insertCell(0)
    let celulaPreço4 = novaLinha.insertCell(1)

    celulaProduto4.textContent = produto4real
    celulaPreço4.textContent = preço4real
}