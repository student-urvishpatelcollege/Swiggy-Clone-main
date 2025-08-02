// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart, clearItemCompletely } = useCart();
    const navigate = useNavigate();

    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div className="max-w-[900px] mx-auto p-6 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="text-orange-600 border border-orange-600 px-4 py-1 rounded hover:bg-orange-50"
                >
                    ← Continue Shopping
                </button>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                    <p>Your cart is empty 😕</p>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 px-5 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                        Go to Home
                    </button>
                </div>
            ) : (
                <>
                    <div className="space-y-4 mb-8">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 border p-4 rounded-md shadow-sm"
                            >
                                <img
                                    src={`/images/topRestaurants/${item.image}`}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        ₹{item.price} × {item.quantity}
                                    </p>
                                    <p className="text-sm font-bold">Total: ₹{item.price * item.quantity}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        −
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => clearItemCompletely(item.id)}
                                    className="ml-3 bg-gray-200 text-red-600 px-2 py-1 text-xs rounded hover:bg-gray-300"
                                >
                                    Remove All
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-right border-t pt-4">
                        <h4 className="text-xl font-semibold">
                            Total: <span className="text-orange-600">₹{total.toFixed(2)}</span>
                        </h4>
                        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
