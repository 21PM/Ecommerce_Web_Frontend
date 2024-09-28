import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setproductIdData } from '../Slices/ProductListSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function ProductwithID() {

  const {id} = useParams();
  const productIdData = useSelector((store)=>store.products?.productIdData);
  const dispatch = useDispatch();
  const [showSelectedProductImage,setShowSelectedProductImage] = useState("");
  
  useEffect(() => {
    const getProductFromId = async () => {
      console.log(id);
      
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      dispatch(setproductIdData(response.data));
      console.log(response.data);
    };

    getProductFromId();
  }, [id]);

  function handleImagechange(image) {
    console.log(image);
    setShowSelectedProductImage(image);
  }

  return (
    <div className="w-full h-auto flex flex-col md:flex-row bg-white p-4 md:p-8">
      {/* Left Section - Product Image */}
      <div className="md:w-1/2 h-full w-full border-4 mb-1 md:mb-0 m-auto">
      <div className='grid place-items-center'>
        <img
          src={showSelectedProductImage ? showSelectedProductImage : productIdData?.thumbnail || "https://via.placeholder.com/300"}
          alt={productIdData?.title || "Product Image NA"}
          className="w-[80%] h-[80%] object-fit-cover"
        />
        </div>
        <div className="flex justify-center space-x-6 overflow-x-auto ">
          {/* Thumbnails for additional colors */}
          {productIdData?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Variant ${index}`}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer border-2 border-black shadow-lg"
              onClick={() => handleImagechange(image)}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="md:w-1/2 w-full pl-0 md:pl-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{productIdData?.title || "Product Title"}</h1>
        <div className="flex items-center mb-2">
          <span className="text-lg md:text-xl font-bold text-green-500">{productIdData?.rating || "4"} ★</span>
          <span className="ml-2 text-gray-600">Total Ratings {productIdData?.reviews?.length || "1.4k"}</span>
        </div>

        <div className="flex items-baseline mb-2">
          <span className="text-xl md:text-2xl font-bold text-blue-500">₹{productIdData?.price || "1000"}</span>
          <span className="ml-4 text-gray-500 line-through">₹{productIdData?.originalPrice || "3199"}</span>
          <span className="ml-4 text-orange-500 text-md md:text-lg">{productIdData?.discount || "76% OFF"}</span>
        </div>
        <p className="text-sm text-green-600 mb-4">inclusive of all taxes</p>

        {/* Stock and Availability */}
        <p className="text-md md:text-lg mb-4">
          <strong>Stock:</strong> {productIdData?.stock ? `${productIdData.stock} available` : "Out of Stock"}
        </p>
        <p className="text-md md:text-lg">
          <strong>Availability:</strong> {productIdData?.availabilityStatus || "Available"}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-6">
          <button className="bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500">
            ADD TO BAG
          </button>
          <button className="bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-300">
            ❤️ WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductwithID;
