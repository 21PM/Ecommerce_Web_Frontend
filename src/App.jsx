import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Products from './Components/ProductwithID'
import store from './Store/Store'
import './App.css'
import { Provider } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom'
import Routers from './Routers/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
          <Routers/>
       </BrowserRouter>
       </Provider>
    </>
  )
}

export default App
