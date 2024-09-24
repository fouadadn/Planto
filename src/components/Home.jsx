import { CirclePlay, Star } from 'lucide-react';
import Plants from './ui/plants';
import plant1 from './assets/Plant1.png'
import profil1 from './assets/profil1.png'


export default function Home() {
    return (
        <>
            <div className='text-white mt-20'>
                <div className='grid grid-cols-1 gap-5 justify-items-center xl:justify-items-start   '>
                    <div className='flex justify-center xl:justify-between w-full flex-wrap '>
                        <div className='flex justify-center lg:justify-between  '>
                            <div className='flex flex-col gap-3 '>
                                <h1 className='text-8xl font-semibold text-center w-fit md:text-nowrap  '>Breath  Natureal </h1>
                                <p className='md:w-[70%]  md:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className='flex items-center gap-4 justify-center md:justify-start'>
                                    <button className='self-start text-gray-400 bodrer border border-white px-7 py-2 rounded-lg hover:text-black hover:bg-white duration-500'>Explore</button>
                                    <div className='flex items-center gap-1'>
                                        <CirclePlay size={40} />
                                        <span>Live Demo...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className='relative top-20'>
                            <Plants img={plant1}  />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col shadow-sm shadow-white border-white backdrop-blur-md w-fit rounded-3xl py-3 px-6 gap-4 bg-[#ffffff10]  h-fit relative top-20 2xl:-top-20'>
                            <div className='flex items-center gap-3'>
                                <img src={profil1} alt="" />
                                <div>
                                    <span>alena Patel</span>
                                    <div className='flex gap-1'>
                                        <Star size={13} color='yellow' fill='yellow' />
                                        <Star size={13} color='yellow' fill='yellow' />
                                        <Star size={13} color='yellow' fill='yellow' />
                                        <Star size={13} color='yellow' fill='yellow' />
                                        <Star size={13} color='yellow' fill='yellow' />
                                    </div>
                                </div>
                            </div>
                            <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}