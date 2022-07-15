import React from 'react';
import LifeChoicesLogo from '../assets/life_choices.png';
import Button from './Button';

const Navbar = () => {
  let Links =[
    {name:'HOME',link:'/'},
    {name:'SERVICES',link:'/'},
    {name:'HOW IT WORKS',link:'/'},
    {name:'ABOUT',link:'/'},
  ];
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex bg-white py-4  flex items-center justify-between'>
        <span className='px-20'>
          <img src={LifeChoicesLogo} alt='Dragon Fly Logo' className='max-w-[250px]'></img>
        </span>
        <ul className='md:flex md:items-center pr-8'>
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