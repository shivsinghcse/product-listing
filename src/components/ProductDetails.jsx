import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation  } from "react-router-dom";
import StarRating from "./StarRating"
import Pagination from "./Pagination";


const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const previousPage = location.state?.page || 1;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();

        setProduct(data);
        setSelectedImage(0);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const currentPage = Number(id);
  const totalPages = 194;

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-medium">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <button
        onClick={() => navigate("/", {
            state: {page: previousPage }
        })}
        className="flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-md font-medium hover:bg-gray-200 hover:cursor-pointer active:scale-95 transition"
      >
        <i className="ri-arrow-left-line text-lg"></i>
        Back
      </button>

      <div className="mt-10 flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/2">
          <div className="overflow-hidden bg-white">
            <img
              src={product.images?.[selectedImage]}
              alt={product.title}
              className="w-full h-[500px] object-contain"
            />
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.title}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 object-cover rounded-md border cursor-pointer transition ${
                  selectedImage === index
                    ? "border-blue-500 border-2"
                    : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">
              ${product.price}
            </span>

            {product.discountPercentage > 0 && (
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                {product.discountPercentage}% OFF
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <StarRating rating={product.rating} />
            <span className="text-gray-600">
              ({product.rating})
            </span>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product.brand || "Generic"}
            </p>

            <p className="capitalize">
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>

            <p>
              <span className="font-semibold">Stock:</span>{" "}
              {product.stock}
            </p>

            <p>
              <span className="font-semibold">Availability:</span>{" "}
              {product.availabilityStatus}
            </p>
          </div>

          <div className="border-t pt-6 border-gray-300">
            <h2 className="text-2xl font-semibold mb-3">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4  left-1/2 -translate-x-1/2 z-50">
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => navigate(`/product/${page}`)}
        />
      </div>

      {/* Reviews */}
      <div className="mt-16 mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Reviews ({product.reviews?.length || 0})
        </h2>

        <div className="space-y-6">
          {product.reviews?.map((review, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  {review.reviewerName}
                </h3>

                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} />
                  <span>({review.rating})</span>
                </div>
              </div>

              <p className="mt-3 text-gray-700">
                {review.comment}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;