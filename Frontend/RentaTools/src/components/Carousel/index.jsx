import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import "./styles.css";

function Carousel({ imagenes, onClose }) {
    const carouselRef = useRef();
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPositions = () => {
        if (!carouselRef.current) {
            return;
        }

        setIsAtStart(carouselRef.current.scrollLeft === 0);
        setIsAtEnd(carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth - 1);
    };

    const scroll = (scrollOffset) => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += scrollOffset;
            setTimeout(checkScrollPositions, 100);
        }
    };

    useEffect(() => {
        checkScrollPositions();
        carouselRef.current.addEventListener('scroll', checkScrollPositions);
        return () => {
            if (carouselRef.current) {
                carouselRef.current.removeEventListener('scroll', checkScrollPositions);
            }
        };
    }, []);

    const handleClickOutside = (event) => {
        if (event.target.className === 'carousel-wrapper') {
            onClose();
        }
    };

    return (
        <div className='carousel-wrapper' onClick={handleClickOutside}>
            {!isAtStart && (
                <FaChevronLeft 
                    className='carousel-arrow carousel-arrow-left' 
                    onClick={() => scroll(-200)}
                />
            )}
            <div className='carousel-container' ref={carouselRef}>
                {imagenes.map((imagen, index) => (
                    <div className='carousel-item' key={index}>
                        <img srcSet={imagen.url} src={imagen.url} alt={index} />
                    </div>
                ))}
            </div>
            {!isAtEnd && (
                <FaChevronRight 
                    className='carousel-arrow carousel-arrow-right' 
                    onClick={() => scroll(200)}
                />
            )}
        </div>
    );
}

Carousel.propTypes = {
    imagenes: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Carousel;