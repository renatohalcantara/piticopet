var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto12()
{
    var loja = document.getElementById("loja")
    var produto12 = document.getElementById("produto12")
    var produto12real = (produto12.textContent)

    var preço12 = document.getElementById("preço12")
    var preço12real = (preço12.textContent)
    
    gerarTabela(produto12real, preço12real)
    num++
    contador.textContent = num
}

function gerarTabela(produto12real, preço12real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto12 = novaLinha.insertCell(0)
    let celulaPreço12 = novaLinha.insertCell(1)

    celulaProduto12.textContent = produto12real
    celulaPreço12.textContent = preço12real
}