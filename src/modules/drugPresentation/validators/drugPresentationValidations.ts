import { z } from "zod";

export const drugPresentationSchema = z.object({
    identificador: z.string().optional(),
    descripcion: z.string().min(1, "La descripcion es requerido"),
    logo: z.union([
        z.instanceof(File, { message: "El logo es requerido" })
            .refine(file => !file || file.size !== 0 || file.size <= 5000000, { message: "Max size exceeded" }),
        z.string().min(1, "El logo es requerido como texto") // to hold default image
    ])
        .refine(value => value instanceof File || typeof value === "string", {
            message: "Image is required"
        }),
});

// import { z } from "zod";

// export const ammunitionSchema = z.object({
//     identificador: z.string().optional(),
//     descripcion: z.string().min(1, "La descripción es requerida"),

//     logo: z
//         .array(
//             z.union([
//                 z
//                     .instanceof(File)
//                     .refine(file => file.size <= 5_000_000, { message: "Cada archivo debe pesar menos de 5 MB" }),
//                 z.string().min(1, "La imagen existente es requerida"),
//             ])
//         )
//         .min(1, "Debes subir al menos una imagen")
//         .refine(arr => arr.length > 0, { message: "Debes subir al menos una imagen" }),
// });

