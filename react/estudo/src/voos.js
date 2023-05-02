import { useContext } from "react";
import { useThemeContext } from "./App";

const voosDisponiveis = [
    {
        id: '123',
        title: 'Volta ter. 19 de Julho',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas de 79 cm'
            },
            {
                id:'131',
                title: 'Saída USB no assento'
            },
            {
                id: '130',
                title: 'Estimativa de emissões de carbono: 83 kg'
            },
        ]
    },
    {
        id: '122',
        title: 'Volta ter. 13:00 - 14:15',
        details: [
            {
                id: '132',
                title: 'Espaço para pernas de 79 cm'
            },
            {
                id:'131',
                title: 'Saída USB no assento'
            },
            {
                id: '130',
                title: 'Estimativa de emissões de carbono: 83 kg'
            },
        ]
    }
]

function ItemVooDetails({ details }) {
    const value = useThemeContext();

    return (
        <ul>
            {details.map(details => (
                <li style={{color: value.color, fontFamily: value.font}} key={details.id}>{details.title}</li>
        ))}
        </ul>
    )
}

function ItemVoo(props) {
    return (
        <div className="voo">
            <header>
                <h3>
                    {props.title}
                </h3>
            </header>

            <div className="voo details">
                {props.children}
            </div>
        </div>
    )
}

function Voos() {
    return (
        <div className="voos">
            {voosDisponiveis.map(voo => (
                <ItemVoo key={voo.id} title={voo.title} >
                    <ItemVooDetails details={voo.details} />
                </ItemVoo>
            ))}
        </div>
    )
}

export default Voos;