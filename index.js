const codeArea = document.querySelector('.code-area')
const language = document.querySelector('.code-language')
const botao = document.querySelector('.botao')

botao.addEventListener('click', () => {
    let codigo = codeArea.querySelector('code')
    hljs.highlightBlock(codigo)
})

language.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem() {
    let codigo = codeArea.querySelector('code')
    codeArea.innerHTML = `<code class="preview hljs ${language.value}" contenteditable="true"></code>`
    codeArea.firstChild.innerText = codigo.innerText
}
