import { Card, CardContent, Stack, Typography, Box } from "@mui/material";
import iconUp from '../../images/icon-up.svg';
import iconDown from '../../images/icon-down.svg';

export default function CardPrincipal({ icon, arroba, quantidade, diario }) {
    const isPositive = diario > 0;
    const imagemStatus = isPositive ? iconUp : iconDown;
    const corStatus = isPositive ? 'cores2.green.main' : 'cores2.red.main';
    return (
        <Card 
            sx={{ 
                margin: '0 1rem',
                bgcolor: 'cores.cardbg',
                textAlign: 'center',
                borderRadius: 2,
                minWidth: 250
            }}
        >
            <CardContent>
                <Stack 
                    direction="row" 
                    spacing={1} 
                    justifyContent="center" 
                    alignItems="center" 
                    mb={2}
                >
                    <Box 
                        component="img" 
                        src={icon} 
                        alt={"redeSocial"} 
                        sx={{ 
                            width: 20, 
                            height: 20 
                        }} 
                    />
                    <Typography 
                        variant="body2" 
                        color="cores.text" 
                        sx={{ 
                            fontWeight: 'bold' 
                        }}
                    >
                        {arroba}
                    </Typography>
                </Stack>
                <Typography 
                    variant="h3" 
                    color="cores.text2" 
                    sx={{ 
                        fontWeight: 700 
                    }}
                >
                    {quantidade}
                </Typography>
                <Typography 
                    variant="overline" 
                    display="block" 
                    color="cores.text"
                    sx={{ 
                        letterSpacing: 5, 
                        mb: 3, 
                        opacity: 0.7 
                    }}
                >
                    {quantidade === 8239 ? 'Subscribers' : 'Followers'}
                </Typography>
                <Stack 
                    direction="row" 
                    spacing={0.5} 
                    justifyContent="center" 
                    alignItems="center"
                >
                    <Box 
                        component="img" 
                        src={imagemStatus} 
                        sx={{ 
                            width: 8, 
                            height: 8 
                        }} 
                    />
                    <Typography 
                        variant="caption" 
                        sx={{ 
                            color: corStatus, 
                            fontWeight: 'bold' 
                        }}
                    >
                        {Math.abs(diario)} Today
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}