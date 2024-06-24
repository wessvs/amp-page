import { useState } from 'react';
import logo from '../assets/logo-sm.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { ImMenu3, ImMenu4 } from "react-icons/im";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {link: "Artista", path: "artista"},
        {link: "Auto-cuidado", path: "auto-cuidado"},
        {link: "Tarot", path: "tarot"},
        {link: "Contato", path: "contato"},
    ]
    return (
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-xl container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href="/" className='text-4xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="" className='w-10 inline-block items-center' /> <span>AMP</span>
                    </a>

                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) => <li className='leading-10 border-b-4 border-solid border-transparent transition-all duration-400 hover:border-primary hover: px-2'><a key={link} href={path} className='block hover:text-secondary'>{link}</a></li>)
                        }
                    </ul>
                </div>
                <div className='space-x-12 hidden md:flex items-center'>
                    <button className=' hidden md:flex items-center bg-secondary py-2 px-4 transition-all duration-300 rounded text-white hover:bg-indigo-600 shadow-xl'>
                        <IoLogoWhatsapp className='mr-2 text-white '/>
                        Contatar
                    </button>
                </div>
                <div className="md:hidden">
                        <button onClick={toggleMenu} 
                        className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<ImMenu3 className='w-10 h-10 text-primary' />): (<ImMenu4 className='w-10 h-10 text-primary' />)
                            }
                        </button>
                </div>

            </div>
        </nav>

        <div className={ `md:hidden space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden"}`}>
            {
                navItems.map(({link, path}) => <li className=' list-none'><a key={link} href={path} className='block text-white hover:text-primary'>{link}</a></li>)
            }
        </div>
        </>
    )
}

export default Navbar;