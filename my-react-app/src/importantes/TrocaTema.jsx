import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

export default function TrocaTema({setTrocar, trocar}) {
    return (
        <FormControlLabel 
            control={<Switch 
                checked={trocar} 
                onChange={(e) => setTrocar(e.target.checked)}
            />} 
            label="Dark Mode"
            sx={{
                color: 'cores.text2',
            }} 
        />
    );
}