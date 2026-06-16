<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Aventura na Floresta</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main>

        <div class="passo ativo" id="passo-0">
            <h1>Aventura na Floresta</h1>
            <img src="https://picsum.photos/500/300" alt="Floresta">
            <p>Você encontrou um mapa misterioso. O que deseja fazer?</p>

            <button class="btn-proximo" data-proximo="1">
                Seguir o mapa
            </button>

            <button class="btn-proximo" data-proximo="2">
                Voltar para casa
            </button>
        </div>

        <div class="passo" id="passo-1">
            <h1>Dentro da Floresta</h1>

            <p>
                Você encontra uma bifurcação.
            </p>

            <button class="btn-proximo" data-proximo="3">
                Caminho da esquerda
            </button>

            <button class="btn-proximo" data-proximo="4">
                Caminho da direita
            </button>
        </div>

        <div class="passo" id="passo-2">
            <h1>Fim da Aventura</h1>

            <p>
                Você voltou para casa e nunca descobriu o segredo.
            </p>
        </div>

        <div class="passo" id="passo-3">
            <h1>Tesouro Encontrado!</h1>

            <p>
                Você encontrou um baú cheio de ouro.
            </p>
        </div>

        <div class="passo" id="passo-4">
            <h1>Caverna Misteriosa</h1>

            <p>
                Um dragão aparece e bloqueia sua passagem.
            </p>
        </div>

    </main>

    <script src="script.js"></script>

</body>
</html>
