const Searchbar = ({width}) => {
    
    return (
        <div className={`border  flex md:gap-4 gap-2 items-center md:rounded-md rounded ${width ? 'md:w-125' : ''} bg-white/90 focus-within:ring-2 focus-within:ring-yellow-400 transition duration-300`}>
                <i className="ri-search-line md:pl-4 pl-2 text-gray-500"></i>
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Search products..."
                    className="w-full md:py-2 px-2 flex-1 focus:outline-0 placeholder:text-gray-500 text-black"
                 />
        </div>
    )
}

export default Searchbar