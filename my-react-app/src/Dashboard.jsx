import { 
    Stack,
    Typography,
    Box,
    Switch,
} from "@mui/material"

export default function Dashboard() {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            width="100%"
            py="4"
            bgcolor="black"
        >
            <Box
                bgcolor="grey"
                padding="100px"
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                >
                    <Stack>
                        <Typography
                        ><b>Social Media Dashboard</b></Typography>
                        <Typography
                        ><b>Total Followers: 23,004</b></Typography>
                    </Stack>
                    <Switch></Switch>
                </Stack>
                <Typography
                    textAlign="left"
                ><b>Overview - Today</b></Typography>
            </Box>
        </Stack>
    );
}