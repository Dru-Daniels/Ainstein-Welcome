import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const Banner = (props) => {
    return (
      <section className="welcome-banner">
        <h1 >Welcome to the Leader of <span>Cloud-Native Risk Analytics. </span> Let's Learn about <span>Your Ainstein</span> Today! </h1>
        <p>Discover our features, pricing and don't forget to schedule a demo. </p>
        <a href="https://calendly.com/Ainstein-Ai" target="_blank" rel="noopener noreferrer"
        ><FontAwesomeIcon icon={ faCalendarDay } /> Book a Demo
        </a>
      </section>
    )
  }

export default Banner
