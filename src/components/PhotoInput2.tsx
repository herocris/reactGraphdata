import React, { useEffect, useRef, useState } from 'react'
import { PhotoInput2Props } from '../shared/interfaces/sharedInterfaces';

export const PhotoInput2 = ({ initFormValues, register, PhotoRemove, setPhoto }: PhotoInput2Props) => {
    const defaultImage = `${import.meta.env.VITE_SPACE_URL}/photos/Users/user_circle_icon.png`;
    const [preview, setPreview] = useState(null);
    const [removePhoto, setRemovePhoto] = useState(false);
    const inputRef = useRef('');
    const handleImageClick = () => {
        inputRef.current.click(); // Dispara el input file oculto
    };
    useEffect(() => {

        if (initFormValues?.photo?.length > 0) {

            setPreview(`${import.meta.env.VITE_SPACE_URL}/${initFormValues.photo[0]?.url}`);
        } else {

            setPreview(defaultImage);
        }
    }, [initFormValues?.photo]);

    const handleSetPreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            setPhoto(e)
            setRemovePhoto(false);


        }
    };

    const handleRemovePhoto = () => {
        setPreview(defaultImage);
        setRemovePhoto(true);
        PhotoRemove()
        // setValue('photo', null);
        // setValue('remove_photo', true);
    };
    return (
        <>
            {preview !== defaultImage && !removePhoto && (
                <button onClick={handleRemovePhoto}>
                    <i className="bi bi-trash3"></i>
                </button>
            )}

            <div className="p-1" style={{ textAlign: 'center' }}>
                <img
                    src={preview}
                    alt="Foto"
                    style={{
                        width: "100%",
                        maxWidth: 200,
                        borderRadius: 8,
                        cursor: 'pointer',
                        border: '2px dashed #ccc'
                    }}
                    onClick={handleImageClick}
                />
                <input
                    type="file"
                    accept="image/*"
                    name="photo"
                    {...register("photo")}
                    ref={(e) => {

                        inputRef.current = e;
                    }}
                    onChange={handleSetPreview}
                    style={{ display: 'none' }}
                />
            </div>
        </>
    )
}
