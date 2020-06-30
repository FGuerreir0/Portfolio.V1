import React, { Component } from 'react';
import './style.scss';
import Social from './../../components/Social';

export default class Intro extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='circular_image'>
            <img src='/images/profile.png' className='profile' alt='Fábio Guerreiro' />
          </div>
          <div className='intro_text'>
            <div>
              <p className='principal_text'>{'<p> Hello world </p>'}</p>
            </div>
            <div className='secondary'>
              <p>
                My name is{' '}
                <span style={{ fontWeight: '700', color: 'white' }}>Fábio Guerreiro</span>
              </p>
              <p>I'm a Junior Full Stack Developer based in</p>
              <p>Setúbal, Portugal</p>
            </div>
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
