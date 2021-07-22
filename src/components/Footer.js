import React from 'react' 

import wtCubeImg from '../assets/scss/images/wt-transp-cube.png'
import AiLogoBars from '../assets/scss/images/AiLogoBars.png'
import microsoftImg from '../assets/scss/images/spza-header-logo-microsoft-white.svg'
import microsoftBag from '../assets/scss/images/microsoft-bag.png'

const Footer = () => {
  return (
    <div className="footer">
          <span> 
              <a href="https://ainstein-temp.azurewebsites.net/" target="_blank" rel="noreferrer">
                  <img src={wtCubeImg} className="cube-icon" alt="white cube"/> 
                  <p>Meet Ainstein AI</p>
                  <p className="ai-footer-logo"><img src={AiLogoBars} alt="Ainstein Logo"/>Ainstein</p>
              </a>
          </span>
          <span>
              <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/stocksmart1608173190585.ainstein-ai" target="_blank" rel="noreferrer">
                  <img src={microsoftImg} alt="microsoft logo"/>
                  <img src={microsoftBag} className="microsoft-icon" alt="microsoft bag"/>
                  <p>Ainstein On Marketplace</p>
              </a>
          </span>
    </div>
  )
}

export default Footer