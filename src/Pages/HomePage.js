import React from 'react';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <header className='hero'>
        <h1 className='hero-text'>
          Hi, I'm <span>Carl</span>
        </h1>
        <h2>A Web Developer</h2>
        <p className='h-sub-text'> 'My aim as a Web Developer is to be at least 1% better than I was Yesterday!'</p>
        <div className='buttons '>
          <Link to='/about'>
            <button className=' btn-port'>About Me</button>
          </Link>
          <Link to='/portfolio'>
            <button className=' btn-port'>View My Work</button>
          </Link>
          <Link to='/blogs'>
            <button className=' btn-port'>Read my Blogs</button>
          </Link>
          <Link to='/contact'>
            <button className=' btn-port'>Contact Me</button>
          </Link>
        </div>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/carlmichaelmcintosh' target='_blank' rel='noreferrer' className='icon-holder'>
            <FontAwesomeIcon icon={faLinkedin} className='icon li' />
          </a>
          <a href='https://github.com/cod3rcarl' target='_blank' rel='noreferrer' className='icon-holder'>
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </a>
          <a href='https://twitter.com/cod3rcarl' target='_blank' rel='noreferrer' className='icon-holder'>
            <FontAwesomeIcon icon={faTwitter} className='icon tw' />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
