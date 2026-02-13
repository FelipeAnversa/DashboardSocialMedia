import { createTheme } from "@mui/material/styles";
import InterRegular from "../../Inter/Inter-VariableFont_opsz,wght.ttf";

export const themeLight = createTheme({
    palette: {
        cores: {
            bg: "hsl(0, 100%, 100%)",
            topbg: "hsl(225, 100%, 98%)",
            cardbg: "hsl(227, 47%, 96%)",
            text: "hsl(228, 12%, 44%)",
            text2: "hsl(230, 17%, 14%)",
            text3: "hsl(228, 12%, 44%)",
        },
        cores2: {
            green: {
                main: "hsl(163, 72%, 41%)",
            },
            red: {
                main: "hsl(356, 69%, 56%)",
            },
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'Inter',
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Inter';
                    src: url(${InterRegular}) format('truetype');
                }
            `,
        },
    },
});