import {createRoot} from "react-dom/client"
import App from "./app"
import "./index.css"
import {Provider} from "./context"
// hpREzgaFj3L072Ou
// api-key = e32908f372e0f99282d482708426fc72
let rootId = document.getElementById("root")
let root = createRoot(rootId)
root.render(
                <App />
)