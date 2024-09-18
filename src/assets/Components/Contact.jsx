
const Contact = () => {
  return (
    <div id ="contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-yellow-500">Contact me</h1>
<form action="" className="flex flex-col gap-2 lg:w-1/2"> 
  <div  className="lg:flex gap-9">
    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-green-500 b_glow text-xl text-slate-500" placeholder="Enter Your Name" type="text" />
    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-green-500 b_glow text-xl text-slate-500" placeholder="Enter Your Email" type="email" />
  </div>
  <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-green-500 b_glow text-xl text-slate-500" placeholder="Enter Your Message..." name="" id="" cols="20" rows="10"></textarea> 
  <button className="neon-button shadow-xl hover:shadow-green-200/50 text-white border-2 hover:bg-green-500 border-green-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold" type="submit">Send</button>
  </form>
    </div>
  )
}

export default Contact
