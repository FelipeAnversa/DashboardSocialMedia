import { Card, CardContent, Stack, Typography, Box, CardActionArea } from "@mui/material";
import iconUp from '../../images/icon-up.svg';
import iconDown from '../../images/icon-down.svg';

export default function CardPrincipal({ icon, arroba, quantidade, diario, nome }) {
    const isPositive = diario > 0;
    const imagemStatus = isPositive ? iconUp : iconDown;
    const corStatus = isPositive ? 'cores2.green.main' : 'cores2.red.main';
    const definirCor = (nome) => {
        let cor;
        switch (nome) {
            case 'facebook':
                cor = 'hsl(208, 92%, 53%)';
                break;
            case 'youtube':
                cor = 'hsl(348, 97%, 39%)';
                break;
            case 'twitter':
                cor = 'hsl(203, 89%, 53%)';
                break;
            case 'instagram':
                cor = "linear-gradient(to right, hsl(37, 97%, 70%), hsl(5, 77%, 71%), hsl(329, 70%, 58%))";
                break
            default:
                return 'grey';
            }
            return cor;
        }
    let corBox = definirCor(nome);
    return (
        <Stack
            direction="column"
            alignItems="center"
        >
            <Card 
                sx={{ 
                    margin: '1rem',
                    bgcolor: 'cores.cardbg',
                    textAlign: 'center',
                    borderRadius: 2,
                    minWidth: 250
                }}
            >
                <Box 
                    sx={{ 
                        width: "100%", 
                        height: "4px",
                        background: corBox, 
                        position: 'relative',
                        zIndex: 1
                    }} 
                />
                <CardActionArea>
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
                </CardActionArea>
            </Card>
        </Stack>
    );
}