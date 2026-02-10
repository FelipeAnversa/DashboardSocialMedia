import Dashboard from "./Dashboard"
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme.js";
import { ThemeProvider } from "@mui/material/styles";

export default function App() {
  return (
    <ThemeProvider theme ={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  )
}
