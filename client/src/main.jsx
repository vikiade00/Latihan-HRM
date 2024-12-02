import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { KarirProvider } from "./context/karirContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <KarirProvider>
        <App />
      </KarirProvider>
    </BrowserRouter>
  </StrictMode>
);
