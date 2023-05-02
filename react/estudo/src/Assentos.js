import { useState } from "react";

const AssentosOnibus = (props) => {
    const [disabled, setDisabled] = useState(false);
    const HandleClick = () => {
        setDisabled(true);
    }
    return (
        <button type="button" className="assento" onClick={HandleClick}>
            {disabled ? 'X' : props.pos}
        </button>
    )
}

const Fileira = (props) => {
    return (
        <div className="fileira">
            {[0, 1, 2, 3].map((pos, index) => (
                <AssentosOnibus key={index} pos={props.de + pos} />
            ))}
        </div>
    )
}

export const Assentos = () => {
    return (
        <div className="container">
            {[1, 5, 9, 13, 17].map((pos, index) => (
            <Fileira key={index} de={pos} />
            ))}
        </div>
        
    )
}