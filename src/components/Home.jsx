import Main from "./Main"
import Navbar from "./Navbar"
import { useState } from "react"

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar}/>
            <Main showSidebar={showSidebar} />            
        </>
    )
}

export default Home