const { join } = require('path')
const path = require('path')
const fn = require('./functions')

const simbolo = [ '.', '?', '-', '"', '♪', '_']


const caminho =  path.join(__dirname, '..', 'legendas/legendas')

fn.lerDiretorio(caminho)
.then(fn.terminadoEm)
.then(fn.lerTodosArquivos)
.then(conteudo => conteudo.join('\n'))
.then(conteudo => conteudo.split('\n'))
.then(fn.removerSeVazio)
.then(fn.removerSeIncluir('-->'))
.then(fn.removerSeNumero)
.then(console.log)

