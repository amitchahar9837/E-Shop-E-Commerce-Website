import React from 'react'
import Heading from '../shared/Heading'
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'
const Blogs = () => {
    const BlogData = [
        {
            id:1,
            title:'How to choose perfect smartwatch',
            subtitle:"Minima facere deserunt vero illo beatae delentiti eius dolres consequuntur, eligendi corporis maiores molestiae  laundatium. Porro?",
            published:"Jan 20, 2024 by Dilshad",
            image:Img1,
        },
        {
            id:2,
            title:'How to choose perfect smartwatch',
            subtitle:"Minima facere deserunt vero illo beatae delentiti eius dolres consequuntur, eligendi corporis maiores molestiae  laundatium. Porro?",
            published:"Jan 20, 2024 by Dilshad",
            image:Img2,
        },
        {
            id:3,
            title:'How to choose perfect smartwatch',
            subtitle:"Minima facere deserunt vero illo beatae delentiti eius dolres consequuntur, eligendi corporis maiores molestiae  laundatium. Porro?",
            published:"Jan 20, 2024 by Dilshad",
            image:Img3,
        },
    ]
  return (
    <div className='my-12'>
        <div className="container">
            {/* Header Section  */}
            <Heading title={'Recent News'} subtitle={"Explore Our Blogs"}/>

            {/* Blog Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/* Blog Card */}
                {
                    BlogData.map((data)=>(
                        <div key={data.id} className='bg-white dark:bg-gray-900'>
                            {/* Img Section */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                            </div>
                            {/* Content Section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published} </p>
                                <p className='text-bold text-xl line-clamp-1'>{data.title} </p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs