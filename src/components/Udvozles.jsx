// 1. Komponens és props
// A komponens egy függvény, amely JSX-et ad vissza. A neve mindig nagybetűvel kezdődik.
// A props csak olvasható: a komponens soha nem módosítja a kapott értékeket.
// A props objektumot a paraméterlistában érdemes szétbontani (destructuring),
// így alapértelmezett értéket is adhatunk.
function Udvozles({ nev = 'Vendég' }) {
  return <p>Szia, {nev}!</p>;
}

export default Udvozles;
