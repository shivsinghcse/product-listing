import Products from "./Products"
import Sidebar from "./Sidebar"


const Main = ({showSidebar}) => {
  return (
    <div className="flex">
        <Sidebar showSidebar={showSidebar} />
        <Products showSidebar={showSidebar}/>
    </div>
  )
}

export default Main