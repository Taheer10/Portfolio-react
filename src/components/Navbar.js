import React,{useState} from 'react'
import {FaBars, FaTimes,FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.jpeg'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick =() => {
     setNav(!nav)
  }
  return (
    <div className='text-3xl fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
         
         {/* <div>
          <img src={logo} alt="logo image" style={{width:"70px", height:"67px", display:"flex"}} />
         </div> */}
         {/* menu */}
      
          <ul className='hidden md:flex' >
            <li>
            <Link  to="home"  smooth={true}  duration={500}>
          Home
        </Link>
            </li>
           <li> <Link  to="about"  smooth={true}  duration={500}>
          About
        </Link></li>
            <li>
            <Link  to="skills"  smooth={true}  duration={500}>
          Skills
        </Link>
            </li>
            <li>
            <Link  to="work"  smooth={true}  duration={500}>
          Work
        </Link>
            </li>
            <li>
            <Link  to="contact"  smooth={true}  duration={500}>
          Contact
        </Link>
            </li>
          </ul>
        

         {/* Hamburger */}
         <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
         </div>

         {/* Mobile Menu */}
          
          <div className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <ul>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
          Home
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true}  duration={500}>
          About
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true}  duration={500}>
          Skills
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true}  duration={500}>
          Work
        </Link></li>
            <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>
          Contact
        </Link></li>
          </ul>
          </div>


         {/* Social Icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[10px] duration-300 bg-blue-700'>
                  <a className='flex justify-center items-center w-full text-gray-300 ' href="/">LinkedIn<FaLinkedin size={100}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]'>
                  <a className='flex justify-center items-center w-full text-gray-300' href="/">Github<FaGithub size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]'>
                  <a className='flex justify-center items-center w-full text-gray-300' href="/">Email<HiOutlineMail size={30}/> </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]'>
                  <a className='flex justify-center items-center w-full text-gray-300' href="/">OutLook<BsFillPersonLinesFill size={30}/> </a>
                </li>
              </ul>
          </div>
        </div>
  )
}

export default Navbar