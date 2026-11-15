# React alapok

Bevezető példák a React legfontosabb alapfogalmaihoz. Minden fogalomhoz egy rövid,
magyarázó megjegyzésekkel ellátott komponens tartozik az `src/components` mappában.

## Indítás

Szükséges: [Node.js](https://nodejs.org/) (LTS verzió).

```bash
npm install
```

```bash
npm start
```

Az alkalmazás a <http://localhost:3000> címen nyílik meg, és mentéskor automatikusan frissül.

További parancsok:

| Parancs         | Mit csinál                                                   |
| --------------- | ------------------------------------------------------------ |
| `npm test`      | Lefuttatja a teszteket (figyelő módban)                      |
| `npm run build` | Elkészíti az éles, optimalizált változatot a `build` mappába |

## A projekt felépítése

| Fájl                | Szerepe                                                            |
| ------------------- | ------------------------------------------------------------------ |
| `public/index.html` | Az egyetlen HTML oldal; a React a `<div id="root">` elembe rajzol  |
| `src/index.js`      | Belépési pont: itt jön létre a gyökér, és itt jelenik meg az `App` |
| `src/App.jsx`       | Gyökérkomponens, ebből épül fel a felület                          |
| `src/components/`   | A példakomponensek                                                 |
| `src/App.test.js`   | Tesztek (Jest + React Testing Library)                             |

## Példák

| # | Fogalom                                 | Fájl                                 |
| - | --------------------------------------- | ------------------------------------ |
| 1 | Komponens, props, alapértelmezett érték | `src/components/Udvozles.jsx`        |
| 2 | Kompozíció, `children` prop             | `src/components/Kartya.jsx`          |
| 3 | Állapot (`useState`), eseménykezelés    | `src/components/Szamlalo.jsx`        |
| 4 | Feltételes megjelenítés                 | `src/components/BelepesiAllapot.jsx` |
| 5 | Lista, `key`, vezérelt űrlapmező        | `src/components/TeendoLista.jsx`     |
| 6 | Mellékhatás (`useEffect`), takarítás    | `src/components/Ora.jsx`             |

## A legfontosabb szabályok röviden

- **JSX**: JavaScriptbe ágyazott, HTML-hez hasonló jelölés. Kapcsos zárójelek között
  tetszőleges JavaScript-kifejezés állhat: `{nev}`. A `class` helyett `className`,
  a `for` helyett `htmlFor` írandó, és minden elemet le kell zárni (`<br />`).
- **Komponens**: nagybetűvel kezdődő függvény, amely JSX-et ad vissza, egyetlen gyökérelemmel
  (vagy fragmenttel: `<>...</>`).
- **Props**: a szülőtől kapott, csak olvasható adatok. Az adat mindig fentről lefelé áramlik.
- **State**: a komponens saját, változó adata. Csak a beállító függvénnyel módosítható,
  közvetlenül soha; objektumnál és tömbnél mindig új példányt adunk át.
- **Hookok** (`useState`, `useEffect`, ...): csak a komponens legfelső szintjén hívhatók,
  feltételen vagy cikluson belül nem.
- **`key`**: listaelemeknél egyedi és stabil azonosító kell, hogy a React követni tudja az elemeket.
- **StrictMode**: fejlesztői módban a React szándékosan kétszer futtatja a komponenseket és az
  effekteket, hogy a hibák (például hiányzó takarítás) korán kiderüljenek. Éles változatban ez
  nem történik meg.

## Megjegyzés az eszközkészletről

A projekt [Create React App](https://create-react-app.dev/)-pel készült, amelyet a React csapata
2025 februárjában elavulttá nyilvánított, és már nem tart karban. Tanulásra a jelenlegi állapot
használható, de új projektet érdemes [Vite](https://vite.dev/)-tel (`npm create vite@latest`)
vagy egy keretrendszerrel (például Next.js) indítani.

## További olvasnivaló

- [A React hivatalos dokumentációja](https://react.dev/)
- [Gyors bevezető](https://react.dev/learn)
- [Gondolkodás Reactben](https://react.dev/learn/thinking-in-react)
