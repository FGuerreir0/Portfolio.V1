import React, { Component } from 'react';
import ProjectCard from './../ProjectCard';
import Social from './../Social';
import './style.scss';

export default class List extends Component {
  render() {
    return (
      <>
        <div className='introduction_projects' style={{ textAlign: 'center' }}>
          <p>Here you can access some of my favorite projects.</p>
        </div>
        <div className='all_cards'>
          <div className='card_space'>
            <ProjectCard
              link='https://tilesofherozakin.netlify.app'
              photo='https://res.cloudinary.com/fguerreir0/image/upload/v1593131017/Personal/Captura_de_ecra%CC%83_2020-06-26_a%CC%80s_01.22.10_phwfvj.png'
              name='Tiles of Herozakin'
              description='JavaScript Game'
              github='https://github.com/FGuerreir0/game-project'
              tech='HTML / CSS / JavaScript (Dom Manipulation)'
            />
          </div>
          <div className='card_space'>
            <ProjectCard
              link='https://art-geo.herokuapp.com'
              photo='https://res.cloudinary.com/fguerreir0/image/upload/v1593131376/Personal/Captura_de_ecra%CC%83_2020-06-26_a%CC%80s_01.29.12_czwggi.png'
              name='Art-Geo'
              description='Social Sharing Art App'
              github='https://github.com/michaeljgaeta/project-2-geo-art'
              tech='Node(Express / Handlebars) / MongoDB'
              api='GoogleApi / Nodemailler / Cloudinary / Bootstrap'
            />
          </div>
          <div className='card_space'>
            <ProjectCard
              link='https://uniflow-ironhack.herokuapp.com'
              photo='https://res.cloudinary.com/fguerreir0/image/upload/v1593131494/Personal/Captura_de_ecra%CC%83_2020-06-26_a%CC%80s_01.31.13_dexaxh.png'
              name='uniflow'
              description='Social Crowdfunding App'
              github='https://github.com/FGuerreir0/project3-crowdfunding'
              tech='MongoDB / Express / React / Node'
              api='Stripe / Cloudinary / Tailwind'
            />
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
