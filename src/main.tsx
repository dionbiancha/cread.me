import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// function Main() {
//   useEffect(() => {
//     serviceWorkerRegistration.register();
//   }, []);

//   return (
//     <div>
//       <App />
//       <button
//         onClick={() =>
//           window.prompt("Pressione 'Adicionar' para instalar esta PWA")
//         }
//       >
//         Instalar
//       </button>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(<App />);
