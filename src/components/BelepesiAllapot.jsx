import { useState } from 'react';

// 4. Feltételes megjelenítés
// JSX-ben nincs if utasítás, helyette a ? : operátort vagy az && operátort használjuk.
function BelepesiAllapot() {
  const [belepve, setBelepve] = useState(false);

  return (
    <div>
      {belepve ? <p>Üdv újra itt!</p> : <p>Kérlek, jelentkezz be!</p>}
      <button onClick={() => setBelepve(!belepve)}>
        {belepve ? 'Kijelentkezés' : 'Bejelentkezés'}
      </button>
      {/* Az && csak akkor jeleníti meg a jobb oldalt, ha a bal oldal igaz. */}
      {belepve && <p>Ezt csak bejelentkezve látod.</p>}
    </div>
  );
}

export default BelepesiAllapot;
