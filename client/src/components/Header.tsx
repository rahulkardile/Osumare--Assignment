import { Link } from "react-router-dom"
import logo from "../assets/fINAL-LOGO.webp"

export const Header = () => {
  return (
    <header className="flex flex-row p-2 px-10 justify-between items-center">
        <div className="">
            <img src={logo} width={120} alt="logo" />
        </div>
        <nav>
            <Link className="px-10 border font-semibold border-black p-1 rounded-full" to={"/contact"}>Contact Us</Link>
        </nav>
    </header>
)
}
