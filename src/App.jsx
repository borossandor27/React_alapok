import Kartya from './components/Kartya';
import Udvozles from './components/Udvozles';
import Szamlalo from './components/Szamlalo';
import BelepesiAllapot from './components/BelepesiAllapot';
import TeendoLista from './components/TeendoLista';
import Ora from './components/Ora';

// Az App a gyökérkomponens: ebből épül fel a teljes felület.
// Egy komponens egyetlen gyökérelemet adhat vissza; ha nem akarunk fölösleges
// <div>-et, használhatunk fragmentet: <> ... </>
function App() {
  return (
    <main>
      <h1>React alapok</h1>

      <Kartya cim="1. Komponens és props">
        <Udvozles nev="Alice" />
        <Udvozles nev="Bob" />
        <Udvozles />
      </Kartya>

      <Kartya cim="2. Állapot és eseménykezelés">
        <Szamlalo />
      </Kartya>

      <Kartya cim="3. Feltételes megjelenítés">
        <BelepesiAllapot />
      </Kartya>

      <Kartya cim="4. Lista és űrlap">
        <TeendoLista />
      </Kartya>

      <Kartya cim="5. Mellékhatás (useEffect)">
        <Ora />
      </Kartya>
    </main>
  );
}

export default App;
