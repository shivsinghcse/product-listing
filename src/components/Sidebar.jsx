import Searchbar from "./Searchbar";


const Sidebar = ({
  showSidebar,
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrands,
  setSelectedBrands,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
    
    const handleBrandChange = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
            ? prev.filter((b) => b !== brand)
            : [...prev, brand]
        );
    };

  return (
   
    <div
      className={`fixed bottom-0 left-0 z-40
      h-[calc(100vh-89px)] w-80
      bg-[#F3F3F4]
      overflow-y-auto
      transition-all duration-300 ease-in-out
      ${
        showSidebar
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="p-8 space-y-6">
        <Searchbar />

        
        <div className="space-y-3">
  <h1 className="text-xl font-semibold">
    Categories
  </h1>

  <div className="space-y-2">
    <div className="flex items-center gap-2 px-2">
      <input
        type="radio"
        name="category"
        id="all"
        checked={selectedCategory === ""}
        onChange={() => setSelectedCategory("")}
      />
      <label htmlFor="all">
        All Categories
      </label>
    </div>

    {categories.map((category) => (
      <div
        key={category.slug}
        className="flex items-center gap-2 px-2"
      >
        <input
          type="radio"
          name="category"
          id={category.slug}
          checked={selectedCategory === category.slug}
          onChange={() =>
            setSelectedCategory(category.slug)
          }
        />

        <label htmlFor={category.slug}>
          {category.name}
        </label>
      </div>
    ))}
  </div>
</div>

        
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">
            Price Range
          </h1>

          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min"
                className="border border-gray-400 w-full py-2 px-3 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max"
                className="border border-gray-400 w-full py-2 px-3 rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Apply
            </button> */}
          </div>
        </div>

        
        <div className="space-y-3">
          <h1 className="text-xl font-semibold">Brands</h1>

          <div className="space-y-2">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className="flex items-center gap-2 px-2"
              >
                <input
                    type="checkbox"
                    id={`brand-${index}`}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="cursor-pointer"
                />

                <label
                  htmlFor={`brand-${index}`}
                  className="capitalize cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;