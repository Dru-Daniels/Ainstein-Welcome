import React from 'react';

import FeaturesHeader from "./FeaturesHeader"
import PortfolioTracker from './PorftolioTracker'
import ResearchLevel from './ResearchLevel'
import Coverage from './Coverage'
import Internalize from './Internalize'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faShoePrints, faChevronCircleDown, faChevronCircleUp, faCircle 
} from '@fortawesome/free-solid-svg-icons'

const Features = () => {

  const dotIcon =   <FontAwesomeIcon icon={faCircle} /> 

  return (
    <section className="features-container" id="features">
      <div className="features-title-container">
        <h1 className="features-title">Features</h1>
        <h4 className="features-title-sub">
          See how you can personalize “Your Ainstein” to your preferences in 5 simple steps <FontAwesomeIcon icon={ faShoePrints }  transform={{ rotate: -42 }} />
        </h4>
      </div>
      <FeaturesHeader/>
      <div className="features-trackers">
        <PortfolioTracker 
          faChevronCircleDown={faChevronCircleDown}
          faChevronCircleUp={faChevronCircleUp}
          dotIcon={dotIcon}
        />
        <ResearchLevel
          faChevronCircleDown={faChevronCircleDown}
          faChevronCircleUp={faChevronCircleUp}
          dotIcon={dotIcon}
        />
        <Coverage
          faChevronCircleDown={faChevronCircleDown}
          faChevronCircleUp={faChevronCircleUp}
          dotIcon={dotIcon}
        />
        <Internalize
          faChevronCircleDown={faChevronCircleDown}
          faChevronCircleUp={faChevronCircleUp}
          dotIcon={dotIcon}
        />
      </div>
    </section>
  );
};

export default Features;