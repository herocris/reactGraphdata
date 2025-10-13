import { z } from "zod";

export const permissionSchema = z.object({
    identificador: z.string().optional(),
    nombre: z.string().min(1, "El nombre es requerido"),
});
