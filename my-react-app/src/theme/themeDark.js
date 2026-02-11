import { createTheme } from "@mui/material/styles";

export const themeDark = createTheme({
    palette: {
        cores: {
            bg: "hsl(230, 17%, 14%)",
            topbg: "hsl(232, 19%, 15%)",
            cardbg: "hsl(228, 28%, 20%)",
            text: "hsl(230, 22%, 74%)",
            text2: "hsl(0, 100%, 100%)",
        },
        cores2: {
            green: {
                main: "hsl(163, 72%, 41%)",
            },
            red: {
                main: "hsl(356, 69%, 56%)",
                youtube: "hsl(348, 97%, 39%)",
            },
            blue: {
                facebook: "hsl(208, 92%, 53%)",
                twitter: "hsl(203, 89%, 53%)",
            },
            instagram: {
                first: "hsl(37, 97%, 70%)",
                second: "hsl(5, 77%, 71%)",
                third: "hsl(329, 70%, 58%)",
            },
        },
    },
});