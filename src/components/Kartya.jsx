// 2. Kompozíció és a children prop
// A nyitó és záró tag közé írt tartalmat a komponens a children propban kapja meg.
// Így készíthetünk újrahasznosítható "keretet" tetszőleges tartalomhoz.
function Kartya({ cim, children }) {
  return (
    <section className="kartya">
      <h2>{cim}</h2>
      {children}
    </section>
  );
}

export default Kartya;
