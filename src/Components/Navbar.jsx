import React, { useState } from 'react';
import { FaHome, FaSearch, FaHeart, FaUser, FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import { setProductList } from '../Slices/ProductListSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { setIsloading } from '../Slices/ProductListSlice';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ProductList = useSelector((store)=>store.products?.ProductList)
  const isLoading = useSelector((store)=>store.products?.isLoading)


  const dispatch = useDispatch()

  const cat = ['All Categories'];

  const [categories,setCate] = useState(cat)

  const getAllProducts = async()=>{

    try{
      dispatch(setIsloading(true))
      const response = await axios.get(`https://dummyjson.com/products`)
      console.log(response.data.products);
      dispatch(setProductList(response.data.products))
  
     const catdata =  response.data.products.map((ele,i)=>{
          return ele.category
     })
  
     const uniqueArray = catdata.reduce((unique,category)=>{
            if(!unique.includes(category)){
              unique.push(category);
            }
  
            return unique;
     },['All Categories'])
     
     setCate(uniqueArray)

    }catch(e){
        toast.error("Error while fetching data")
    }finally{
      dispatch(setIsloading(false))

    }

  }

  const getCategorisedProduct = async(selectedCat)=>{
        try{
          dispatch(setIsloading(true))
          const response = await axios.get(`https://dummyjson.com/products/category/${selectedCategory}`)
          console.log(response.data.products);
          dispatch(setProductList(response.data.products))
        }catch(e){
            toast.error("Error while fetch categorised data")
        }finally{
          dispatch(setIsloading(false))

        }

  }

  useEffect(()=>{
    
    if(selectedCategory === 'All Categories' || selectedCategory === ''){
      getAllProducts()
    }else{
      getCategorisedProduct(selectedCategory)
    }
    
  },[selectedCategory])


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log(category);
    
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side - Home & Logo */}
          <div className="flex items-center space-x-4">
            <a href="#home" className="hover:text-gray-300 flex items-center">
              <FaHome className="mr-1" /> Home
            </a>
            {/* <h1 className="text-2xl font-bold">MyApp</h1> */}
          </div>

          {/* Center - Search Bar for Desktop */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                className="bg-white text-black rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Right Side - Wishlist & Profile */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-gray-300"
              >
                {selectedCategory || 'Select Category'}
                <FaChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-blue-800 rounded-md shadow-lg z-10">
                  {categories?.map((category) => (
                    <h2
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                      {category.substr(0,1).toUpperCase() + category.substr(1,category.length+1).toLowerCase()}
                    </h2>
                  ))}
                </div>
              )}
            </div>
            <a href="#wishlist" className="hover:text-gray-300 flex items-center">
              <FaHeart className="mr-1" /> Wishlist
            </a>
            <a href="#profile" className="hover:text-gray-300 flex items-center">
              <FaUser className="mr-1" /> Profile
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 space-y-2">
          <a href="#home" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">
            <FaHome className="mr-1 inline" /> Home
          </a>

          {/* Search bar for mobile */}
          <div className="block px-4 py-2">
            <div className="relative">
              <input
                type="text"
                className="bg-white text-black rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Category filter in mobile view */}
          <div className="block px-4 py-2 relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center w-full text-left text-white hover:bg-blue-700"
            >
              {selectedCategory || 'Select Category'}
              <FaChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-full bg-blue-800 rounded-md shadow-lg z-10">
                {categories?.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    {category.substr(0,1).toUpperCase() + category.substr(1,category.length+1).toLowerCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#wishlist" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">
            <FaHeart className="mr-1 inline" /> Wishlist
          </a>
          <a href="#profile" className="block px-4 py-2 text-sm text-white hover:bg-blue-700">
            <FaUser className="mr-1 inline" /> Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
