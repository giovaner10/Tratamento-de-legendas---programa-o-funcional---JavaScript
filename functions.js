const fs = require('fs')
const path = require('path')


function lerDiretorio(caminho) {

    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (e) {
            reject(e)
        }

    })

}

function terminadoEm(array) {
    return array.filter(el => el.endsWith('.srt'))
}

function lerArquivo(caminho) {

    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())

        } catch (e) {

            reject(e)

        }
    })
}

function lerTodosArquivos(caminhos) {
    return Promise.all(caminhos.map(lerArquivo))
}

function removerSeVazio(array) {
    return array.filter(el => el.trim())
}


function removerSeIncluir(padraoTexto) {
    return (array) => {
        return array.filter(el => !el.includes(padraoTexto))
    }
}

function removerSeNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}


module.exports = {
    lerDiretorio,
    terminadoEm,
    lerTodosArquivos,
    removerSeVazio,
    removerSeIncluir,
    removerSeNumero
}