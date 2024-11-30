import img from "../assets/images/online-games-addiction-concept-illustration.png"
const About = () => {
 
  return (

      <div id="about" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={img} width={290} height={290}className="rounded-full border-2 p-1 border-green-500 img_glow" alt=""></img>
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-yellow-500">About Me</h1>
        <p data-aos="fade-left" className="text-left">I have a 2 years of experience in the frontend development, and created a responsive and accessible web layouts,With interacting UI.</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div id = "pdf-content" className="flex space-x-2">
           <a href="/ArunKrishnaResume.pdf" download><button  className="neon-button shadow-xl hover:shadow-green-200/50 text-white border-2 hover:bg-green-500 border-green-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
