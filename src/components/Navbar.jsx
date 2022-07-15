import React, { useState } from 'react'
import Button from './Button';
import LifeChoicesLogo from '../assets/life_choices.png'

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICES",link:"/services"},
      {name:"HOW IT WORKS",link:"/howitworks"},
      {name:"ABOUT",link:"/about"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div>
        <span>
        <img src={LifeChoicesLogo} alt='Dragonfly logo' className='max-w-[200px] ml-10 pb-2'></img>
        </span>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center pt-40 md:pt-0 md:pb-0 absolute pb-10 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pr-10 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
          
        }
        <Button>
          CONTACT
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar