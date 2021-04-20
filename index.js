const areaDoCodigo = document.querySelector('.codigo-wrapper')
const linguagem = document.querySelector('.linguagem')
const botao = document.querySelector('.botao')

botao.addEventListener('click', () => {
    let codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem() {
    let codigo = areaDoCodigo.querySelector('code')
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}
