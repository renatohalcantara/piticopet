var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto7()
{
    var loja = document.getElementById("loja")
    var produto7 = document.getElementById("produto7")
    var produto7real = (produto7.textContent)

    var preço7 = document.getElementById("preço7")
    var preço7real = (preço7.textContent)
    
    gerarTabela(produto7real, preço7real)
    num++
    contador.textContent = num
}

function gerarTabela(produto7real, preço7real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto7 = novaLinha.insertCell(0)
    let celulaPreço7 = novaLinha.insertCell(1)

    celulaProduto7.textContent = produto7real
    celulaPreço7.textContent = preço7real
}