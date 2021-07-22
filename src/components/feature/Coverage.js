import React, { useState } from 'react';
import { Collapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Coverage = ({dotIcon, faChevronCircleUp, faChevronCircleDown}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const arrowIcon = <FontAwesomeIcon icon={isOpen? faChevronCircleUp : faChevronCircleDown} className="features-arrow-icon"/> 

  return (
    <div className="features-category-wrapper">
      <div className="feature-category-title">
        <h4 onClick={toggle}>
          {arrowIcon} Coverage
        </h4>
      </div>
      <Collapse isOpen={isOpen} className="feature-collapse">
      <ul className="features-list">
            <li><h6 className="feature-col1">
              {dotIcon} US Markets</h6></li>
            <li><h6 className="feature-col1 coverage">
              {dotIcon} Global – US / UK / Europe / Asia
            </h6></li>
          </ul>
      </Collapse>
    </div>
  )
}

export default Coverage