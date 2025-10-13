import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// Función para aplicar estilos a los elementos seleccionados
function getStyles(name: string, selectedValues: string[], theme: Theme) {
    return {
        fontWeight: selectedValues.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

// Componente genérico
interface MultiSelectProps {
    name: string;
    label: string;
    options: string[];
    control: any; // Recibe el control de react-hook-form
    defaultValues?: string[]; // Valores seleccionados por defecto
}

export const MultipleSelectButton: React.FC<MultiSelectProps> = ({ name, label, options, control, defaultValues = [] }) => {
    const theme = useTheme();

    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id={`${name}-label`}>{label}</InputLabel>

            <Controller
                name={name}
                control={control}
                defaultValue={defaultValues} // Valores por defecto
                render={({ field }) => (
                    <Select
                        {...field}
                        labelId={`${name}-label`}
                        multiple
                        input={<OutlinedInput label={label} />}
                        MenuProps={MenuProps}
                        onChange={(event) => {
                            field.onChange(event.target.value);
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option} style={getStyles(option, field.value, theme)}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </FormControl>
    );
};
