import { useEffect, useState } from "react"
import Product from "./Product"
import { useNavigate, useLocation } from "react-router-dom"
import ProductSkeleton from "./ProductSkeleton ";
import Pagination from "./Pagination";


const Products = ({showSidebar}) => {
  const navigate = useNavigate()
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
 

  const productsPerPage = 10;

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(`https://dummyjson.com/products?limit=194`);
        const data = await res.json();
        setProducts(data.products);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);


  return (
    <div className="flex flex-col w-full">
      <div
        className={`p-8 ${
          showSidebar ? "ml-80 mt-20" : "mt-20"
        } grid gap-14 grid-cols-5 transition-all duration-300`}
      >
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : currentProducts.map((product) => (
              <Product
                key={product.id}
                data={product}
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: { page: currentPage },
                  })
                }
              />
            ))}
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