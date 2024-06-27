import logo from '../assets/logo-sm.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = ({ navItems }) => {
    return (
        <>
        <footer className="bg-secondary text-center">
        <div className='mx-auto flex flex-col md:flex-row md:justify-evenly items-center md:items-top py-10 w-full md:h-[40vh]'>
            <img src={logo} alt="" className='w-50 md:w-60 md:h-60 mb-10 md:my-auto' />

            {navItems.length > 0 ? 
                <div className="text-primary flex flex-col gap-4 md:px-10">
                    <h6 className='text-xl md:text-left font-bold text-black'>Seções</h6>
                    <ul className="list-none text-primary justify-between flex md:flex-col gap-6 md:gap-0 mb-10 md:mb-0">
                        {
                            navItems.map(({link, path}) => <li className='transition-all duration-400 hover:text-white text-left'><a key={link} href={path} className='hover:text-white font-medium text-xl'>{link}</a></li>)
                        }
                    </ul>
                </div>
                : null
            }
            <div className="flex flex-col gap-4">
                <h6 className='text-xl md:text-left font-bold'>Redes Sociais</h6>
                <ul className="md:flex md:flex-col list-none text-3xl text-primary justify-between gap-4 md:gap-2">
                    <li className='flex items-center gap-4'>
                        <PiInstagramLogoFill />
                        <p className='text-xl text-left font-medium text-primary duration-300 transition-colors'><a target='_blank' href="https://www.instagram.com/osinalamp/" className='hover:text-white transition-all duration-300'>@osinalamp</a> / <a target='_blank' href="https://www.instagram.com/oficialpyra/" className='hover:text-white transition-all duration-300'>@oficialpyra</a></p>
                    </li>
                    <li className='flex text-primary items-center gap-4'>
                        <IoLogoWhatsapp className=''/>
                        <p className='text-xl font-medium text-primary hover:text-white duration-300 transition-colors'><a target='_blank' href="https://wa.me/5511982007294">(11) 9 8200-7294</a></p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <FaFacebookSquare />
                        <p className='text-xl font-medium text-primary hover:text-white duration-300 transition-colors'><a target='_blank' href="#">Aleksandra Pyramo</a></p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <MdEmail />
                        <p className='text-xl font-medium text-primary hover:text-white duration-300 transition-colors'><a target='_blank' mailto="osinalamp@gmail.com" href="mailto:osinalamp@gmail.com">osinalamp@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className='flex justify-center items-center text-2xl md:text-xl text-black'>
            <p className='inline leading-10'>Desenvolvido por <a target='_blank' href="https://github.com/wessvs" className='font-bold hover:text-white duration-300 transition-all'>@wessvs</a></p><FaGithub className='ml-2 inline'/>
        </div>
        </footer>
        </>
    )
}

export default Footer