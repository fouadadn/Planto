import Planto from '../assets/planto.png'
export default function Footer() {
    return (
        <footer className='bg-[#222C1D] text-white py-10'>
            <div className='flex flex-wrap justify-around  gap-12'>
                <div className='space-y-7  w-[298px] '>
                    <div className='flex items-center'>
                        <img className='w-9' src={Planto} alt="" />
                        <h1 className='font-extrabold'>Planto.</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex flex-col gap-5 w-[300px] '>
                    <h1 className='font-bold'>Quick Link’s</h1>
                    <div className='flex flex-col gap-2'>
                        <span>Home</span>
                        <span>Type’s Of plant’s</span>
                        <span>Contact</span>
                        <span>Privacy</span>
                    </div>
                </div>
                <div className='flex flex-col justify-between w-[298px] '>
                    <div className='space-y-4'>
                        <h1 className='font-bold'>For Every Update.</h1>
                        <div className='border flex flex-nowrap border-white p-[1px] rounded-md'>
                            <input className='bg-transparent px-2 outline-none' type="text" placeholder='Enter Email' />
                            <button className='text-black bg-white rounded-md px-3 py-1 font-bold'>Subscribe</button>
                        </div>
                    </div>
                    <div>
                        Planto © Made by <a href="">Fouad adnan</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}