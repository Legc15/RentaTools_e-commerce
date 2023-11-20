import React from 'react';
import TextField from "@mui/material/TextField"
import HeaderButton from "../../button"
import Box from "@mui/material/Box"
import "./styles.css"



const CategoriesForm = () => {

    return (
        <form className="form-container" >
            <Box
                className="categories-box"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                    flexDirection: "row",
                }}
            >
                <TextField label="Titulo" type="text" className='titulo-description'/>
                <TextField label="Descripcion" type="text" className='titulo-description'/>
            </Box>
            <HeaderButton buttonLabel="Crear Categoria" className="registrar" type="submit" />
            
        </form>
    );
};

export default CategoriesForm;