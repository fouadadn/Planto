import { ShoppingBag } from 'lucide-react';


export default function TopSelling(props) {
    return (
        <div className='mt-10 md:mt-0 '>
            <div className='text-white bg-[#ffffff10] backdrop-blur-md w-[340px] rounded-[60px] py-8 px-6  space-y-5 shadow-sm  shadow-white h-[460px] '>
                <img className='w-96 m-0 p-0 float-start relative bottom-28' src={props.img} alt="" />
                <div className='relative bottom-10'>
                    <h1 className='text-2xl'>Calathea plant</h1>
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit</p>
                    <div className='flex justify-between'>
                        <span className='text-2xl'>Rs. 359/-</span>
                        <ShoppingBag />
                    </div>
                </div>
            </div>
        </div>
    )
}