
class Despesas {
    constructor (ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados() {
        for(let i in this){
            if(this[i] === undefined || this[i] === '' || this[i] === null) {
                return false
            }
        }
            return true
    }
}
class Bd {
    constructor() {
        let id = localStorage.getItem('id')
        if(id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) +1
    }

    gravar(d) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(d))

        localStorage.setItem('id', id)
    }

    recuperaTodosRegristros() {
        let despesa = []

        let id = localStorage.getItem('id')

        for(let i = 1; i < id; i++) {
            let despesa = JSON.parse(localStorage.getItem(i))

            if(despesa === null){
                continue
            } 
            despesa.push(despesas)
        }
        return despesa
    }
}
let bd = new Bd()

let btn = document.querySelector('#btn')

    btn.addEventListener('click', function() {
       let ano = document.querySelector('#ano').value
       let mes = document.querySelector('#mes').value
       let dia = document.querySelector('#dia').value
       let tipo = document.querySelector('#tipo').value
       let descricao = document.querySelector('#descricao').value
       let valor = document.querySelector('#valor').value

       let despesas = new Despesas(
           ano,
           mes,
           dia,
           tipo,
           descricao,
           valor,
       )

       if(despesas.validarDados()){
           console.log('dados validos')
           bd.gravar(despesas)
           console.log(despesas)
       } else {
        alert('preencha todos os campos')
        console.log('dados invalidos')
       }

       function carregaListasDespesas() {
        let despesa = []
            despesa = bd.recuperaTodosRegristros()
       }
    })