import { 
    Stack,
    Typography,
} from "@mui/material"

import TrocaTema from "./importantes/TrocaTema";
import CardPrincipal from "./importantes/CardPrincipal";
import CardSecundario from "./importantes/CardSecundario";

import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";

export default function Dashboard({setTrocar, trocar}) {
    return (
        <Stack
            alignContent="center"
            minHeight="100vh"
            width="100%"
            py="4"
            bgcolor="cores.bg"
        >
            <Stack
                justifyContent="space-around"
                alignItems="center"
                direction="row"
                width="100%"
                minHeight="30vh"
                bgcolor="cores.topbg"
            >
                <Stack
                    sx={{
                        top: '0rem',
                    }}
                >
                    <Typography
                        variant="h4"
                        color="cores.text2"
                    ><b>Social Media Dashboard</b></Typography>
                    <Typography
                        color="cores.text"
                    ><b>Total Followers: 23,004</b></Typography>
                </Stack>
                <TrocaTema setTrocar={setTrocar} trocar={trocar}/>
            </Stack>
            <Stack
                alignItems="center"
            >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                >
                    <CardPrincipal icon={facebook} arroba={"@nathanf"} quantidade={1987} diario={12} />
                    <CardPrincipal icon={twitter} arroba={"@nathanf"} quantidade={1044} diario={99} />
                    <CardPrincipal icon={instagram} arroba={"@realnathanf"} quantidade={"11k"} diario={1099} />
                    <CardPrincipal icon={youtube} arroba={"Nathan F."} quantidade={8239} diario={-144} />
                </Stack>
                <Typography
                    variant="h4"
                    color="cores.text"
                    sx={{
                        fontWeight: "bold"
                    }}
                >
                    Overview - Today
                </Typography>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                >
                    <CardSecundario frase={"Page Views"} icon={facebook} numero={87} valor={3} />
                    <CardSecundario frase={"Likes"} icon={facebook} numero={52} valor={-2} />
                    <CardSecundario frase={"Likes"} icon={instagram} numero={5462} valor={2257} />
                    <CardSecundario frase={"Profile Views"} icon={instagram} numero={"52k"} valor={1375} />
                </Stack>
                <Stack p="5px" />
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                >
                    <CardSecundario frase={"Retweets"} icon={twitter} numero={117} valor={303} />
                    <CardSecundario frase={"Likes"} icon={twitter} numero={507} valor={553} />
                    <CardSecundario frase={"Likes"} icon={youtube} numero={107} valor={-19} />
                    <CardSecundario frase={"Total Views"} icon={youtube} numero={1407} valor={-12} />
                </Stack>
            </Stack>
        </Stack>
    );
}