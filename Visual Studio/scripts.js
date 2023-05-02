let btn = document.getElementById('send')

    btn.addEventListener('click', event => {
        event.preventDefault()

        text = document.getElementById('texto').value
        idadeForm = document.getElementById('idade').value
        pesoForm = document.getElementById('peso').value

        text =='' || idadeForm =='' || pesoForm =='' ? alert('cuidado') : console.log('tudo ok')

    let paragrafo = document.querySelector('#fundo')
    
    paragrafo.textContent = `ola ${text}, voce tem ${idadeForm} e ${pesoForm}`
    

            
    })  