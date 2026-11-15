import { useState } from 'react';

// 3. Állapot (state) és eseménykezelés
// A useState egy értéket és egy beállító függvényt ad vissza.
// A beállító függvény hívása újrarendereli a komponenst.
function Szamlalo() {
  const [ertek, setErtek] = useState(0);

  // Ha az új érték az előzőtől függ, függvényt adunk át (funkcionális frissítés),
  // így mindig a legfrissebb állapotból számolunk.
  const novel = () => setErtek((elozo) => elozo + 1);
  const csokkent = () => setErtek((elozo) => elozo - 1);

  return (
    <div>
      <p>Aktuális érték: {ertek}</p>
      {/* Az eseménykezelőnek a függvényt adjuk át, nem hívjuk meg: onClick={novel} */}
      <button onClick={csokkent}>-1</button>
      <button onClick={novel}>+1</button>
      <button onClick={() => setErtek(0)}>Nullázás</button>
    </div>
  );
}

export default Szamlalo;
