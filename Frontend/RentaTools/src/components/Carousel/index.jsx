import PropTypes from 'prop-types';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function Carousel({ imagenes }) {

    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {imagenes.map((imagen, index) => (
                <ImageListItem key={index}>
                    <img
                        srcSet={`${imagen.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${imagen.url}?w=164&h=164&fit=crop&auto=format`}
                        alt={`imagen ${index}`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )

}
Carousel.propTypes = {
    imagenes: PropTypes.array.isRequired,
};

export default Carousel;