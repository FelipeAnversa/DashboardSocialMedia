import Dashboard from "./Dashboard"
import { CssBaseline } from "@mui/material";
import { themeLight } from "./theme/themeLight";
import { themeDark } from "./theme/themeDark";
import { ThemeProvider } from "@mui/material/styles";
import { useState} from "react";

export default function App() {
  const [trocar, setTrocar] = useState(false);
  const temaAtivo = trocar ? themeDark : themeLight;
  return (
      <ThemeProvider theme={temaAtivo}>
          <CssBaseline />
          <Dashboard setTrocar={setTrocar} trocar={trocar} />
      </ThemeProvider>
  );
}
