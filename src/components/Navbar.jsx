import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
//react icons
import { FaXmark,FaBars } from "react-icons/fa6";
const Navbar=()=>{
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [isSticky,setIsSticky]=useState(false);
    //set toggle
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.addEventListener('scroll',handleScroll);    
        }
    });

    //navigation array
    const navItems=[
        {link:"Home",path:"home"},
        {link:"Service",path:"service"},
        {link:"About",path:"about"},
        {link:"Product",path:"product"},
        {link:"Testimonial",path:"testimonial"},
        {link:"FAQ",path:"faq"},
        
    ]
    return (
        <> <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className= {`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300":"bg-transparent"}`}> 
                <div className='flex justify-between items-center text-base gap-8'>
                <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-20 h-10 inline-block items-center'/><span className='text-[#263238]'>FutureCent</span> </a>
                {/* nav items */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path})=><Link to ={path} spy ={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-red-500  first:font-medium cursor-pointer'>{link}</Link>)
                    }

                </ul>
                        {/* button for large device */}
                        <div className='space-x-12 hidden lg:flex items-center'>
                            <a href="/" className='hidden lg:flex items-center text-red-500 hover:text-gray-800'>Login</a>
                            <button className='bg-red-400 text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                        </div>
                        {/* menu for mobile devices only */}
                        <div className='md:hidden'>
                            <button 
                            onClick={toggleMenu} 
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                                {
                                    isMenuOpen ? (<FaXmark className='h-6 w-6 '/>):(<FaBars className='h-6 w-6'/>)
                                }
                            </button>

                        </div>
                </div>
                {/* nav items for mobile devices  */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-red-400 ${isMenuOpen ? "blocked fixed top-0 right-0 left-0":"hidden"}`}>
                {
                        navItems.map(({link,path})=><Link to ={path} spy ={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 text-white hover:text-red-500  first:font-medium cursor-pointer'>{link}</Link>)
                    }
                </div>
            </nav>

        </header>
        </>
    );
};
export default Navbar;