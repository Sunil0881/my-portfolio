import BottomImg from "../components/BottomImg";
import Design from "../components/design";
import resume from "../assets/resume.jpg"




const Home = () => {

  
    
  

  return (
    <div className='bg-indigo-950 h-screen' >
      <Design />
      
     
      
     
      <div className='flex'>
        <div>
          <div className='pl-44 pt-44'>
            <h1 className='text-white text-7xl font-bold'>
              Transform Idea <br></br><span className='text-red-500 text-6xl'>Into Digital Reality</span>
            </h1>
            <p className='text-white text-lg pt-3'>Empowering Ideas through Elegant Code<br></br>Where Imagination Meets Innovation</p>
            <div className="pt-12 ">
            <a href={resume} download className="px-3 py-2 border-4 rounded-full border-red-500 font-semibold text-white bg-red-500 hover:text-red-500 hover:bg-white hover:border-white">Download Resume</a></div>
            
          </div>
          
        </div>
       
       <BottomImg />
       
      </div>
     



    </div>
  );
}

export default Home;