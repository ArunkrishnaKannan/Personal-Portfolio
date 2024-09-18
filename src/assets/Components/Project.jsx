 import img1 from '../images/nammalvar.png';
 import img2 from '../images/GenuineCoffe.png';
 import img3 from '../images/TechScription_Landing_Page.png';
 import img4 from '../images/ReciepeSite.png';
const Project = () => {
  return (
    <div id ="projects" className="p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase text-yellow-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-yellow-800 rounded-3xl p-1 border- 2 border-yellow-800 b_glow" src={img1} alt="" />
        <img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-yellow-800 rounded-2xl p-1 border- 2 border-yellow-800 b_glow" src= {img2} alt="" />
        <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-yellow-800 rounded-2xl p-1 border- 2 border-yellow-800 b_glow" src= {img3} alt="" />
        <img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold  text-yellow-800 rounded-2xl p-1 border- 2    border-yellow-800 b_glow" src= {img4} alt="" />

      </div>
    </div>
  )
}

export default Project
