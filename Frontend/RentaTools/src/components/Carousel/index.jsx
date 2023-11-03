import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import "./styles.css";


function Carousel({ imagenes, onClose }) {

    const carouselRef = useRef();

    const scroll = (scrollOffset) => {
        carouselRef.current.scrollLeft += scrollOffset;
    };

    const handleClickOutside = (event) => {
        if (event.target.className === 'carousel-wrapper') {
            onClose();
        }
    };

    return (
        <div 
            className='carousel-wrapper' 
            onClick={handleClickOutside}
            >
            <ArrowBackIos
                className='carousel-arrow carousel-arrow-left'
                onClick={() => scroll(-200)}
            />
            
            <div className='carousel-container' ref={carouselRef} >
                {imagenes.map((imagen, index) => (
                    <div
                        className='carousel-item'
                        key={index}>
                        <img
                            srcSet={imagen.url}
                            src={imagen.url}
                            alt={index}
                        />
                    </div>   
                ))}
            </div>
            <ArrowForwardIos
                className='carousel-arrow carousel-arrow-right'
                onClick={() => scroll(200)}
            /> 
        </div>
    )

}
Carousel.propTypes = {
    imagenes: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Carousel;