import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const helpData = {
    'Partner Onboarding': [
        'I want to partner my restaurant with Swiggy',
        'What are the mandatory documents needed to list my restaurant on Swiggy?',
        'I want to opt-out from Google reserve',
        'After I submit all documents, how long will it take for my restaurant to go live on Swiggy?',
        'What is this one time Onboarding fees? Do I have to pay for it while registering?',
        'Who should I contact if I need help & support in getting onboarded?',
        'How much commission will I be charged by Swiggy?',
        'I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?',
    ],
    'Legal': [
        'Terms of Use',
        'Privacy Policy',
        'Cancellations and Refunds',
        'Terms of Use for Swiggy ON-TIME / Assured',
    ],
    'FAQs': [
        'What is Swiggy Customer Care Number?',
        'I want to explore career opportunities with Swiggy',
        'I want to provide feedback',
        'Can I edit my order?',
        'I want to cancel my order',
        'Will Swiggy be accountable for quality/quantity?',
        'Is there a minimum order value?',
        'Do you charge for delivery?',
    ],
    'Instamart Onboarding': [
        'I want to partner with Instamart',
        'How many cities does Instamart operate in?',
        'What is the time to onboard?',
        'What flavour/grammage moves the best?',
        'What are the expected volumes in the first 30 days?',
        'Do I get sales data?',
        'How do ads work?',
        'What are the opportunities for expansion into new cities/SKUs?',
    ],
    'IRCTC FAQ': [
        'Will my order be delivered according to the promised time?',
        'What will happen if the train is delayed?',
        'I am unable to find any restaurants in the railway station where I want to place an order.',
        'My train is scheduled for next week, when can I place my order?',
        'How is the confirmation of the booking done?',
        'Can I cancel my order?',
        'What is the minimum order value for IRCTC orders?',
        'What are the payment options available?',
    ],
};

const HelpSupportPage = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('Partner Onboarding');
    const [openIndexes, setOpenIndexes] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClose = () => navigate('/');

    const toggleFAQ = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="fixed inset-0 z-[999999] bg-white overflow-auto">
            {/* Header */}
            <div className="bg-[#2e6f82] text-white py-6 px-6 md:px-10 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Help & Support</h1>
                    <p className="text-sm">Let's take a step ahead and help you better.</p>
                </div>
                <button onClick={handleClose}>
                    <IoClose className="text-3xl hover:text-gray-200" />
                </button>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="md:w-[250px] w-full border-r bg-[#f2f4f6]">
                    {Object.keys(helpData).map((cat) => (
                        <div
                            key={cat}
                            className={`px-5 py-4 cursor-pointer border-b text-sm md:text-base transition font-medium ${activeCategory === cat
                                ? 'bg-white font-bold'
                                : 'hover:bg-white text-gray-700'
                                }`}
                            onClick={() => {
                                setActiveCategory(cat);
                                setOpenIndexes([]); // reset open questions
                            }}
                        >
                            {cat}
                        </div>
                    ))}
                </aside>

                {/* FAQ Content */}
                <main className="flex-1 px-6 md:px-10 py-8">
                    <h2 className="text-2xl font-bold mb-6">{activeCategory}</h2>
                    <div className="space-y-4">
                        {helpData[activeCategory].length === 0 ? (
                            <p className="text-gray-500">No questions available for this category.</p>
                        ) : (
                            helpData[activeCategory].map((question, index) => (
                                <div
                                    key={index}
                                    className="border-b pb-4 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex justify-between items-center text-base font-medium">
                                        <span>{question}</span>
                                        <IoIosArrowDown
                                            className={`transition-transform duration-200 ${openIndexes.includes(index) ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </div>
                                    {openIndexes.includes(index) && (
                                        <p className="mt-2 text-sm text-gray-600">
                                            This is a placeholder answer for "{question}". Replace with actual policy text.
                                        </p>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HelpSupportPage;
