import { useEffect, useState } from "react"
import Product from "./Product"
import { useNavigate, useLocation } from "react-router-dom"
import ProductSkeleton from "./ProductSkeleton ";
import Pagination from "./Pagination";


const Products = ({
  showSidebar,
  setCategories,
  setBrands,
  selectedCategory,
  selectedBrands,
  minPrice,
  maxPrice,
}) => {
  
  const navigate = useNavigate()
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  

  
  const productsPerPage = 10;

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const url = selectedCategory
        ? `https://dummyjson.com/products/category/${selectedCategory}`
        : "https://dummyjson.com/products?limit=194";

      const res = await fetch(url);
      const data = await res.json();

      setProducts(data.products);
      setFilteredProducts(data.products);

      const uniqueBrands = [
        ...new Set(
          data.products
            .map((product) => product.brand)
            .filter(Boolean)
        ),
      ];

      setBrands(uniqueBrands);

          } catch (error) {
            setError("Failed to load products");
          } finally {
            setLoading(false);
          }
        };

        fetchProducts();
      }, [selectedCategory]);


    const totalPages = Math.ceil(
      filteredProducts.length / productsPerPage
    );

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const currentProducts = filteredProducts.slice(
      startIndex,
      endIndex
    );

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://dummyjson.com/products/categories"
      );

      const data = await res.json();

      setCategories(data);
    } catch (error) {
      setError("Failed to load products");
    }
  };

  fetchCategories();
}, []);

useEffect(() => {
  let filtered = [...products];

  // Brand filter
  if (selectedBrands.length > 0) {
    filtered = filtered.filter((product) =>
      selectedBrands.includes(product.brand)
    );
  }

  // Min price filter
  if (minPrice !== "") {
    filtered = filtered.filter(
      (product) => product.price >= Number(minPrice)
    );
  }

  // Max price filter
  if (maxPrice !== "") {
    filtered = filtered.filter(
      (product) => product.price <= Number(maxPrice)
    );
  }

  setFilteredProducts(filtered);

  // Reset pagination whenever filters change
  setCurrentPage(1);
}, [
  products,
  selectedBrands,
  minPrice,
  maxPrice,
]);


if (error) {
  return (
    <div className="mt-20 text-center text-red-500">
      {error}
    </div>
  );
}

  return (
    <div className="flex flex-col w-full">
      <div
        className={`p-8 ${
          showSidebar ? "ml-80 mt-20" : "mt-20"
        } grid gap-14 grid-cols-5 transition-all duration-300`}
      >
        {loading ? (
  Array.from({ length: 12 }).map((_, index) => (
    <ProductSkeleton key={index} />
  ))
) : currentProducts.length === 0 ? (
  <div className="col-span-full flex flex-col items-center justify-center py-20">
    <h2 className="text-2xl font-semibold">
      No products found
    </h2>
    <p className="text-gray-500">
      Try changing your filters
    </p>
  </div>
) : (
  currentProducts.map((product) => (
    <Product
      key={product.id}
      data={product}
      onClick={() =>
        navigate(`/product/${product.id}`, {
          state: { page: currentPage },
        })
      }
    />
  ))
)}
      </div>

    

      {!loading && totalPages > 1 && (
        <div className="flex justify-center pb-8 fixed -bottom-4 right-6/12 translate-x-50">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  )
}

export default Products