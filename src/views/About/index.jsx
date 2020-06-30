import React, { Component } from 'react';
import './style.scss';

import Social from './../../components/Social';

import { MdPhotoCamera } from 'react-icons/md';
import { MdPets } from 'react-icons/md';
import {
  IoMdAirplane,
  IoLogoGameControllerB,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoSass
} from 'react-icons/io';
import { FaMotorcycle } from 'react-icons/fa';
import { GiMusicalScore } from 'react-icons/gi';
import { GrReactjs } from 'react-icons/gr';
import { TiHtml5 } from 'react-icons/ti';
import { DiMongodb } from 'react-icons/di';

class About extends Component {
  render() {
    return (
      <>
        <div className='about'>
          <div className='about_container'>
            <p>Hello there! </p>
            <p>I'm a Full Stack Developer, who loves art, design and web development.</p>

            <p>Recently I graduated from Ironhack Lisbon Web Development Bootcamp.</p>

            <p>
              I consider myself a very motivated person who thrives in teamwork and enjoys a
              fast-paced, challenging environment. Also, with self-taught learning abilities, an eye
              for the details and a curious mind.
            </p>
            <p>I’ve worked in a series of interesting jobs, and finally life lead me here.</p>
          </div>
        </div>
        <div className='skills'>
          <span>Skills:</span>
          <div className='skills_about'>
            <div className='skill_icon'>
              <TiHtml5 size={60} />
              <p>HTML</p>
            </div>
            <div className='skill_icon'>
              <IoLogoCss3 size={60} />
              <p>CSS</p>
            </div>
            <div className='skill_icon'>
              <IoLogoSass size={60} />
              <p>SASS</p>
            </div>

            <div className='skill_icon'>
              <IoLogoJavascript size={60} />
              <p>JavaScript</p>
            </div>
            <div className='skill_icon'>
              <IoLogoNodejs size={60} />
              <p>NodeJs</p>
            </div>
            <div className='skill_icon'>
              <GrReactjs size={60} />
              <p>ReactJs</p>
            </div>
            <div className='skill_icon'>
              <DiMongodb size={60} />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div className='hobbies'>
          <span>Hobbies:</span>
          <div className='hobbies_about'>
            <div className='hobbies_icon'>
              <MdPhotoCamera size={60} />
              <p>Photography</p>
            </div>
            <div className='hobbies_icon'>
              <IoMdAirplane size={60} />
              <p>Travel</p>
            </div>
            <div className='hobbies_icon'>
              <FaMotorcycle size={60} />
              <p>Motorcycle</p>
            </div>
            <div className='hobbies_icon'>
              <GiMusicalScore size={60} />
              <p>Music</p>
            </div>
            <div className='hobbies_icon'>
              <MdPets size={60} />
              <p>Animals</p>
            </div>
            <div className='hobbies_icon'>
              <IoLogoGameControllerB size={60} />
              <p>Gaming</p>
            </div>
          </div>
        </div>
        <div className='social_bottom'>
          <div>
            <Social />
          </div>
        </div>
      </>
    );
  }
}

export default About;
