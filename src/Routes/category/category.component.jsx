import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../Context/categories.context';
import ProductCard from '../../Component/product-card/product-card.component'

import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    return (
        <Fragment>
            <h2 className="category-title">
                {category.toLocaleUpperCase()}
            </h2>
            <div className="category-container">
                {
                    products && products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </Fragment>
    );
};

export default Category;

/*                    
                    <----- def of useParams ----->                      
In our React app sometimes we want to access the parameters of the current
route in this case useParams hook comes into action. The react-router-dom
package has useParams hooks that let you access the parameters of the
current route
                    <---------------------------->
*/