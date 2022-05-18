import { useState } from 'react';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  const [mount, setMount] = useState(false);

  function handleClick() { /*Funcion encargada de cambiar el estado */
    setMount(!mount);
    mount ? console.log('Component unmount') : console.log('Component mount');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lifecycle Functional Component React</h1>
        {/* Componente funcional */}
        {mount ? <FunctionalComponent className="App-component" /> : null}
        {/*Cambiar estado del componente  */}
        <button onClick={handleClick} className="App-button">{mount ? "Unmount" : "Mount"}</button>
      </header>
    </div>
  );
}

export default App;
