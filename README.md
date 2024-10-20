<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="shortcut icon" href="Imagens/Favicon.png" type="image/x-icon">

<style>
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

    :root {
    --cor1: #8ee5f5;
    --cor2: #ff6a00;
    --fonte_padrao: Arial, Helvetica, sans-serif;
}

* {
    margin: 0%;
    padding: 0%;
    border: 0%;
}

body {
    background-color: var(--cor1);
    font-family: var(--fonte_padrao);
    text-align: justify;
}

header {
    width: 100%;
    background-color: var(--cor2);
    color: white;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 10px;
}

header > h1{
    font-family: "Righteous", sans-serif;
    font-weight: 400;
    font-size: 3em;
}

header > h2{
    padding: 5px;
    font-family: "Righteous", sans-serif;
    font-weight: 400;
    /*line-height: 300%;*/
}

nav {
    background-color: var(--cor1);
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: sticky;
    top: 0;
    left: 0; 
    box-shadow: 0px 1px 4px 0px #000000a4;
    text-align: center;
}

nav > a {
    color: white;
    padding: 10px;
    text-decoration: none;
    font-family: "Righteous", sans-serif;
    font-weight: 400;
    font-size: 20px;
}

nav > a:hover {
    background-color: var(--cor2);
    text-decoration: none;
}

nav > a:visited {
    background-color: var(--cor2);
}

nav > a:active {
    background-color: var(--cor2);
}
</style>

</head>

<body>
    <header>
        <h1>Pitico Pet</h1>
        <h2>
            Tudo aquilo que você sempre quis para o seu pet, em um único lugar!
        </h2>
    </header>
    <nav>
        <a href="Index (Página Inicial).html"> Home </a>    
        <a href="#"> Contato </a>
        <a href="#"> Quem Somos </a>
    </nav>

</body>
</html>