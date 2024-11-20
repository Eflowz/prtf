import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {  FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {Dlogo} from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="w-full p-8 sticky md:h-full h-34 top-0 z-50 bg-gray-950 mx-auto flex justify-between items-center font-titleFont border-b-[8px] border-b-gray-600">
        <div>
            <img src={Dlogo} alt="logo" className="object-contain h-10 w-40 ..."/>
        </div>
        <div>
    <ul className="hidden mdl:inline-flex items-center gap:6 lg:gap-10">
        {navLinksdata.map(({_id, title, link}) =>(
                <li 
                className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
                >
                    <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >{title}</Link>
                </li>
            ))
        }
    </ul>
            <span onClick={() => setShowMenu(!showMenu)} className='text-xl mdl:hidden bg-gray-400 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'>
                <FiMenu/>
            </span>
            <div className='menu-icon' onClick={handleClick}>

            </div>
            {showMenu && (
                <div className='w-[75%] h-screen  absolute top-0 left-[-15px] bg-blue-950 p-4 overflow-hidden'>
                <div className='flex flex-col gap-8 py-2 relative'>
        <div>
        <img src={Dlogo} alt="logo" className="object-contain h-10 w-40 ..."/>
            <p className='text-base text-gray-400 mt-2'>
            My Aim is to contribute positively to the attainment of the best results in an innovative and technology-driven organization.
            </p>
        </div>
            <ul className='flex flex-col gap-4'>
            {
                navLinksdata.map((item)=>(
                    <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                    <Link 
                    onClick={()=>setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    {item.title}
                    </Link>
                    </li>
                ))
            }
            </ul>
                    <div className="flex flex-col gap-4">
        <h2 className='text-base uppercase font-titlefont mb-2'>
        Find me on
        </h2>
        <div className='flex gap-4'>
        <a href="https://twitter.com/virus_xxy" target="_blank" rel="noopener noreferrer">
        <span className="bannerIcon">
            <FaTwitter />
        </span>
        </a>
        <a href="https://www.linkedin.com/in/nze-ezekiel-4bba13259/" target="_blank" rel="noopener noreferrer">
        <span className="bannerIcon">
            <FaLinkedinIn />
        </span>
        </a>
        </div>    
        </div>
            <span onClick={()=>setShowMenu(false)} className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'>
                <MdClose className='text-3xl'/>
                </span>
                </div>
          </div>
    )} 
        </div>
        </div>
    );
}

export default Navbar;