import { createRoot } from "react-dom/client";

import App from "./App";

function main() {
  const container = document.getElementById("root") as HTMLElement;
  const root = createRoot(container);
  root.render(<App />);
}

main();

export default main;
