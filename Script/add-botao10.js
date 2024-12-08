var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto10()
{
    var loja = document.getElementById("loja")
    var produto10 = document.getElementById("produto10")
    var produto10real = (produto10.textContent)

    var preço10 = document.getElementById("preço10")
    var preço10real = (preço10.textContent)
    
    gerarTabela(produto10real, preço10real)
    alert("Você adicionou um produto ao seu carrinho !")
    num++
    contador.textContent = num
}

function gerarTabela(produto10real, preço10real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto10 = novaLinha.insertCell(0)
    let celulaPreço10 = novaLinha.insertCell(1)

    celulaProduto10.textContent = produto10real
    celulaPreço10.textContent = preço10real
}