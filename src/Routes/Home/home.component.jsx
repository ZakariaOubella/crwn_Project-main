import React from 'react'
import Data from "../../Data/categories.json";
import Direction from '../../Component/Direction/direction.component';

const Home = () => {
    const categories = Data;
  return (
    <div>
      <Direction categories={categories} />
    </div>
  );
}
export default Home;