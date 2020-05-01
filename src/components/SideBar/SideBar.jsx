import React from 'react';
import './style.css';
import {CSSTransitionGroup} from "react-transition-group";

const SideBar = () =>{
  return <CSSTransitionGroup
    transitionName="sidebar"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
      <div className='side-section'>
        <div className="header">
          <ul>
            <li><a href="/">Browse</a></li>
            <li><a href="/">How it works</a></li>
            <li><a href="/">Help</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
        <div className='menubar d-md-none d-flex'>
          <ul className='d-flex justify-content-end'>
            <li><a href="/"><img src='/img/Oval.svg' alt=''className='mr-2' />Alex Birdsman</a></li>
          </ul>
          <ul>
            <li><a href="/"><img src='/img/notification.png' alt='' /> </a></li>
            <li><a href="/"><img src='/img/harmburger.svg' alt='' /></a></li>
          </ul>
        </div>
        <section className='middle-section'>
          <h3>Welcome! Thanks for joining us.</h3>
          <span className='my-5'>
            <img src='/img/pattern.svg' alt='' className='img-fluid' />
          </span>
          <button onClick={() =>  window.open('https://www.google.com/', "_blank")}>Set up your account</button>
        </section>
        <footer>
          <h6>Description</h6>
          <p>Hanc ego cum soluta nobis est laborum et accusamus et via procedat oratio.
            Sed ut ad modum, quaeso, interpretaris?
            sicine eos censes aut rerum hic tenetur.</p>
        </footer>
      </div>
  </CSSTransitionGroup>
}
export default SideBar;