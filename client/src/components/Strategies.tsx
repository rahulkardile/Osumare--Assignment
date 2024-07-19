import img from "../assets/services.png"
import img1 from "../assets/strategies/9188e49df1213b5342856400bb24fee2.png"
import img2 from "../assets/strategies/2.png"
import img3 from "../assets/strategies/3.png"
import img4 from "../assets/strategies/4.png"

import s1 from "../assets/strategies/s1.png"
import s2 from "../assets/strategies/s2.png"
import s3 from "../assets/strategies/s3.png"
import s4 from "../assets/strategies/s4.png"

const Strategies = () => {
    return (
        <section className="w-screen m-auto">
            <div className="m-auto text-center">
                <h3 className="text-lg font-bold my-1">Driving Property Inquiries to Conversions</h3>
                <p className="text-sm">Streamlined Strategies for Real Estate Success</p>
            </div>
            <div className="flex flex-row portrait:flex-col gap-5 m-auto justify-center portrait:items-center items-start mt-8">
                <img src={img} className="w-96 portrait:w-56" alt="img" />
                <div className="w-[400px] flex flex-col portrait:text-center portrait:m-auto portrait:justify-center gap-3 mt-10 items-start">
                    <h3 className="font-bold portrait:m-auto">Optimized Path to Property Purchase</h3>
                    <p className="text-sm">In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
                    <button className="bg-blue-500 portrait: m-auto p-1 px-7 text-white font-semibold rounded-full">Get Started</button>
                </div>
            </div>

            <section className="w-screen m-auto text-center my-8">
                <h3 className="text-lg font-bold">Driving Property Inquiries to Conversions</h3>

                <div className="flex flex-row flex-wrap my-8 justify-center w-[80%] items-center m-auto px-8 gap-3">

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={img1} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Call-to-Action Optimization</h4>
                            <p className="text-xs my-3 px-10">Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
                        </div>

                    </section>

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={img2} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Landing Page Efficiency</h4>
                            <p className="text-xs my-3 px-10">Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
                        </div>

                    </section>

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={img3} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Social Proof Utilization</h4>
                            <p className="text-xs my-3 px-10">Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
                        </div>

                    </section>

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={img4} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Mobile-Friendly Experience</h4>
                            <p className="text-xs my-3 px-10">With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                        </div>

                    </section>

                </div>
            </section>

            <section className="w-screen m-auto text-center mt-24">
                <h3 className="text-lg font-bold">Our Expertise in Action</h3>

                <div className="flex flex-row flex-wrap my-8 justify-center w-[80%] items-center m-auto px-8 gap-3">

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={s1} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Effective CTAs</h4>
                            <p className="text-xs my-3 px-10"> See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
                        </div>

                    </section>

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={s2} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Conversion-Optimized Landing Pages</h4>
                            <p className="text-xs my-3 px-10">Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
                        </div>

                    </section>

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={s3} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Trust Building with Social Proof</h4>
                            <p className="text-xs my-3 px-10">Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
                        </div>

                    </section>

                    <section className="w-[400px] flex items-center flex-col gap-4">

                        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-200">
                            <img src={s4} className="w-[70%] object-contain" alt="img" />
                        </div>

                        <div className="text-center">
                            <h4 className="font-semibold">Mobile-First Success:</h4>
                            <p className="text-xs my-3 px-10"> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
                        </div>

                    </section>

                </div>
            </section>

        </section>
    )
}

export default Strategies