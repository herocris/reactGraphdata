import { z } from "zod";

export const confiscationSchema = z.object({
    identificador: z.string().optional(),
    fecha: z.string().min(1, "La date es requerido"),
    observacion: z.string().min(1, "La observation es requerido"),
    direccion: z.string().min(1, "La direction es requerido"),
    departamento: z.string().min(1, "La department es requerido"),
    municipalidad: z.string().min(1, "La municipality es requerido"),
    latitud: z.number().min(1, "La municipality es requerido"),
    longitud: z.number().min(1, "La length es requerido"),
    
});

