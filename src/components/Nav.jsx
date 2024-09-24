import { ChevronDown, Search, ShoppingBag , Menu } from 'lucide-react';
import Planto from '../assets/planto.png'

export default function Nav() {
    return (
        <>
            <nav className='flex justify-between items-center py-3 text-white'>
                <div className='flex items-center'>
                    <img className='w-7' src={Planto} alt="" />
                    <h1 className='font-extrabold'>Planto.</h1>
                </div>

                <div className='md:flex hidden gap-10 '>
                    <a href="">Home</a>
                    <a href="">Plants Type <ChevronDown className='inline-block' size={15} /></a>
                    <a href="">More</a>
                    <a href="">Contact</a>
                </div>

                <div className='flex gap-5'>
                    <div>
                        <Search  size={18}/>
                    </div>
                    <div>
                        <ShoppingBag  size={18}/>
                    </div>
                    <div>
                        <Menu size={18} />
                    </div>
                </div>
            </nav>
        </>
    )
}