
import guitar from '../assets/guitar.png'

const Works = () => {
    return (
       
            <div className="  grid grid-cols-5  grid-rows-3 h-screen bg-indigo-950 items-end">
                <div className="col-span-2 row-span-2">
                    <p className="font-bold text-5xl text-white pl-48 ">My  <span className="text-red-500">Works</span></p>
                    <p className="text-white pl-48 pt-3 pb-44">Explore my works to know more about my skills</p>
                </div>

                <div className="bg-white/10  text-white  w-[250px] h-[200px] rounded-3xl ">
                    <img src={guitar} alt="guitar"></img>
                </div>

                <a href="https://onlineguitar-by-gknights.netlify.app/">
                <div className="bg-white/10   text-white  w-[250px] h-[200px] rounded-3xl ">  
                <img src={guitar} alt="guitar"></img>
                <p className="font-bold text-white  pt-3 pl-3">Online Guitar Tuner</p>
                <a href="https://onlineguitar-by-gknights.netlify.app/" className="pl-3">Live Project</a>
                </div></a>


              
                <div className="bg-white/10  text-white  w-[250px] h-[200px] rounded-3xl ">
                <img src={guitar} alt="guitar"></img>  </div>


              
            
             
               
                <div className="bg-white/10   text-white  w-[250px] h-[200px] rounded-3xl ">    </div>

            
                <div className="bg-white/10  text-white  w-[250px] h-[200px] rounded-3xl ">    </div>

             
                <div className="bg-white/10   text-white  w-[250px] h-[200px] rounded-3xl ">    </div>

                
            </div>

       


    );
}

export default Works;