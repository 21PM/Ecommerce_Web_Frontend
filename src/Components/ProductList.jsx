import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const productsdata = [
//     {
//       id: 1,
//       title: "Essence Mascara Lash Princess",
//       description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//       price: 9.99,
//       stock: 5,
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
//       ],
//     },
//     {
//       id: 2,
//       title: "Eyeshadow Palette with Mirror",
//       description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks.",
//       price: 19.99,
//       stock: 44,
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
//       ],
//     },
//     {
//       id: 3,
//       title: "Powder Canister",
//       description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine.",
//       price: 14.99,
//       stock: 59,
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
//       ],
//     },
//     {
//       id: 4,
//       title: "Red Lipstick",
//       description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips.",
//       price: 12.99,
//       stock: 68,
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
//       ],
//     },
//     {
//       id: 5,
//       title: "Foundation Cream",
//       description: "This Foundation Cream provides excellent coverage and a flawless finish.",
//       price: 15.99,
//       stock: 35,
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Foundation%20Cream/1.png"
//       ],
//     },
//     {
//       id: 6,
//       title: "Nail Polish Set",
//       description: "This Nail Polish Set includes a variety of vibrant colors to express your style.",
//       price: 22.99,
//       stock: 27,
//       images: [
//         "https://cdn.dummyjson.com/products/images/beauty/Nail%20Polish%20Set/1.png"
//       ],
//     },
//   ]

const ProductList = () => {

  const ProductList = useSelector((store)=>store.products?.ProductList)
  const isLoading = useSelector((store)=>store.products?.isLoading)
  const navigate = useNavigate();


  const handleBuyNow = (id) => {
    console.log(`Buy Now clicked for product ID: ${id}`);
  };

  const handleAddToWishlist = (id) => {
    console.log(`Added to Wishlist: Product ID: ${id}`);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to ProductwithID with the product ID
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 place-items-center">

      
      {
        isLoading && <> <span></span>
        <span class="loader w-full ml-[100%]"></span>
        <span></span><span></span></>
      }

      {ProductList?.map((product) => (
        <div 
        onClick={() => handleProductClick(product.id)}
        key={product.id} className="max-w-xs cursor-pointer sm:max-w-sm md:max-w-md min-h-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-52 w-full bg-green-500 overflow-hidden flex justify-center items-center">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="w-[90%] h-[100%] object-fit-cover" 
            />
          </div>
          <div className="px-4 py-2 sm:px-6 sm:py-4">
            <h2 className="text-lg sm:text-xl font-bold">{product.title}</h2>
            <p className="text-sm sm:text-base text-gray-700 h-20 overflow-hidden">
              {product.description}
            </p>
            <p className="text-lg sm:text-xl font-bold text-blue-500">₹{product.price}</p>
          </div>
          <div className="flex flex-col sm:flex-row px-4 py-2 sm:px-6 sm:py-4">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto" 
              onClick={() => handleBuyNow(product.id)}
            >
              Buy Now
            </button>
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mt-2 sm:mt-0 sm:ml-4 w-full sm:w-auto" 
              onClick={() => handleAddToWishlist(product.id)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ProductList;
