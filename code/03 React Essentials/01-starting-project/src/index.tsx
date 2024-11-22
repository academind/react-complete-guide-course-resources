import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

const entryPoint = document.getElementById("root")!;
ReactDOM.createRoot(entryPoint).render(<App />);
