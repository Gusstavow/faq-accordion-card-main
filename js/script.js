const respostas = document.querySelectorAll(".respostas")
const perguntas = document.querySelectorAll(".titulo-pergunta")
const conteudos = document.querySelectorAll(".conteudos")

const image = document.createElement("img")
image.setAttribute("src", "../images/icon-arrow-down.svg")

//esconde todas as resposta, quando a pagina e carregada
respostas.forEach((item) => {
    item.classList.add("hidden")
})



conteudos.forEach((item) => {
    item.addEventListener("click", () => {

        item.children[1].classList.toggle("hidden")

        item.children[0].classList.toggle("bolder")

      
    })
})

//faz o giro da seta
perguntas.forEach((arrow) => {
    arrow.addEventListener("click",()=>{
        arrow.children[0].classList.toggle("giro")
    

    })
    
})
