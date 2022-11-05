import React from 'react';

const Footer = () => {
  return (
    <>
   
      <div className='bg-[#333333] text-white flex justify-start items-center pb-4'>
        <ul className='inline-block mt-1 lg:mt-4'>
          <li>Carol Bartholow</li>
          <li>720.933.5329</li>
          <li>contact@lifechoicescoaching.com</li>
        </ul>
      </div>
      <div className='bg-[#333333] text-white flex justify-end items-center pb-4'>
       <h3>Lorem ipsum dolor sit amet, consectetur <br />
         adipiscing elit, sed do eiusmod tempor <br />
         incididunt ut labore et dolore magna aliqua.</h3>
      </div>
      {/* Copyright */}
      <div className='bg-[#333333] text-white flex justify-center items-center pb-4'>
        <h3 className='inline-block mt-1 lg:mt-4'>© 2022 All Rights Reserved | Designed by Austin Morrow</h3>
      </div>
    
    </>
  )
}
export default Footer;