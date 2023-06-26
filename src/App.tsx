import { useState } from "react";
import ctrlUpLogo from "/ctrlup.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://ctrlup.dev" target="_blank">
          <img src={ctrlUpLogo} className="logo" alt="Ctrl Up logo" />
        </a>
      </div>
      <h1>Ctrl Up</h1>
      <p>
        <i>Des outils pour les nuls</i> suivi{" "}
        <i>Déploiement les doigts dans le nez</i>
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 3)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Ctrl Up logo to learn more</p>
    </>
  );
}

export default App;
