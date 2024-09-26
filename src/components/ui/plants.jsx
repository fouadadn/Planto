import { ChevronRight, Dot } from 'lucide-react';

export default function Plants(props) {
    return (
        <div className='relative  w-[340px] flex ' >
            
            <div className='flex flex-col gap-2 h-[450px] w-[370px] z-20 bg-[#ffffff10] px-10 py-6 rounded-[50px] backdrop-blur-sm shadow-sm shadow-white'>
                <div className='relative '>
                    <img src={props.img} alt="" className='w-[800px] relative bottom-24' />
                </div>
                <div className='flex flex-col gap-3 relative bottom-3'>
                    <span className=''>Trendy House Plant</span>
                    <div className='flex  flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className=' text-2xl'>Calathea plant </h1>
                        </div>
                        <button className='self-start  bodrer border border-white px-7 py-2 rounded-lg hover:text-black hover:bg-white duration-500'>Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}