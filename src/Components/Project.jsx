 import img1 from '../assets/images/RHK_Studio.png';
 import img2 from '../assets/images/weather-Forecast.png';
 import img3 from '../assets/images/ReciepeSite.png';
 import img4 from '../assets/images/techscription.png';
const Project = () => {
  return (
    <div id ="projects" className="p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase text-yellow-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
       <a href='https://rhkstudio.com/' target='_blank'> <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-yellow-800 rounded-3xl p-1 border- 2 border-yellow-800 b_glow" src={img1} alt="" /></a>
        <a href='https://search-weather-report.netlify.app/' target='_blank'><img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-yellow-800 rounded-2xl p-1 border- 2 border-yellow-800 b_glow" src= {img2} alt="" /></a>
        <a href='https://reciepe-search-site.netlify.app/' target='_blank'><img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold  text-yellow-800 rounded-2xl p-1 border- 2    border-yellow-800 b_glow" src= {img3} alt="" /></a>
       <a href='https://techscription.com/' target='_blank'><img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center font-semibold text-yellow-800 rounded-2xl p-1 border- 2 border-yellow-800 b_glow" src= {img4} alt="" /></a> 
      </div>
    </div>
  )
}

export default Project
