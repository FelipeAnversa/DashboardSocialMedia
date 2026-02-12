import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles'
import { FormControlLabel } from '@mui/material';

export default function TrocaTema({setTrocar, trocar}) {
    const Estilo = styled(Switch)(({ theme }) => ({
        width: 49,
        height: 24,
        padding: 0,
        margin: 8,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            marginTop: 2,
            marginLeft: 4.33,
            transitionDuration: '300ms',
            '&.Mui-checked': {
            transform: 'translateX(21px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundImage: "linear-gradient(to right, hsl(210, 79%, 56%), hsl(146, 68%, 55%))",
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '4px solid #fff',
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 20,
            height: 20,
        },
        '& .MuiSwitch-track': {
            borderRadius: 24 / 2,
            backgroundColor: "hsl(230, 22%, 74%)",
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
    }));
    return (
        <FormControlLabel 
            control={<Estilo 
                checked={trocar} 
                onChange={(e) => setTrocar(e.target.checked)}
            />} 
        />
    );
}