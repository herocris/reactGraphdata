import { z } from "zod";

const passwordSchema = z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe incluir al menos una letra mayúscula")
    .regex(/[a-z]/, "Debe incluir al menos una letra minúscula")
    .regex(/[0-9]/, "Debe incluir al menos un número")
    .regex(/[@$!%*?&_]/, "Debe incluir al menos un carácter especial (@, $, !, %, *, ?, &, _)");

export const authLoginSchema = z.object({
    email: z.string().email("El correo no es de formato valido"),
    password: z.string().min(1, "La contraseña es obligatoria"),
});
export const authRegisterSchema = z.object({
    name: z.string().min(1, "El nombre no es de formato valido"),
    email: z.string().email("El correo no es de formato valido"),
    password: passwordSchema,
    passwordConfirmation: z.string().min(1, "La contraseña es obligatoria"),
}).refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"], // Marca el error en el campo correcto
    message: "Las contraseñas no coinciden",
});
