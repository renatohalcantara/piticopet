var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto3()
{
    var loja = document.getElementById("loja")
    var produto3 = document.getElementById("produto3")
    var produto3real = (produto3.textContent)

    var preço3 = document.getElementById("preço3")
    var preço3real = (preço3.textContent)
    
    gerarTabela(produto3real, preço3real)
    alert("Você adicionou um produto ao seu carrinho !")
    num++
    contador.textContent = num
}

function gerarTabela(produto3real, preço3real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto3 = novaLinha.insertCell(0)
    let celulaPreço3 = novaLinha.insertCell(1)

    celulaProduto3.textContent = produto3real
    celulaPreço3.textContent = preço3real
}