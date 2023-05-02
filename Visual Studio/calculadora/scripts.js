function calculadora(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){//esse 'if' apaga os números da tela.
            document.getElementById('resultado').value = ''
        }
            if(valor === '+' || valor === '-' || valor ==='/' || valor === '*' || valor === '.'){
                document.getElementById('resultado').value += valor //esse 'if' concatena os operadores matemáticos.
            }
                if (valor === '='){ // 'if' para exibir o resultado na tela.
                    let  resultadoCalculadora = eval(document.getElementById('resultado').value) 
                        document.getElementById('resultado').value = resultadoCalculadora
                }
    }  else if(tipo === 'valor'){ // 'if' para concatenar os números na tela.
        document.getElementById('resultado').value += valor
    }
}