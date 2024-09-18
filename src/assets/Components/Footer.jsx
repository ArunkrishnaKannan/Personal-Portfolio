import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FaMedium } from "react-icons/fa6"

const Footer = () => {
  return (
   <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="mb-4 md:mb-0">
        {/* <span></span>
        <p className="text-[18px] my-4">Arunkrishna Kannan</p> */}
      </div>
      <div>
        <h2 className="text-[22px] font-semibold text-yellow-500 py-2 uppercase">Services</h2>
        <ul className="text-[16px] my-4">
          <li className="my-2">Web Design</li>
          <li className="my-2">Web Development</li>
          <li className="my-2">App Development</li>
        </ul>
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className="text-[22px] font-semibold text-yellow-500 py-2 uppercase">Contact</h2>
        <p className="text-[16px] my-4">Email: arunkrishna.kannan@gmail.com</p>
      </div>
      <div>
      <h2 className="text-[22px] font-semibold text-yellow-500 py-2 uppercase">Follow Me</h2>
      <div className="flex space-x-4">
        <a className="my-2  text-white hover:text-green-500 rounded-full glow" href="https://github.com/arunkrishna97" target="_blank"><FaGithub/></a>
        <a className="my-2  text-white hover:text-green-500 rounded-full glow" href="https://x.com/its_arun07" target="_blank"><FaTwitter/></a>
        <a  className="my-2 text-white hover:text-green-500 rounded-full glow"href="https://www.linkedin.com/in/arun-krishna-5a8937169/" target="_blank"><FaLinkedin/></a>
        <a  className="my-2 text-white hover:text-green-500 rounded-full glow"href="https://medium.com/@arunkrishnakannan97" target="_blank"><FaMedium/></a>
      </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer
