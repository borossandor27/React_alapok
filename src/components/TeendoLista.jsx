import { useState } from 'react';

// 5. Lista megjelenítése, kulcsok (key) és vezérelt űrlapmező
function TeendoLista() {
  const [teendok, setTeendok] = useState([
    { id: 1, szoveg: 'JSX megismerése' },
    { id: 2, szoveg: 'Első komponens megírása' },
  ]);
  const [ujSzoveg, setUjSzoveg] = useState('');

  const hozzaad = (esemeny) => {
    // Megakadályozzuk, hogy az űrlap elküldése újratöltse az oldalt.
    esemeny.preventDefault();
    const szoveg = ujSzoveg.trim();
    if (szoveg === '') return;

    // Az állapotot nem módosítjuk helyben (nincs push!), hanem új tömböt adunk át.
    setTeendok([...teendok, { id: Date.now(), szoveg }]);
    setUjSzoveg('');
  };

  const torol = (id) => setTeendok(teendok.filter((teendo) => teendo.id !== id));

  return (
    <div>
      <form onSubmit={hozzaad}>
        <label>
          Új teendő:{' '}
          {/* Vezérelt mező: az értékét a state adja, a változást az onChange írja vissza. */}
          <input value={ujSzoveg} onChange={(esemeny) => setUjSzoveg(esemeny.target.value)} />
        </label>
        <button type="submit">Hozzáadás</button>
      </form>

      {teendok.length === 0 && <p>Nincs több teendő.</p>}
      <ul>
        {/* A key egyedi és stabil azonosító legyen – ne a tömbindex,
            mert törlésnél, rendezésnél az index megváltozik. */}
        {teendok.map((teendo) => (
          <li key={teendo.id}>
            {teendo.szoveg} <button onClick={() => torol(teendo.id)}>Törlés</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeendoLista;
