import { MdBarChart } from "react-icons/md";
import { FaArrowPointer } from "react-icons/fa6";
import { TbChartCircles } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { BiShieldPlus } from "react-icons/bi";
import { LiaPhotoVideoSolid } from "react-icons/lia";

const servicesArr = [
    {
        logo: <MdBarChart className='mt-2 absolute ml-2' />,

        title: "Automotive SEO",
        des: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
    },
    {
        logo: <FaArrowPointer className='mt-2 absolute ml-2' />,

        title: "PPC Precision",
        des: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
    },
    {
        logo: <TbChartCircles className='mt-2 absolute ml-2' />,

        title: "Social Acceleration",
        des: " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
    },
    {
        logo: <GiNotebook className='mt-2 absolute ml-2' />,

        title: "Content Excellence",
        des: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
    },
    {
        logo: <CgWebsite className='mt-2 absolute ml-2' />,

        title: "Web Design",
        des: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
    },
    {
        logo: <LuArrowUpWideNarrow className='mt-2 absolute ml-2' />,

        title: "Data-Driven Insights",
        des: "Leverage data to refine your strategies, making informed decisions that drive revenue growth."
    },
    {
        logo: <BiShieldPlus className='mt-2 absolute ml-2' />,

        title: "End-to-End Solutions",
        des: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
    },
    {
        logo: <LiaPhotoVideoSolid className='mt-2 absolute ml-2' />,
        title: "Video marketing",
        des: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
    }
]

const Services = () => {
    return (
        <section className='m-auto flex flex-col gap-3 pt-7 bg-[#f0eeee] '>
            <div className="m-auto text-center">
                <h2 className='text-xl font-bold'>Our Service Offerings</h2>
                <p className='text-sm my-1'> Strategies that Drive Property Market Excellence</p>
            </div>
            <div className="flex flex-row flex-wrap m-auto justify-center gap-6">
                {
                    servicesArr.map((i, index) => (
                        <div key={index} className="w-[250px] rounded-md text-center shadow-[0px_4px_16px_1px_#00000024] flex flex-col gap-3 items-center justify-center m-3 p-4 bg-white">
                            <div className="w-8 h-8 overflow-hidden relative text-blue-700 text-xl bg-gray-100 rounded-full">
                                {i.logo}
                            </div>
                            <h3 className='text-sm font-semibold'>{i.title}</h3>
                            <p className='text-xs'>{i.des}</p>
                        </div>
                    ))
                }
            </div>
            <button className=' bg-blue-600 mb-11 p-2 text-white font-semibold m-auto w-[200px] rounded-full'>Get Started</button>
        </section>
    )
}

export default Services