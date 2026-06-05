const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, index) => {
        const fillPercentage = Math.max(
          0,
          Math.min(100, (rating - index) * 100)
        );

        return (
          <div key={index} className="relative text-lg">            
            <i className="ri-star-fill text-gray-300"></i>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <i className="ri-star-fill text-yellow-400"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating