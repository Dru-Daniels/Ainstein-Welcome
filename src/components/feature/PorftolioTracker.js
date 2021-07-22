import React, { useState } from 'react';
import { Collapse} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioTracker = ({faChevronCircleUp, faChevronCircleDown, dotIcon}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const arrowIcon = <FontAwesomeIcon icon={isOpen? faChevronCircleUp : faChevronCircleDown} className="features-arrow-icon"/> 

  return (
    <div className="features-category-wrapper">
      <div className="feature-category-title">
        <h4 onClick={toggle}>
          {arrowIcon} Portfolio Tracker & Ratings
        </h4>
      </div>
      <Collapse isOpen={isOpen} className="feature-collapse">
        <ul className="features-list">
          <li>
            <h6 className="feature-col1">{dotIcon} Portfolio Cubes</h6>
            <span>
              <h6>{dotIcon} Internal Portfolios</h6>
              <h6>{dotIcon} External Portfolios (Retail)</h6>
            </span>
          </li>
          <li>
            <h6 className="feature-col1">{dotIcon} Earnings Engine</h6>
            <span>
              <h6>{dotIcon} Internal Earnings Data	</h6>
            </span>
            <h6 className="orange-col">{dotIcon} FactSet - Earnings</h6>
          </li>
          <li>
            <h6 className="feature-col1">{dotIcon} ESG</h6>
            <span>
              <h6>{dotIcon} Internal ESG Data</h6>
            </span>
            <h6 className="orange-col">{dotIcon}Arabesque - ESG</h6>
          </li>
          <li>
            <h6 className="feature-col1">{dotIcon} ETF's / Funds</h6>
            <span>
              <h6>{dotIcon} Internal ETFs/Funds</h6>
            </span>
            <h6 className="orange-col">{dotIcon} ETF Global - ETFs</h6>
          </li>
        </ul>
      </Collapse>
    </div>
  )
}

export default PortfolioTracker