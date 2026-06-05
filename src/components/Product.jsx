
// const Product = ({data, onClick}) => {
//     const {images, title, price, rating} = data

import StarRating from "./StarRating";

//   return (
//     <div className="space-y-2 px-2 py-2 border border-gray-300 rounded-md shadow-xl" onClick={onClick}>
//         <div className="w-70">
//           <img src={images[0]} alt="product" className="w-full rounded-t-md" />
//         </div>
//         <div className="px-1">
//           <h1 className="text-lg font-semibold">{title}</h1>
//           <div className="flex justify-between">
//             <label>${price}</label>
//             <div>
//               <i className="ri-star-line"></i>
//               <i className="ri-star-line"></i>
//               <i className="ri-star-line"></i>
//               <i className="ri-star-line"></i>
//               <i className="ri-star-line"></i>
//               <label>({rating})</label>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Product

const Product = ({ data, onClick }) => {
  const { images = [], title, price, rating = 0 } = data;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex h-full flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-56 w-full overflow-hidden ">
        <img
          src={(images[1] ?? images[0]) || "/placeholder.png"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105 p-1"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-2 min-h-[56px] text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-xl font-bold text-green-600">
            ${price?.toFixed(2)}
          </span>

          <div className="flex items-center gap-1">
            <StarRating rating={rating} />
            <span>({rating})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product