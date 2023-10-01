import circle from '../assets/circles.png'
const Circle = () => {
    return ( 
        <div className='h-full '>
        <div w-full h-full  >
            <div className='absolute mix-blend-color-dodge w-[1200px]  right-0 bottom-0 translate-z-0 w-100 h-100 pl-96 flex justify-end' >
                <img src={circle} alt='circle' width="300" height="300"></img>
            </div>
        </div>
    </div>
     );
}
 
export default Circle;