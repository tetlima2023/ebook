let btn = document.querySelector('#enviar')

btn.addEventListener('click', event => {
    event.preventDefault()
    
    let name = document.querySelector('#nome').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value

    if(name == '' || altura == '' || peso == '') {
        alert('preencha os campos')
        return false
    }else if(altura < 0 || peso < 0) {
        alert('Os números não podem ser negativos!')
        return false
    }

    altura = parseFloat(altura), peso = parseFloat(peso)

    let alturaMetro = altura / 100
    
    let Imc = peso / (alturaMetro * alturaMetro)
    
    let classificacao = ''
    
        if(Imc < 16){
            classificacao = 'Baixo peso muito grave';
           
           } else if(Imc >= 16 && Imc <= 16.99){
            classificacao = 'Baixo peso grave';
           
           } else if(Imc >= 17 && Imc <= 18.49){
            classificacao = 'Baixo peso';
           
           } else if(Imc >= 18.50 && Imc <= 24.99){
            classificacao = 'Peso normal';
           
           } else if(Imc >= 25 && Imc <= 29.99){
            classificacao = 'Sobrepeso';
           
           } else if(Imc >= 30 && Imc <= 34.99){
            classificacao = 'Obesidade grau I';
           
           } else if(Imc >= 35 && Imc <= 39.99){
            classificacao = 'Obesidade grau II';
           
           } else if( Imc > 40) {
            classificacao = 'Obesidade grau III';
           }

    let result = document.querySelector('#resultado')

    result.textContent = ` ${name} possui índice de massa corporal igual a ${Imc.toFixed(2)} sendo classificado como: ${classificacao}`
        })