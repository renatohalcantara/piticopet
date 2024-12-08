var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto8()
{
    var loja = document.getElementById("loja")
    var produto8 = document.getElementById("produto8")
    var produto8real = (produto8.textContent)

    var preço8 = document.getElementById("preço8")
    var preço8real = (preço8.textContent)
    
    gerarTabela(produto8real, preço8real)
    alert("Você adicionou um produto ao seu carrinho !")
    num++
    contador.textContent = num
}

function gerarTabela(produto8real, preço8real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto8 = novaLinha.insertCell(0)
    let celulaPreço8 = novaLinha.insertCell(1)

    celulaProduto8.textContent = produto8real
    celulaPreço8.textContent = preço8real
}