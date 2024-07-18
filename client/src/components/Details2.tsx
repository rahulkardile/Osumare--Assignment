import img from "../assets/details2.png"
import { RiMagicLine } from "react-icons/ri";
import { BsFillLightningFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TbFileSearch } from "react-icons/tb";

const Details2 = () => {
    return (
        <section className="m-auto flex flex-col relative gap-3 py-10 text-center">
            <div className="">
                <h3 className="font-bold text-lg">Navigating Real Estate's Digital Landscape</h3>
                <p className="text-sm">Insights for Real Estate Marketing Advantage</p>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col text-start gap-5 ml-28 my-4 z-10">

                    <div className="flex flex-row p-3 gap-4 bg-white border rounded-lg">
                        <div className="w-10 h-10 bg-gray-100 rounded-full">
                            <RiMagicLine className="text-2xl m-auto mt-2 text-blue-600" />
                        </div>
                        <div className="">
                            <h4 className="text-lg font-bold">Market Trends Analysis</h4>
                            <p>Predictive insights to guide real estate strategies.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-3 gap-4 bg-white border rounded-lg">
                        <div className="w-10 h-10 bg-gray-100 rounded-full">
                            <BsFillLightningFill className="text-2xl m-auto mt-2 text-blue-600" />
                        </div>
                        <div className="">
                            <h4 className="text-lg font-bold">Targeted Buyer Persona</h4>
                            <p>Understand and connect with your ideal property buyers.</p>
                        </div>
                    </div>

                    <div className="flex flex-row p-3 gap-4 bg-white border rounded-lg">
                        <div className="w-10 h-10 bg-gray-100 rounded-full">
                            <IoShieldCheckmarkSharp className="text-2xl m-auto mt-2 text-blue-600" />
                        </div>
                        <div className="">
                            <h4 className="text-lg font-bold">Competitor Insights</h4>
                            <p>Stand out in the property market with informed strategies.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-3 gap-4 bg-white border rounded-lg">
                        <div className="w-10 h-10 bg-gray-100 rounded-full">
                            <TbFileSearch className="text-2xl m-auto mt-2 text-blue-600" />
                        </div>
                        <div className="">
                            <h4 className="text-lg font-bold">Visual Content Appeal</h4>
                            <p className="text-xs my-1">Captivate buyers with appealing visuals and immersive experiences.</p>
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className="bg-[#f9f9f9] absolute right-4 -z-20 flex justify-center rounded-xl w-[60vw]">
                    <img src={img} className="w-[56%] justify-center" alt="img" />
                </div>
            </div>
        </section>
    )
}

export default Details2