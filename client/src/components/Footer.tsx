import img from "../assets/fINAL-LOGO.webp";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagram, FaPinterest, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-row w-screen bg-blue-50 justify-between p-4 px-20">
            <section className="w-[32%]">
                <img src={img} alt="img" className="w-28 " />
                <p className="text-xs my-4 w-[80%]">The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>

                <div className="">
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-xs w-[50%]">Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Contacts</h3>

                    <div className="flex gap-2 mt-3 items-center">
                        <MdEmail />
                        <p className="text-xs">hello@osumare.in</p>
                    </div>

                    <div className="flex gap-2 mt-3 items-center">
                        <FaPhone />
                        <p className="text-xs">+91 8459 8762 26</p>
                    </div>
                </div>

            </section>

            <section className="mt-3">
                <h3 className="font-semibold">Menu</h3>
                <div className="flex flex-col text-neutral-800 gap-5">
                    <Link className="mt-7" to={"/"} >Home</Link>
                    <Link to={"/"} >About</Link>
                    <Link to={"/"} >Services</Link>
                    <Link to={"/"} >Work</Link>
                    <Link to={"/"} >Blog</Link>
                    <Link to={"/"} >Career</Link>
                </div>
            </section>

            <section className="w-[21%] mt-3">
                <h3 className="font-semibold">Social</h3>
                <div className="w-full flex flex-row gap-6 mt-3 flex-wrap">
                    <FaXTwitter className="w-8 h-8 p-1 rounded-full bg-white" />
                    <FaFacebook className="w-8 h-8 p-1 rounded-full bg-white" />
                    <FaYoutube className="w-8 h-8 p-1 rounded-full bg-white" />
                    <FaInstagram className="w-8 h-8 p-1 rounded-full bg-white" />
                    <FaPinterest className="w-8 h-8 p-1 rounded-full bg-white" />
                    <FaWhatsappSquare className="w-8 h-8 p-1 rounded-full bg-white" />
                </div>
            </section>
        </footer>
    )
}

export default Footer