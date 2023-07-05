async function sortear() {
    //pegar o total de resultados
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value)
    console.log(totalResultados)

    //pegar o menor valor
    const menorValor = Number(document.querySelector('#menorValorInput').value)
    console.log(menorValor)

    //pegar o maior valor
    const maiorValor = Number(document.querySelector('#maiorValorInput').value)
    console.log(maiorValor)

    for (let j = 0; j < 20; j++) {

        //limpar resultados antigos no HTML existente 
        const elementoHTMLResultValues = document.querySelector('.results-values')
        elementoHTMLResultValues.innerHTML = ''


        for (let i = 0; i < totalResultados; i++) {

            //gerar um núemro aleatório entre o maior e menor valor
            const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor

            //gerar um elemento HTML para o resultado 
            const resultElements = document.createElement('div')
            resultElements.classList.add('result-value')
            resultElements.innerText = resultado

            //exibir o resultado no HTML
            elementoHTMLResultValues.append(resultElements)

        }

        await wait(20)

    }

}

function wait(tempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}



