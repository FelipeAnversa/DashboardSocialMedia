import { 
    Stack,
    Typography,
    Box,
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
                direction={{ xs: "column", sm: "row" }}
                sx={{ width: "100%", px: 4 }}
                minHeight="30vh"
                bgcolor="cores.topbg"
            >
                <Stack sx={{ alignItems: "flex-start", width: { xs: "100%", sm: "auto" } }}>
                    <Typography sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, fontWeight: 'bold'}} color="cores.text2">
                        <b>Social Media Dashboard</b>
                    </Typography>
                    <Typography color="cores.text">
                        <b>Total Followers: 23,004</b>
                    </Typography>
                </Stack>
                <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%", height: "1px", bgcolor: "cores.text", my: -10 }} />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent={{ xs: "space-between", sm: "center" }} 
                    alignItems="center"
                    sx={{ width: { xs: "100%", sm: "auto" } }} 
                >
                    <Typography sx={{ color: "cores.text3", fontWeight: 'bold' }}>Dark Mode</Typography>
                    <TrocaTema setTrocar={setTrocar} trocar={trocar}/>
                </Stack>
            </Stack>
            <Stack
                alignItems="center"
                position="relative"
                width="100%"
                sx={{
                    bottom: { xs: "3vh", sm: "5rem" }
                }}
            >
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                >
                    <CardPrincipal icon={facebook} arroba={"@nathanf"} quantidade={1987} diario={12} nome={"facebook"} />
                    <CardPrincipal icon={twitter} arroba={"@nathanf"} quantidade={1044} diario={99} nome={"twitter"} />
                    <CardPrincipal icon={instagram} arroba={"@realnathanf"} quantidade={"11k"} diario={1099} nome={"instagram"} />
                    <CardPrincipal icon={youtube} arroba={"Nathan F."} quantidade={8239} diario={-144} nome={"youtube"} />
                </Stack>
                <Stack
                    alignItems="center"
                >
                    <Stack
                    >
                        <Typography
                            variant="h5"
                            color="cores.text3"
                            ml='1rem'
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
            </Stack>
        </Stack>
    );
}