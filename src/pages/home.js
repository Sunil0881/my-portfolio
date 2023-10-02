import BottomImg from "../components/BottomImg";


const Home = () => {
  return (
    <div className='bg-indigo-950 h-screen' >
     
      
     
      <div className='flex'>
        <div>
          <div className='pl-44 pt-44'>
            <h1 className='text-white text-7xl font-bold'>
              Transform Idea <br></br><span className='text-red-500 text-6xl'>Into Digital Reality</span>
            </h1>
            <p className='text-white text-lg pt-3'>Empowering Ideas through Elegant Code<br></br>Where Imagination Meets Innovation</p>
          </div>
        </div>
       
       <BottomImg />
       
      </div>
     



    </div>
  );
}

export default Home;