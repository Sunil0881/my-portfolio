
const Service = () => {
    return ( 
        <div className="bg-indigo-950 h-screen grid grid-cols-6 gap-7 pt-48">
            <div className="col-span-3">
                <p className="text-white font-bold text-5xl pl-48 pt-8">My Services</p>
                <p className="pl-62 ml-48 pt-4 text-white">With a focus on full-stack development and a knack for<br></br> creative problem-solving, I offer comprehensive web development <br></br>solutions tailored to your unique needs.</p>
            </div>
           
                <div className="bg-white/10 pt-5 pl-5 text-white  w-[190px] h-[200px] rounded-3xl ">    
                   <p className="font-bold text-lg">Design</p>
                   <p>Creating impactful visuals for a lasting impression.</p>
                </div>
                <div className="bg-white/10  pt-5 pl-5 text-white w-[190px] h-[200px] rounded-3xl">
                   <p className="font-bold text-lg">Development</p>
                   <p>Sharp, impactful copy that speaks volumes.</p>
                </div>
                <div className="bg-white/10 pt-5 pl-5 text-white w-[190px] h-[200px] rounded-3xl">
                   <p className="font-bold text-lg">Copywriting</p>
                   <p>Expert full-stack web development tailored just for you.</p>
                </div>
            
            
          
        </div>
     );
}
 
export default Service;