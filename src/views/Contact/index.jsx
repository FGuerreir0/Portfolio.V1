import React, { Component } from 'react';
import './style.scss';
import { AiOutlineMail } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Social from './../../components/Social';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='contact_container'>
          <div>
            <p className='first_paragraph'>
              {' '}
              So, if you're interested in working with a{' '}
              <strong>Junior Full Stack Developer</strong> who is eager to learn and motivated to
              contribute for a project or a company, get in touch.{' '}
            </p>

            <div className='email_style'>
              <AiOutlineMail />{' '}
              <a
                href='mailto:ffsguerreiro@hotmail.com'
                style={{ textDecoration: 'none', paddingLeft: '10px' }}
              >
                ffsguerreiro@hotmail.com
              </a>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p> Bellow you have my resume, take a look!</p>
            <Link to='/files/resume.pdf' target='_blank' download>
              <TiDocumentText size={80} />
            </Link>
          </div>
        </div>
        <div className='social_bottom'>
          <div>
            <Social />
          </div>
        </div>
      </div>
    );
  }
}
