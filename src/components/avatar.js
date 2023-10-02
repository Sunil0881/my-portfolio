import avatar from '../assets/avatar.png';
const Avatar= () => {
    return (
        <div className='h-full bg-primary/50  '>
          
                <div className='absolute  w-[1200px]  right-0 bottom-0 translate-z-0 pr-32 flex justify-end'>
                    <img src={avatar} alt='avatar'></img>
                </div>
            
        </div>
    );
}

export default Avatar;