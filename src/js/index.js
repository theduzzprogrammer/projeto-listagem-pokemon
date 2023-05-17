/*(da pra fazer comentários usando isso para fazer objetivos e metas )
O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro
-objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
    - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
    - passo 2 - dar um jeito de pegar no JS o elemento corresponde ao body
    - paasso 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
    - passo 4 - adicionar a classe modo-escuro no body
    - passo 5 - trocar a imagem do botão de alterar tema para lua

- objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro sol
    - passo 6 - verificar se o body tem a class modo escuro
    - passo 7 - remover a classe do modo-ecuro do body
    - passo 8 - trocar a imagem do botão de alterar tema pro sol
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 1 completo

const body = document.querySelector("body");

const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao")

//passo 2 completo

botaoAlterarTema.addEventListener("click", () => {
    //passo 3 completo


    const modoEscurtoEstaAtivo = body.classList.contains("modo-escuro");
    //passo 6 completo
    if (modoEscurtoEstaAtivo) {
        body.classList.remove("modo-escuro")
    //passo 7 completo
    
    imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/sun.png")
    
    } else {
        body.classList.add("modo-escuro");
        //passo 4 completo
        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/moon.png")
        //passo 5 completo
        //console.log dá para testar o que estamos fazendo
    }
});