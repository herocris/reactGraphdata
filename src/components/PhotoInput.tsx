import { useRef, useState, useEffect } from "react";
import { Box, Avatar, Typography, IconButton, Tooltip, Zoom } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteIcon from "@mui/icons-material/Delete";
import { Controller } from "react-hook-form";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { FileUploadFieldProps } from "../shared/interfaces/sharedInterfaces";

const { VITE_LOCAL_PHOTOS_URL } = getEnvVariables();

export const PhotoInput = ({
    name,
    control,
    label = "Subir archivo",
    accept = "image/*",
    multiple = false
}: FileUploadFieldProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previews, setPreviews] = useState<string[]>([]);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                // Actualiza previews al cambiar el valor
                useEffect(() => {
                    if (!value) {//borrando archivos si en el value no viene nada
                        setPreviews([]);
                        return;
                    }
                    if (multiple && Array.isArray(value)) {//comprobando si es arreglo y si es multiple
                        const urls = value.map((file: File | string) => //iterando los archivos para guardar urls temporales en urls
                            file instanceof File
                                ? URL.createObjectURL(file)//si es File crea un url temporal para guardarlo en urls
                                : `${VITE_LOCAL_PHOTOS_URL}/${file}`//si es texto lo guarda en urls (viene de base de datos)
                        );
                        setPreviews(urls);//lo setea en previews
                        return () => urls.forEach(url => URL.revokeObjectURL(url));//revoka los urls temporales
                    } else if (value instanceof File) {//comprobando si es un solo archivo que viene de cliente y es File
                        const url = URL.createObjectURL(value);//crea un url temporal
                        setPreviews([url]);//lo setea en previews
                        return () => URL.revokeObjectURL(url);//revoka los url temporal
                    } else if (typeof value === "string" && value.length > 0) {//comprobando que la url de imagen viene de base de datos y es un unico archivo
                        setPreviews([`${VITE_LOCAL_PHOTOS_URL}/${value}`]);//lo setea en previews
                    }
                }, [value]);
                const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const files = e.target.files;//tomando archivos de e
                    if (!files) return;//comprobando si vienen archivos
                    const selectedFiles = Array.from(files);//crea un arreglo a partir de files
                    if (multiple) {//comprobando si es multiple o no; si lo es envia todos los archivos y si no solo uno
                        onChange(selectedFiles);
                    } else {
                        onChange(selectedFiles[0]);
                    }
                };
                const handleRemove = (index?: number) => {
                    if (multiple && Array.isArray(value)) {//comprobando si es arreglo y si es multiple
                        const updatedFiles = value.filter((_: any, i: number) => i !== index);//quitando archivo de acuerdo al index proporcionado y actualizando la lista de archivos para volverla a setear
                        onChange(updatedFiles);
                    } else {
                        onChange(null);//borrando archivo si solo es un unico archivo (componente no es multiple)
                    }
                };
                return (
                    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                        {/* Input invisible */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            accept={accept}
                            multiple={multiple}
                            onChange={handleFileChange}
                        />
                        {/* Vista previa */}
                        {previews.length > 0 ? (
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                gap={1.5}
                                justifyContent="center"
                            >
                                {previews.map((src, index) => (
                                    <Zoom
                                        in={true}
                                        key={index}
                                        style={{ transitionDelay: '40ms' }}
                                    >
                                        <Box position="relative">
                                            <IconButton
                                                color="error"
                                                size="small"
                                                onClick={() => handleRemove(index)}
                                                sx={{
                                                    position: "absolute",
                                                    top: -8,
                                                    right: -16,
                                                    bgcolor: "white",
                                                    "&:hover": { bgcolor: "white" },
                                                }}
                                            >
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                            <Avatar
                                                src={src}
                                                alt={`Vista previa ${index + 1}`}
                                                sx={{
                                                    width: 80,
                                                    height: 80,
                                                    border: "2px solid #1976d2",
                                                    boxShadow: 5,
                                                }}
                                            />
                                        </Box>
                                    </Zoom>
                                ))}
                            </Box>
                        ) : (
                            <Zoom
                                in={true}
                                style={{ transitionDelay: '40ms' }}
                            >
                                <Tooltip title={label}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        sx={{
                                            border: '4px dashed grey',
                                            borderRadius: '10px',
                                            width: '100%',
                                            cursor: 'pointer',
                                            minHeight: 100
                                        }}
                                        p={1}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <AddPhotoAlternateOutlinedIcon fontSize="large" color="disabled" />
                                    </Box>
                                </Tooltip>
                            </Zoom>
                        )}
                        {error && (
                            <Typography color="error" variant="caption">
                                {error.message}
                            </Typography>
                        )}
                    </Box>
                );
            }}
        />
    );
};
