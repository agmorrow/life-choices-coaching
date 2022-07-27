import React from 'react';
import PlaceHolder from '../assets/placeholderhero.jpg';
import PlaceHolderTwo from '../assets/placeholdertwo.png';

export const Home = () => {
  return (
    <div>
      <div className='w-full h-[400px] bg-gray-900/90 '>
        <img className='w-full h-full' src={PlaceHolder} alt="/" />
      </div>
      <h1 className='flex justify-center mt-6'> If this is a life threatening emergency, place call 911 or your local suicide prevention hotline.</h1>

      <div className='w-full pt-20 text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2'>
          
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-1 px-1'>
          <div>
            <img src={PlaceHolderTwo} alt="/"   />
          </div>
          <div>
            <p>
            enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper 
            viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim 
            diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra
             et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin 
             sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin
              sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in 
              arcu cursus euismod quis viverra nibh cras pulvinar mattis
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;