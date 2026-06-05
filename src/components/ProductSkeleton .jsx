const ProductSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md animate-pulse">
      <div className="h-56 w-full bg-gray-300" />

      <div className="p-4">
        <div className="h-6 w-3/4 rounded bg-gray-300" />

        <div className="mt-2 h-6 w-1/2 rounded bg-gray-300" />

        <div className="mt-4 flex items-center justify-between">
          <div className="h-6 w-20 rounded bg-gray-300" />
          <div className="h-6 w-16 rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;