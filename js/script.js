
function calcular() {
    let n1 = Number(document.getElementById('campo01').value)
    let n2 = Number(document.getElementById('input02').value)
    let n3 = Number(document.getElementById('input03').value)
    let result = document.getElementById('result')
    let info = document.getElementById('info')
    const media = ((n1+n2+n3) / 3).toFixed(2)
    const aprovado = `🟢 Aprovado 🟢 `
    console.log(media)

    if(n1 == '' || n2 == '' || n3 == ''){
        alert('Preencha todos os campos')

    }else{

        if(media > 0 && media < 3.5){

            result.textContent = `Média: ${media}`
            info.textContent = `🔴 Reprovado 🔴`
            limparCampos(n1, n2, n3)

        }else if(media >= 3.5 && media <= 5.8){

            result.textContent = `Média: ${media}`
            info.textContent = `🟡 Recuperação 🟡`
            limparCampos()

        }else if(media >= 6 && media <= 10){

            result.textContent = `Média: ${media}`
            info.textContent = aprovado
            limparCampos()

        }else{

            result.textContent = `Média: ${parseInt(media)}`
            info.textContent = aprovado
            limparCampos()
        }


    }

        
}

function limparCampos(){
    document.getElementById('campo01').value = ''
    document.getElementById('input02').value = ''
    document.getElementById('input03').value = ''
}