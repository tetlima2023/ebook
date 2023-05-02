let altura = 0, largura = 0, vidas = 1, tempo = 100

let tempoMosquito = 1500

let dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')

if(dificuldade === 'facil'){
    tempoMosquito = 1500

}else if(dificuldade === 'normal'){
    tempoMosquito = 1000

}else if(dificuldade === 'dificil'){
    tempoMosquito = 750
}

function tamanhoDinamicoDaTela(){
    altura = window.innerHeight
    largura = window.innerWidth
}
tamanhoDinamicoDaTela()

function posicaoAleatoria(){
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        if(vidas > 3){
            window.location.href="gameOver.html"
            
        }else{
            document.getElementById('v' + vidas).src="fotos/coracao_vazio.png"
            vidas++
        }
    }

    const posicaoX = Math.floor(Math.random() * (largura - 90))
    const posicaoY = Math.floor(Math.random() * (altura - 90))
    
    var mosca = document.createElement('img')
    mosca.src = 'fotos/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoVariavel()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosca)
}

     let criaMosca = setInterval(function(){
        posicaoAleatoria()
    }, tempoMosquito)
    
    function tamanhoAleatorio(){
        let classesMosca = Math.floor(Math.random() * 3)
        switch(classesMosca){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
        }
    }

function ladoVariavel(){
    let classesMosca = Math.floor(Math.random() * 2)
    switch(classesMosca){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}

document.getElementById('cronometro').innerHTML = tempo
let cronometro = setInterval(() => {
    tempo -= 1
    if(tempo < 0){
        window.location.href="vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo 
    }
}, 1000);