import Searchbar from "./Searchbar"

const categories = ['smartphones', 'Laptops', 'fragrances', 'skincare', 'groceries', 'home decoration']
const brands = ['apple', 'samsung', 'huawei', 'xiaomi', 'OPPO']

const Sidebar = ({showSidebar}) => {
  return (
    <div className={`bg-[#F3F3F4] ${showSidebar ? 'w-80 p-8 translate-x-0 opacity-100' : 'w-0 p-0 -translate-x-full opacity-0'} h-[calc(100vh-89px)] space-y-6 fixed bottom-0 left-0 transition-transform duration-300 ease-in-out overflow-x-auto`}>
        {
            showSidebar && 
            <>
                <Searchbar/>

                <div className="space-y-3">
                    <h1 className="text-xl font-semibold">Categories</h1>
                    <div>
                        {
                            categories.map((category, ind) => {
                                return (
                                    <div key={ind} className="flex items-center gap-2 px-2">
                                        <input type="checkbox" name="categories" id="categories"/>
                                        <label htmlFor="categories" className="capitalize">{category}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-xl font-semibold">Price Range</h1>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <input type="number" name="min" placeholder="Min" className="border border-gray-400 w-25 py-1 px-2 rounded-md "/>
                            <input type="number" name="max" placeholder="Max" className="border border-gray-400 w-25 py-1 px-2 rounded-md"/>
                        </div>
                        <button className="bg-indigo-600 text-white py-2 w-full rounded-md">Apply</button>                    
                    </div>
                </div>

                <div className="space-y-3">
                    <h1 className="text-xl font-semibold">Brands</h1>
                    <div >
                        {
                            brands.map((brand, ind) => {
                                return (
                                    <div key={ind} className="flex items-center px-2 gap-2">
                                        <input type="checkbox" name="brand" id="brand"/>
                                        <label htmlFor="brand" className="capitalize">{brand}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                

            </>
        }
    </div>
  )
}

export default Sidebar