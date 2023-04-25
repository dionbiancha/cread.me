import React, { useEffect } from "react";
import "./App.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function App() {
  useEffect(() => {
    serviceWorkerRegistration.register();
  }, []);

  return <div>Hello world</div>;
}

export default App;
