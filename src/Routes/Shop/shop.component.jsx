import { Route, Routes } from 'react-router-dom'
import "./shop.styles.scss";

import CategoriesPreveiw from '../categories-preveiw/categories-preveiw.component';
import Category from '../category/category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreveiw />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
