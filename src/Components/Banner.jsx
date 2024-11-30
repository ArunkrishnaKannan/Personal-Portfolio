import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import img from "../assets/images/hacking.png"
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect } from "react";
import {FaMedium} from 'react-icons/fa6';
const Banner = () => {
  useEffect(() =>{
    AOS.init({
      easing:'ease-out-quart',
      delay: 0,
      duration:750
    })
  },[])
  return (
    <div id ="home" data-aos="fade-up" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal">Hi I'm <span className="text-yellow-500">ArunKrishna</span></h1>
        <p data-aos="fade-left" >Frontend Developer | UI Designer</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
            <a href="https://github.com/arunkrishna97" target="_blank" className="text-white hover:text-green-500 rounded-full glow p-2">
              <AiFillGithub className="text-[28px]"/>
            </a>
            <a href="https://www.linkedin.com/in/arun-krishna-5a8937169/" target="_blank" className="text-white hover:text-green-500 rounded-full glow p-2">
              <AiFillLinkedin className="text-[28px]"/>
            </a>
            <a href="https://x.com/its_arun07" target="_blank" className="text-white hover:text-green-500 rounded-full glow p-2">
              <AiFillTwitterCircle className="text-[28px]"/>
            </a>
            <a href="https://medium.com/@arunkrishnakannan97" target="_blank" className="text-white hover:text-green-500 rounded-full glow p-2">
              <FaMedium className="text-[24px]"/>
            </a>
            </div>
          </div>
        </div>
      </div>
      <img data-aos="fade-up" src={img} width={290} height={290}className="rounded-full border-2 p-1 border-green-500 img_glow" alt=""></img>
    </div>
  )
}

export default Banner
