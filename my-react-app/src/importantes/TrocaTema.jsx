import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { FormControlLabel } from '@mui/material';

const Estilo = styled(Switch)(({ theme }) => ({
    width: 49,
    height: 24,
    padding: 0,
    display: 'flex',
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(25px)', 
            color: theme.palette.mode === 'light' ? '#fff' : '#333', 
            '& + .MuiSwitch-track': {
                backgroundImage: "linear-gradient(to right, hsl(210, 79%, 56%), hsl(146, 68%, 55%))",
                opacity: 1,
                border: 0,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 20,
        height: 20,
        boxShadow: 'none',
    },
    '& .MuiSwitch-track': {
        borderRadius: 24 / 2,
        backgroundColor: "hsl(230, 22%, 74%)",
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'background-image'], {
            duration: 300,
        }),
    },
}));

export default function TrocaTema({ setTrocar, trocar }) {
    return (
        <FormControlLabel 
            sx={{ margin: 0 }}
            control={
                <Estilo 
                    checked={trocar} 
                    onChange={(e) => setTrocar(e.target.checked)}
                />
            } 
        />
    );
}