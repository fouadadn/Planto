import { ChevronRight, ChevronLeft } from 'lucide-react';
import plant1 from '../assets/Plant1.png'


export default function OurBest() {
    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-fit items-center h-[700px] lg:h-[450px]  py-4 shadow-sm content-center shadow-white text-white bg-[#ffffff10] backdrop-blur-md rounded-[100px] '>
                <div>
                    <img src={plant1} className='w-[600px]  relative bottom-28' alt="" />
                </div>
                <div className='space-y-5 h-fit px-10 relative bottom-32 lg:bottom-0'>
                    <h1 className='text-white text-3xl'>We Have Small And Best O2 Plants <br /> Collection’s</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className='flex justify-between'>
                        <button className='self-start text-gray-400 bodrer border border-white px-7 py-2 rounded-lg hover:text-black hover:bg-white duration-500'>Explore</button>
                        <div className='flex'>
                            <ChevronLeft />
                            <span><span className='text-'>01</span>/04</span>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}