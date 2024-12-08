var contador = document.getElementById("atualizar-Carrinho")
var num = contador.textContent

function capturaProduto11()
{
    var loja = document.getElementById("loja")
    var produto11 = document.getElementById("produto11")
    var produto11real = (produto11.textContent)

    var preço11 = document.getElementById("preço11")
    var preço11real = (preço11.textContent)
    
    gerarTabela(produto11real, preço11real)
    alert("Você adicionou um produto ao seu carrinho !")
    num++
    contador.textContent = num
}

function gerarTabela(produto11real, preço11real)
{
    //Acessa o corpo da tabela onde os dados serão inseridos
    let tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0]

    //Criar uma nova linha na tabela
    let novaLinha = tabela.insertRow()

    //Insere novas células na linha criada e atribui os valores capturados
    let celulaProduto11 = novaLinha.insertCell(0)
    let celulaPreço11 = novaLinha.insertCell(1)

    celulaProduto11.textContent = produto11real
    celulaPreço11.textContent = preço11real
}