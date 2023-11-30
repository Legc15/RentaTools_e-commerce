import React from 'react';
import RentTable from "../../components/Tables/RentTable"
import RentTable2 from "../../components/Tables/RentTable2"
import RentCard from '../../components/Cards/RentCard';

import "./styles.css"

const Rent = () => {
    return (
        <div className='rent body'>
            
            <div className='info'>
                <RentCard />
                <div className='datos'>
                    <div>
                        <h2 className='titulo'>Tus datos</h2>
                        <RentTable />
                    </div>

                    <div>
                        <h2 className='titulo'>Dato de alquiler</h2>
                        <RentTable2 />
                    </div>
                    <div className='botones'>
                    <button type="submit" className='accion_volverAtras'>VOLVER ATRAS</button>
                    <button type='submit' className='accion_alquilar'>ALQUILAR</button>
                    
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Rent;