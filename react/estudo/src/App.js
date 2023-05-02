import { createContext, useState, useContext } from "react";
import { Formulario } from "./Formulario";
import Voos from "./voos";
import { Assentos } from "./Assentos";
import { ViaCEP } from "./viaCEP";
import { Fonts } from "./Fonts";

const Titulo = () => (
    <h1>ola mundo</h1>
   );

const Button = (props) => {
  const handleClick = () => {
    console.log('clickou')
  }
  return (
    <button onClick={handleClick} type="button">{props.label}</button>
  )
}

const ListItem = ({ label }) => (
    <li>{label}</li>
  )

const Lista = () => {
  const Bolo = [
    'colar os ovos',
    'colocar o açúcar',
    'colocar a manteiga',
    'colocar a farinha',
    'misturar tudo e assar'
  ];

  return (
    <ul>
      {Bolo.map((valor, index) => (
        <ListItem key={`item-${index}`} label={valor} />
      ))}
    </ul>
  )
};

export const ThemeContext = createContext({});

export const useThemeContext = () => useContext(ThemeContext);

const App = () => {
  const [font, setFont] = useState('arial');

  const labelBotal = 'entre aqui';

  return (
    <ThemeContext.Provider value={{ color: 'blue', font, setFont }}>
      <div className="App">
        <Titulo />
        <Formulario />
        <Fonts />
        <ViaCEP />
        <Assentos />
        <Button label={labelBotal} />
        <Voos />
        <Lista />
        <div>
          <p>isso é um teste</p>
        </div>
      </div>
    </ThemeContext.Provider>
  )
};

export default App;
