import { useEffect, useState } from "react"

export const ViaCEP = () => {
    const [ endereco, setEndereco ] = useState({})

    const fetchCEP = (cep) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(dados => dados.json())
        .then(endereco => {
            setEndereco(endereco)
        })  
    }

    useEffect(() => {
        fetchCEP('01001000')
    }, [])

    return (
        <table>
            <tbody>
                <tr>
                    <td>Bairro:</td>
                    <td>{endereco.bairro}</td>
                </tr>
                <tr>
                    <td>Complemento:</td>
                    <td>{endereco.complemento}</td>
                </tr>
                <tr>
                    <td>UF:</td>
                    <td>{endereco.uf}</td>
                </tr>
                <tr>
                    <td>Localidade:</td>
                    <td>{endereco.localidade}</td>
                </tr>
            </tbody>
        </table>
    )
}   