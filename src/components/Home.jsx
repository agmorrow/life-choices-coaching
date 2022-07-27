import React from 'react';
import PlaceHolderTwo from '../assets/placeholdertwo.png';

export const Home = () => {
  return (
    <div>
  {/* About */}
      <div className='w-full pt-20 text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        
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

      {/* Services */}

      <h1 className='flex justify-center'>Services</h1>
  </div>
  );
}

export default Home;