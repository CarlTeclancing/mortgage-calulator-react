//import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="left">
          <div className="section">
            <h4>Mortgate Calculator</h4>
            <span>Clear All</span>
          </div>
          <div className="section-1">
            <label htmlFor="amount">Mortgage Amount</label>
            <input type="text" placeholder="enter amount" />
          </div>
          <div className="section-2">
            <div className="col">
              <label htmlFor="amount">Mortgage Term</label>
              <input type="text" />
            </div>
            <div className="col">
              <label htmlFor="amount">Interest Rate</label>
              <input type="text" />
            </div>
          </div>
          <div className="section-1">
            <label htmlFor="">Motgage Type</label>
            <div className="l">
              <input type="radio" name="" id="radio" />
              <span>RePayment</span>
            </div>
            <div className="l">
              <input type="radio" name="" id="radio" />
              <span>Interest Only</span>
            </div>
            
            <button>Calculate Repayment</button>
          </div>
          
      </div>
      <div className="right">

      </div>
    </div>
  )
}

export default App