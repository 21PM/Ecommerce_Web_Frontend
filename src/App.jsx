import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Products from './Components/Products'
import store from './Store/Store'
import './App.css'
import { Provider } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Provider store={store}>
       <Navbar/>
       <Toaster/>
       <ProductList/>
       </Provider>
    </>
  )
}

export default App
