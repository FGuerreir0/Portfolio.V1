import React from 'react';
import './style.scss';
import { IoLogoGithub } from 'react-icons/io';

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card__media'>
        <img src={props.photo} alt={props.name} />
      </div>
      <div className='card__body'>
        <div className='body_card'>
          <span>
            <strong>{props.name}</strong>
          </span>
          <span>{props.description}</span>
        </div>
        <div className='Link_container'>
          <a
            style={{ color: 'white' }}
            target='_blank'
            rel='noopener noreferrer'
            href={props.github}
          >
            <IoLogoGithub size={30} style={{ margin: '15px 10px 10px 10px' }} />
          </a>
          <a
            style={{ color: 'white', textDecoration: 'none' }}
            target='_blank'
            rel='noopener noreferrer'
            href={props.link}
          >
            Demo
          </a>
        </div>
      </div>
      <span className='span_tooltip'>
        {props.tech} <br></br>
        <br></br>
        {props.api}
      </span>
    </div>
  );
}
