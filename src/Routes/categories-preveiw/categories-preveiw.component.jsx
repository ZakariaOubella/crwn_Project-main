
import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../Context/categories.context";

import CategoryPreview from "../../Component/category-preview/category-preview.component";

const CategoriesPreveiw = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreveiw;
