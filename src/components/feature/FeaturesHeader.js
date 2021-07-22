import React from 'react'

const FeaturesHeader = () => {
  return (
    <div className="features-header">
      <div className="features-header-step green">
        <h4>Pick Trackers</h4>
        <p>add 1 - 10 features</p>
      </div>
      <div className="features-header-step red">
        <h4>Personalize</h4>
        <p>add internal data</p>
      </div>
      <div className="features-header-step orange">
        <h4>Choose Data</h4>
        <p>add premium data</p>
      </div>
      <div className="features-header-step teal">
        <h4>Add Coverage</h4>
        <p>global or by region</p>
      </div>
      <div className="features-header-step purple">
        <h4>Internalize</h4>
        <p>additional internal options</p>
      </div>
    </div>
  )
}

export default FeaturesHeader