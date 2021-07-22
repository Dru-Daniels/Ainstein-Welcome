import React, { useState } from 'react';
import { Collapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Internalize = ({dotIcon, faChevronCircleUp, faChevronCircleDown}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const arrowIcon = <FontAwesomeIcon icon={isOpen? faChevronCircleUp : faChevronCircleDown} className="features-arrow-icon"/> 

  return (
    <div className="features-category-wrapper">
      <div className="feature-category-title">
        <h4 onClick={toggle} className="blue">
          {arrowIcon} Internalize For Additional Customization
        </h4>
      </div>
      <Collapse isOpen={isOpen} className="feature-collapse">
        <ul className="features-list">
          <li>
            <h6 className="purple-col">{dotIcon} Add Internal Models</h6>
          </li>
          <li>
            <h6 className="purple-col">{dotIcon} Add Internal Forecasts</h6>
          </li>
          <li>
            <h6 className="purple-col">
              {dotIcon} Add Internal Data -- Ratings, Compliance, Funds, Products, News, Other</h6>
          </li>
          <li>
            <h6 className="purple-col">
              {dotIcon} ETF's/Funds  --  Prices, Reference Data, Alternative Data, News, Other
            </h6>
          </li>
        </ul>
      </Collapse>
    </div>
  )
}

export default Internalize