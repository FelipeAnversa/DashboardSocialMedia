import { Box, Card, CardContent, Typography, Stack, CardActionArea } from "@mui/material";
import iconUp from '../../images/icon-up.svg';
import iconDown from '../../images/icon-down.svg';

export default function CardSecundario({ frase, icon, numero, valor }) {
    const isPositive = valor > 0;
    const corStatus = isPositive ? 'cores2.green.main' : 'cores2.red.main';

    return (
        <Card 
            sx={{ 
                margin: '1rem',
                bgcolor: 'cores.cardbg',
                borderRadius: 2,
                minWidth: 250,
            }}
        >
            <CardActionArea>
                <CardContent sx={{ p: 3 }}>
                    <Stack spacing={3}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="body2" color="cores.text" sx={{ fontWeight: 'bold' }}>
                                {frase}
                            </Typography>
                            <Box 
                                component="img" 
                                src={icon} 
                                alt="rede social" 
                                sx={{ width: 20, height: 20 }} 
                            />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                            <Typography variant="h4" color="cores.text2" sx={{ fontWeight: 'bold' }}>
                                {numero}
                            </Typography>
                            <Stack direction="row" spacing={0.5} alignItems="center">
                                <Box 
                                    component="img" 
                                    src={isPositive ? iconUp : iconDown} 
                                    sx={{ width: 8, height: 8 }} 
                                />
                                <Typography 
                                    variant="caption" 
                                    sx={{ color: corStatus, fontWeight: 'bold' }}
                                >
                                    {Math.abs(valor)}%
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}