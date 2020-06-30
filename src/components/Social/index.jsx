import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from 'react-icons/io';

export default function Social() {
  return (
    <div className='Social_Container'>
      <a
        style={{ color: 'white' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/fabiofsguerreiro/'
      >
        <IoLogoLinkedin size={25} style={{ margin: '5px 10px 10px 10px' }} />
      </a>
      <a
        style={{ color: 'white' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/FGuerreir0'
      >
        <IoLogoGithub size={25} style={{ margin: '5px 10px 10px 10px' }} />
      </a>
      <a
        style={{ color: 'white' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/fguerreir0/?hl=pt'
      >
        <IoLogoInstagram size={25} style={{ margin: '5px 10px 10px 10px' }} />
      </a>
    </div>
  );
}
