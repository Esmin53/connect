import { ArrowRight, CheckCircle, Flower, PackageCheckIcon, Truck } from 'lucide-react'
import React from 'react'

const Banner = () => {
  return (
        <div className="w-full h-screen flex">
            <div className="h-full w-1/3 bg-[#e9edc9] flex flex-col items-center justify-evenly relative">
                <div className="relative w-96 h-96">
                    <img src='/../../public/img2.png' className='w-ful h-full z-20 absolute'/>
                    <div className="blob bg-[#fefae0] w-96 h-96 absolute bottom-0 z-10" />
                </div>
                <img src='/../../public/plants-drawing.png' className='w-[27rem] bottom-0 z-20 absolute'/>
            </div>
            <div className='flex-1 bg-[#fefae0] flex flex-col justify-between py-6 px-12'>
                <div className='flex w-full justify-end items-center gap-4 font-medium text-lg'>
                    <p className='hover:cursor-pointer'>Home</p>
                    <p className='hover:cursor-pointer'>About Us</p>
                    <p className='hover:cursor-pointer'>Products</p>
                    <p className='hover:cursor-pointer'>Sign In</p>
                </div>
                <div className='flex flex-col max-w-2xl gap-2'>
                  <h1 className='text-4xl font-bold'>Lorem ipsum dolor sit amet <br />consectetur adipisicing.</h1>
                  <div className='h-1 w-3/4 bg-[#e9edc9] rounded-r-full' />
                  <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur dignissimos suscipit aliquam culpa expedita cupiditate quos, consequatur sunt natus cumque accusantium?</p>
                  <button className='w-fit h-12 rounded shadow-sm text-white bg-[#588157] px-4 font-medium hover:cursor-pointer flex gap-2 items-center justify-center'>
                    <ArrowRight />
                    To the garden</button>
                </div>
                <div className='w-full flex justify-end'>
                    <div className='flex flex-col w-fit gap-1'>
                    <p className='text-lg font-semibold'>Newest additions.</p>
                    <div className='flex gap-4 w-fit'>
                        <div className='bg-[#e9edc9] w-44 h-44 rounded-md shadow-sm relative'>
                            <img src='/../../public/img2.png' className='w-ful h-full'/>
                        </div>
                        <div className='bg-[#e9edc9] w-44 h-44 rounded-md shadow-sm relative'>
                            <img src='/../../public/img2.jpg' className='w-ful h-full'/>
                        </div>
                        <div className='bg-[#e9edc9] w-44 h-44 rounded-md shadow-sm relative'>
                            <img src='/../../public/img2.png' className='w-ful h-full'/>
                        </div>
                        <div className='bg-[#e9edc9] w-44 h-44 rounded-md shadow-sm relative'>
                            <img src='/../../public/img2.png' className='w-ful h-full'/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner