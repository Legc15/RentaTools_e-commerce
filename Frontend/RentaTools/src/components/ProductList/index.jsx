import  ProductCard  from '../Cards/ProductCard/index';
import PropTypes from 'prop-types';
import './styles.css'

const ProductList = ({ products }) => {
    return (
        <div className='listView'>
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    />
            ))}
        </div>
    );
};

export default ProductList;

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};