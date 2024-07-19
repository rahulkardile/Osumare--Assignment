import img from "../assets/review.png"
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { IoPlayCircleSharp } from "react-icons/io5";

export const Review = () => {
    return (
        <section className="flex flex-col gap-4 m-auto text-center mt-10">

            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">What Our Pharma Partners Say</h2>
                <p className="text-xs">Driving Transformations, One Brand at a Time</p>
            </div>

            <div className="flex flex-row portrait:flex-col gap-9 m-auto mt-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl p-4 w-[70%]">
                <div className="w-[1000px] portrait:w-[60vw] bg-slate-100 rounded-lg relative overflow-hidden portrait:h-auto h-[320px]">
                    <img src={img} className="object-contain" alt="img" />
                    <IoPlayCircleSharp className="absolute text-white text-5xl portrait:top-[32%] portrait:left-[39%] top-[45%] left-[45%]" />
                </div>

                <div className="flex flex-col gap-2 portrait:mt-0 mt-12">
                    <div className="w-36 h-14 flex gap-2 items-center">
                        <div className="w-[30%]">
                            <img src={img} className="object-contain rounded-full" alt="img" />
                        </div>
                        <h5 className="font-bold text-xs">Tabish khan</h5>
                    </div>
                    <p className="text-xs pr-8 portrait:pr-2 text-start">Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
                </div>
            </div>

            <div className="m-auto flex flex-row text-blue-500 text-3xl">
                <CiCircleChevLeft />
                <CiCircleChevRight />
            </div>

        </section>
    )
}
