import React from "react";
// import Button from './Button';
const showEvent = (e) => {
  console.log("botão clicado");
  console.log(e)
}
const buttonA =<button onClick={showEvent}>Mostrar botão</button>
const App = () => {
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      {buttonA}
    </div>
  );
};

export default App;