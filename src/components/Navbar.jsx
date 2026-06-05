
import Searchbar from "./Searchbar"

const Navbar = ({toggleSidebar}) => {
    
    return (
        <nav className="bg-[#131921] md:py-4 py-2 md:px-16 px-2 text-white flex justify-between items-center shadow-sm fixed top-0 left-0 w-full">
            <button className="cursor-pointer active:scale-95 transition duration-300" onClick={() => toggleSidebar() }>
                <i className="ri-menu-line md:text-2xl text-xl hover:text-yellow-400 transition"></i>
            </button>

            <Searchbar width={true} />
            
            <div className="md:space-x-6 space-x-3">
                <button className="cursor-pointer active:scale-95 hover:text-yellow-400 transition">
                    <i className="ri-shopping-cart-line md:text-xl "></i>
                </button>
                <button className="cursor-pointer active:scale-95 hover:text-yellow-400 transition">
                    <i className="ri-user-line md:text-xl"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar