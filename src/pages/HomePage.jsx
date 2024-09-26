import Nav from "../components/Nav";
import Home from "../components/Home";
import TrendyPlants from "../components/TrendyPlants";
import TrendyPlants2 from '../components/TrendyPlants2'
import TopSelling from "../components/ui/TopSellingplants";
import plant1 from '../components/assets/Plant1.png'
import plant2 from '../components/assets/plant2.png'
import plant3 from '../components/assets/plant3.png'
import plant4 from '../components/assets/plant4.png'
import plant5 from '../components/assets/plant5.png'
import plant6 from '../components/assets/plant6.png'
import Customer from "../components/ui/customer";
import pr1 from '../components/assets/pr1.png'
import pr2 from '../components/assets/pr2.png'
import pr3 from '../components/assets/pr3.png'
import OurBest from "../components/ui/best";
import Footer from "../components/footer";

// import styles from '../pages/style.module.css'


import React from "react";
import Slider from "react-slick";

export default function HomePage() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        pauseOnHover: true,
        className: 'xi7aja',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            }],
        // fade: true,
    };

    return (
        <>
            <div className="">
                <div className="background-image px-4 md:px-20">
                    <Nav />
                    <Home />
                    <div className=" space-y-32 relative pb-20">
                        <div className='text-white text-5xl py-20 mt-20 xl:mt-0 flex justify-center'>
                            <div className="w-fit relative">
                                <div className="w-12 h-12 border-t-0 border-r-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -left-[9px] top-2" ></div>
                                <div className="w-12 h-12 border-b-0 border-l-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -right-[9px]" ></div>
                                <h1 className="text-nowrap">Our Trendy plants</h1>
                            </div>
                        </div>

                        <TrendyPlants />
                        <TrendyPlants2 />

                    </div>
                </div>
                <div className="bg-[#1B2316] px-3 md:px-20">
                    <div className='text-white text-5xl flex justify-center pt-24'>
                        <div className="w-fit relative">
                            <div className="w-12 h-12 border-t-0 border-r-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -left-[9px] top-2" ></div>
                            <div className="w-12 h-12 border-b-0 border-l-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -right-[9px]" ></div>
                            <h1 className="text-nowrap">Our Top Selling</h1>
                        </div>
                    </div>
                    <div className="relative  flex flex-wrap gap-28 pt-32  justify-center">
                        <div className="flex gap-10 flex-wrap justify-center">
                            <TopSelling img={plant1} />
                            <TopSelling img={plant2} />
                            <TopSelling img={plant3} />
                        </div>
                        <div className="flex gap-10 flex-wrap justify-center">
                            <TopSelling img={plant4} />
                            <TopSelling img={plant5} />
                            <TopSelling img={plant6} />
                        </div>
                    </div>
                    <div className='text-white text-5xl my-11 flex py-20 justify-center relative '>
                        <div className="w-fit relative">
                            <div className="w-12 h-12 border-t-0 border-r-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -left-[9px] top-2" ></div>
                            <div className="w-12 h-12 border-b-0 border-l-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -right-[9px]" ></div>
                            <h1 className="text-nowrap">Customer Review</h1>
                        </div>
                    </div>
                    <div className="text-white relative  flex justify-center gap-10 flex-wrap ">
                        <Customer img={pr1} />
                        <Customer img={pr2} />
                        <Customer img={pr3} />
                    </div>

                    <div className='text-white text-5xl m-11 flex justify-center relative py-20 '>
                        <div className="w-fit relative px-2 ">
                            <div className="w-12 h-12 border-t-0 border-r-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -left-[9px] top-2" ></div>
                            <div className="w-12 h-12 border-b-0 border-l-0 border-[4px] border-[#ffffff60] rounded-tl-none rounded-br-none rounded-xl absolute -right-[9px]" ></div>
                            <h1 className="text-nowrap">Our Best o2</h1>
                        </div>
                    </div>

                    <div className="pb-28">
                        <Slider {...settings} >
                            <OurBest />
                            <OurBest />
                            <OurBest />
                            <OurBest />
                        </Slider>
                    </div>
                </div>

                <Footer />


            </div>
        </>
    );
}