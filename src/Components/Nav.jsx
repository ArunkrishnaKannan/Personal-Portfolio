import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-scroll";
import { FaTimes} from "react-icons/fa";
const nav = () => {
  const [click,setClick] = useState(false);

  const handleClick = () =>{
    setClick(!click);
  } 
  
  const content = <>
  <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
<ul className="text-center text-xl p-20">
  <Link spy={true} smooth={true} to="home">
  <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
  </Link>
  <Link spy={true} smooth={true} to="about">
  <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
  </Link>
  <Link spy={true} smooth={true}to="projects">
  <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
  </Link>
  <Link spy={true} smooth={true}to="contact">
  <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
  </Link>
  
</ul>
  </div>

  </>
  return (

      <nav>
        <div className="h-10vh flex justify between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
          <div className="flex items-center flex-1">
            {/* <span className="text-[38px] font-bold"><AiFillApple /></span> */}
            </div>
            <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]"> 
                <Link spy={true} smooth={true} to="home">
  <li className="hover:text-yellow-600 border-b-2 border-slate-900 hover:border-yellow-600 cursor-pointer">Home</li>
  </Link >
  <Link spy={true} smooth={true} to="about">
  <li className="hover:text-yellow-600 border-b-2 border-slate-900 hover:border-yellow-600 cursor-pointer">About</li>
  </Link>
  <Link  spy={true} smooth={true} to="projects">
  <li className="hover:text-yellow-600 border-b-2 border-slate-900 hover:border-yellow-600 cursor-pointer">Projects</li>
  </Link>
  <Link spy={true} smooth={true} to="contact">
  <li className="hover:text-yellow-600 border-b-2 border-slate-900 hover:border-yellow-600 cursor-pointer">Contact</li>
  </Link>
                </ul>
              </div>
            </div>
<div>
{click && content}
</div>
<button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
        </div>
        
      </nav>
   
  )
}

export default nav;
