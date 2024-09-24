import { Star } from 'lucide-react';


export default function Customer(props) {
    return (
        <div>
            <div className='flex flex-col shadow-sm shadow-white border-white backdrop-blur-md w-fit rounded-3xl  gap-4 bg-[#ffffff10]  h-fit px-10 py-7'>
                <div className='flex items-center gap-3'>
                    <img  className='w-14' src={props.img} alt="" />
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
                <p className=''>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut <br /> enim ad minim veniam,</p>
            </div>
        </div>
    )
}