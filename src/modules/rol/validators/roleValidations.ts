import { z } from "zod";

export const roleSchema = z.object({
    identificador: z.string().optional(),
    nombre: z.string().min(1, "El nombre es requerido"),
    permisos: z.array(z.any()).optional(),
});
