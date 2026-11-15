import { useEffect, useState } from 'react';

// 6. Mellékhatások: useEffect
// Az effekt a megjelenítés után fut le; itt kapcsolódunk "külső" rendszerekhez
// (időzítő, hálózati kérés, böngésző API).
function Ora() {
  const [most, setMost] = useState(new Date());

  useEffect(() => {
    const idozito = setInterval(() => setMost(new Date()), 1000);

    // A visszaadott függvény a takarítás: a komponens eltávolításakor fut le.
    // Enélkül az időzítő tovább futna (memóriaszivárgás).
    return () => clearInterval(idozito);
  }, []); // Üres függőségi tömb: az effekt csak az első megjelenítéskor indul el.

  return <p>A pontos idő: {most.toLocaleTimeString('hu-HU')}</p>;
}

export default Ora;
