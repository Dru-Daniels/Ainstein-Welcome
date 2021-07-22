import React from 'react'

const Pricing = () => {

  const togglePrices = () => {
    const flexy = document.getElementById('flexy');
    flexy.classList.toggle('show-monthly');
  }

  const microsoftLink = "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/stocksmart1608173190585.ainstein-ai?tab=Overview"

  return(
      <section className="pricing-container" id="pricing">
        <h1>Our Pricing</h1>

        <div className="toggle-container">
          <span>Monthly</span>
          <span>
            <input type="checkbox" name="toggle" id="toggle" unchecked onClick={togglePrices} />
            <label for="toggle">
              <div className="ball"></div>
            </label>
          </span>
          <span>Annually</span>
        </div>

        <div id="flexy" className="flex">
          <div className="price-box">
            <h4>Enterprise Silver</h4>
            <p>
              <h6>Per Tracker</h6>
              <span className="monthly">
                $180,000
              </span>
              <span className="annually">
                $15,000
              </span>
            </p>
            <p>
              <h6>For 10 Trackers</h6>
              <span className="monthly">
                $1,800,000
              </span>
              <span className="annually">
                $150,000
              </span>
            </p>
            <ul>
              <li>Internal Access</li>
              <li>500 Users or Less </li>
              <li>500 Trackers</li>
            </ul>
            <a href={microsoftLink} rel="noreferrer" target="_blank">
              Learn More
            </a>
          </div>

          <div className="price-box price-box-premium">
            <h4>Enterprise Gold</h4>
            <p>
              <h6>Per Tracker</h6>
              <span className="monthly">
                $360,000
              </span>
              <span className="annually">
                $30,000
              </span>
            </p>
            <p>
              <h6>For 10 Trackers</h6>
              <span className="monthly">
                $3,600,000
              </span>
              <span className="annually">
                $300,000
              </span>
            </p>
            <ul>
              <li>Internal Access</li>
              <li>Unlimited Users</li>
              <li>Unlimited Internal Access</li>
              <li>1,000 Trackers</li>
              <li>Free Integration of Your Data</li>
              <li>Enterprise License Cap</li>
            </ul>
            <a href={microsoftLink} rel="noreferrer" target="_blank">
              Learn More
            </a>
          </div>

          <div className="price-box">
            <h4>Enterprise Retail</h4>
            <p>
              <h6>Per User</h6>
              <span className="monthly">
                $30
              </span>
              <span className="annually">
                $360
              </span>
            </p>
            <ul>
              <li>External Access to Cubes for<br/>Retail Users - B2B2C</li>
              <li><strong>Both Enterprise License Levels</strong>
              <br/>Automatic Access to Upgrades</li>
              <li><strong>Enterprise Gold Bonus</strong><br/>When you Purchase All Ten Trackers
              <br/>Any Additional Trackers are Free
              </li>
              <li>* Microsoft Will Bill for Cloud Usage<br/>* Surcharge for Partners Premium Data <br/>* 500 User Minimum for Enterprise</li>
            </ul>
            <a href={microsoftLink} rel="noreferrer" target="_blank">
              Learn More
            </a>
          </div>
        </div>
      </section>
  )
}

export default Pricing