var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto9()
{
    var loja = document.getElementById("loja")
    var produto9 = document.getElementById("produto9")
    var produto9real = (produto9.textContent)

    var preço9 = document.getElementById("preço9")
    var preço9real = (preço9.textContent)
    
    gerarTabela(produto9real, preço9real)
    alert("Você adicionou um produto ao seu carrinho !")
    num++
    contador.textContent = num
}

function gerarTabela(produto9real, preço9real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto9 = novaLinha.insertCell(0)
    let celulaPreço9 = novaLinha.insertCell(1)

    celulaProduto9.textContent = produto9real
    celulaPreço9.textContent = preço9real
}