import blast from '../assets/blast.png';
const BottomImg = () => {
    return (
        <div className='h-full bg-primary/50'>
            <div  >
                <div className='absolute mix-blend-color-dodge w-[1200px]  right-0 bottom-0 translate-z-0 '>
                    <img src={blast} alt='blast'></img>
                </div>
            </div>
        </div>
    );
}

export default BottomImg;