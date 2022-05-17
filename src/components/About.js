import React from 'react'
import './About.scss'

function About(props) {
  return (
    <div className="section-component about" id="about">
      <div className="container about__container">
        <div className="about__title title">
          <span className="title__number">01.</span>
          <span className="title__text">About Me</span>
        </div>
        <div className="about__detail">
          <div className="about__right">
            <p>
              Hello! My name is Black Valentine and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2012 when I decided to try editing custom Tumble themes - turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital expreriences at
              Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="about__list">
              <li className="about__item">
                <span>Javascripts (ES6+)</span>
              </li>
              <li className="about__item">
                <span>ReactJs</span>
              </li>
              <li className="about__item">
                <span>NodeJs</span>
              </li>
              <li className="about__item">
                <span>TypeScript</span>
              </li>
              <li className="about__item">
                <span>NextJs</span>
              </li>
              <li className="about__item">
                <span>ASP.NET</span>
              </li>
            </ul>
          </div>
          <div className="about__left">
            <picture>
              <img
                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/47351295_1869123853184966_2209675839597969408_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2Ceu-TumMGwAX_ZGW_Q&_nc_ht=scontent.fhan2-3.fna&oh=00_AT_ExqIFQCPVXNu6x2-xfB5PbKra-lvtdWXzm76T0itmmQ&oe=62990908"
                alt="avatar"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
