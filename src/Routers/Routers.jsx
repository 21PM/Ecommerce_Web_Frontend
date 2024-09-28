import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "../Components/Navbar"
import ProductList from "../Components/ProductList"
import ProductwithID from "../Components/ProductwithID"

function Routers (){
    return(
        <Routes>
            
            <Route path="/" element={<><ProductList/></>}/>
            <Route path="/product/:id" element={<><ProductwithID/></>}/>
        </Routes>
    )
}

export default Routers;