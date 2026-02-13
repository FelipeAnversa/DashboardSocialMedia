import { createTheme } from "@mui/material/styles";
import InterRegular from "../../Inter/Inter-VariableFont_opsz,wght.ttf";

export const themeDark = createTheme({
    palette: {
        cores: {
            bg: "hsl(230, 17%, 14%)",
            topbg: "hsl(232, 19%, 15%)",
            cardbg: "hsl(228, 28%, 20%)",
            text: "hsl(230, 22%, 74%)",
            text2: "hsl(0, 100%, 100%)",
            text3: "hsl(0, 100%, 100%)",
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