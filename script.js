const botoes = document.querySelectorAll(".btn-proximo");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const atual = document.querySelector(".ativo");

        atual.classList.remove("ativo");

        const proximoPasso =
            botao.getAttribute("data-proximo");

        document
            .getElementById(`passo-${proximoPasso}`)
            .classList.add("ativo");
    });
});
