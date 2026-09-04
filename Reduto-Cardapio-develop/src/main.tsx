
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  console.log("Iniciou o App React"), // <- para debug
  createRoot(document.getElementById("root")!).render(<App />);
  