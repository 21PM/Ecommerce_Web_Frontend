import React from 'react';

function Products({ product }) {
  // const { name, description, price, image, onAddToCart, onAddToWishlist } = product;

  return (
    <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
    <img src="https://gepard.io/uploads/product-images-for-ecommerce-websites-525x295.jpg" alt="name" class="w-full h-48 object-cover" />
    <div class="px-6 py-4">
      <h2 class="text-xl font-bold">Paras</h2>
      <p class="text-gray-700">The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      price: 9.99,</p>
      <p class="text-xl font-bold text-blue-500">₹12</p>
    </div>
    <div class="px-6 py-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-4">
        Add to Wishlist
      </button>
    </div>
  </div>
  
  );
}

export default Products;