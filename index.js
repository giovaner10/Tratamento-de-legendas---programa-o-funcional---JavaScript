const { join } = require('path')
const path = require('path')
const fn = require('./functions')

const simbolo = [ '.', '?', '-', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')']


const caminho =  path.join(__dirname, '..', 'legendas/legendas')

fn.lerDiretorio(caminho)
.then(fn.terminadoEm)
.then(fn.lerTodosArquivos)
.then(conteudo => conteudo.join(' '))
.then(conteudo => conteudo.split('\n'))
.then(fn.removerSeVazio)
.then(fn.removerSeIncluir('-->'))
.then(fn.removerSeNumero)
.then(fn.removerSimbolos(simbolo))
.then(conteudo => conteudo.join(' '))
.then(conteudo => conteudo.split(' '))
.then(fn.removerSeVazio)
.then(fn.removerSeNumero)
.then(agruparEContarPalavras)
.then(console.log)


function agruparEContarPalavras(palavras){
    return palavras.reduce((agrupamento, palavra) =>{
        const p = palavra.toLowerCase()
        if(agrupamento[p]){
            agrupamento[p] += 1
        }else{
            agrupamento[p] = 1
        }

        return agrupamento
    }, {})
}
