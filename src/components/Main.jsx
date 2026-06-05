import { useState } from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Main = ({ showSidebar }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div className="flex">
      <Sidebar
        showSidebar={showSidebar}
        categories={categories}
        brands={brands}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <Products
        showSidebar={showSidebar}
        categories={categories}
        setCategories={setCategories}
        brands={brands}
        setBrands={setBrands}
        selectedCategory={selectedCategory}
        selectedBrands={selectedBrands}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </div>
  );
};

export default Main;