import './index.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem/index';

const ProductIndexPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const displayProducts = () => products.map((product) => (
        <ProductIndexItem key={product.id} product={product}/>
    ))

    return (
        <> 
            <div id='product-anim'>
                <div id='product-slider'>
                    <p>
                        #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~
                    </p>
                    <p>
                        #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~ #SENDNOODS ~
                    </p>
                </div> 
            </div>
                <h1 id='product-header'>ALL PRODUCTS</h1>
            <div id='product-listings'>
                {displayProducts()}
            </div>
        </>
    )

}

export default ProductIndexPage;