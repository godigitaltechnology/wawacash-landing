import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import './i18n'; // Importez votre configuration i18n

createRoot(document.getElementById("root")!).render(<App />);