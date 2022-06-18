import { createRoot } from "react-dom/client";
import App from "./App";
import "~~assets/css/css_reset.css";
import "~~assets/css/tailwind.css";

// ===============================================================
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
