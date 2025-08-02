import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const LoginDrawer = ({ onClose }) => {
    // Lock background scroll when drawer opens
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'auto');
    }, []);

    // Close drawer when clicking backdrop only
    const handleBackdropClick = (e) => {
        if (e.target.id === 'backdrop') onClose();
    };

    return (
        <div
            id="backdrop"
            className="fixed inset-0 bg-black bg-opacity-50 z-[999999] flex justify-end"
            onClick={handleBackdropClick}
        >
            <div
                className="bg-white w-full max-w-sm h-full shadow-lg transform duration-[800ms] ease-in-out translate-x-0"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-5 border-b">
                    <h2 className="text-2xl font-semibold text-orange-500">Login</h2>
                    <button onClick={onClose}>
                        <IoClose className="text-2xl hover:text-orange-600" />
                    </button>
                </div>

                {/* Form */}
                <div className="px-6 mt-8">
                    <label className="block text-gray-700 mb-2">Phone number</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full border border-gray-300 px-4 py-2 rounded outline-orange-400"
                    />

                    <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
                        Login
                    </button>

                    <p className="text-xs text-gray-600 mt-4">
                        By clicking on Login, I accept the{' '}
                        <span className="text-orange-500 underline cursor-pointer">Terms & Conditions</span>{' '}
                        &{' '}
                        <span className="text-orange-500 underline cursor-pointer">Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginDrawer;
