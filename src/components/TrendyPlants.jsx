import trendyplant1 from './assets/trendyPlants1.png'
import { ShoppingBag } from 'lucide-react';


export default function TrendyPlants() {
    return (
        <div className='text-white space-y-32 flex justify-center'>
            <div className='grid grid-cols-1  lg:grid-cols-2 justify-items-center md:justify-items-start bg-[#ffffff10] backdrop-blur-md shadow-sm shadow-white rounded-[100px] h-[630px] lg:h-[380px] pb-14 lg:w-full  w-fit px-10'>
                <div className='justify-self-center relative bottom-32 '>
                    <img className='w-[400px] ' src={trendyplant1} alt="" />
                </div>
                <div className='space-y-3 mt-16 h-fit pb-6 md:pb-0 relative bottom-36 lg:bottom-0'>
                    <h2 className='text-4xl'>For Small Decs Ai Plat</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua</p>
                    <p className='text-3xl'>Rs. 599/-</p>
                    <div className='flex items-center gap-3'>
                        <button className='self-start text-gray-400 bodrer border border-white px-7 py-2 rounded-lg hover:text-black hover:bg-white duration-500'>Explore</button>
                        <div className='border border-white p-1 rounded-md px-2'>
                            <button><ShoppingBag/></button>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

    )
}