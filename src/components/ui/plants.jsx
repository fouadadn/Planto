import { ChevronRight, Dot } from 'lucide-react';


export default function Plants(props) {
    return (
        <div className='relative  w-[370px] flex ' >
            <div className='w-[100px] h-[100px]  border-r-0 border-b-0 left-[2px] top-[1px] rounded-b-lg rounded-t-[50px] rounded-r-none    absolute border border-[#ffffffff]' >
            </div>
            <div className='flex flex-col gap-2 h-[450px] w-[370px] z-20 bg-[#ffffff10] px-10 py-6 rounded-[50px] backdrop-blur-sm shadow-sm shadow-white'>
                <div>

                </div>
                <div className='relative '>
                    <img src={props.img} alt="" className='w-[800px] relative bottom-24' />
                </div>
                <div className='flex flex-col gap-3 relative bottom-20'>
                    <span className='text-gray-400'>Trendy House Plant</span>
                    <div className='flex  flex-col gap-[4px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-gray-400 text-2xl'>Calathea plant </h1><ChevronRight />
                        </div>
                        <button className='self-start text-gray-400 bodrer border border-white px-7 py-2 rounded-lg hover:text-black hover:bg-white duration-500'>Buy Now</button>
                    </div>
                    <div className='flex justify-center gap-1'>
                        <Dot />
                        <Dot />
                        <Dot />
                    </div>
                </div>
            </div>
            <div className='w-[100px] h-[100px] right-[2px]  bottom-[1px] z-10   border-t-0 border-l-0    rounded-b-[50px] rounded-l-[0] absolute border border-[#ffffffff]' >
            </div>
        </div>
    )
}