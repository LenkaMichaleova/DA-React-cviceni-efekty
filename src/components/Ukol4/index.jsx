import { useEffect, useState } from "react";
/*
Zadání 1: Vytvořte v této komponentě stav `nacteno`, který bude mít výchozí hodnotu `false`.
  Dále vytvořte efekt, který po 3 vteřinách od prvního načtení komponenty nastaví stav `nacteno` na `true`.
  Představte si to jako simulaci načítání dat z API, které bude trvat zhruba 3 vteřiny.
Zadání 2: Pomocí ternárního operátoru zobrazte text `Načítám…` nebo `Hotovo!` podle hodnoty
  ve stavu `nacteno`.
*/

export const Ukol4 = () => {
  const [nacteno, setNacteno] = useState(false)

  useEffect(() => {
    setTimeout(() => setNacteno(true), 3000)
  }, [])


  return (
    <>
      {!nacteno ? <p>Načítám…</p> : <p>Hotovo</p>}
    </>
  );
};
