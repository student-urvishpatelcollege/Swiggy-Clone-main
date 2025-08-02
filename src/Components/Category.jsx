import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import categoriesData from '../data/categories';
import categories from '../data/categories';


const Category = () => {
    const [Categories, setCategory] = useState([]);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setCategory(categoriesData); // api Local host
    }, []);
    const nextSlide=()=>{
        console.log(categories.length)
        if(categories.length -8==slide) return false;
        setSlide(slide + 3);

    }
    const prevSlide=()=>{
        if(slide==0) return false;
        setSlide(slide - 3);
    }



    return (
        <div className='max-w-[1200px] mx-auto px-2 '>

            <div className='flex my-5 items-center justify-between'>
                <div className='   text-[26px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className='cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2'
                    onClick={prevSlide}>
                        <FaArrowLeft /></div>
                    <div className='cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2'
                    onClick={nextSlide}>
                        <FaArrowRight /></div>
                </div>

            </div>

            <div className='flex overflow-hidden'>
                {
                    Categories.map(
                        (cat, index) => {
                            return (
                                <div style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }}
                                    key={index} className='w-[152px] shrink-0 duration-500'>

                                    <img src={`/images/${cat.image}`} alt={cat.path} />


                                </div>

                            )

                        }
                    )
                }

            </div>

         <hr className='my-6 border'/>

        </div>
    )
}

export default Category
