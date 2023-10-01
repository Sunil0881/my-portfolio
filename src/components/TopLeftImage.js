import topimg from '../assets/topimg.png';
const TopLeftImg = () => {
    return ( 
        <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] '>
            <img src={topimg} alt='blast'></img>
        </div>
     );
}
 
export default TopLeftImg;