import React from 'react'
import dotted from '../img/dotted-line.png';

const Feature = () => {
  return (
    <>
    <div className="feature">
        <div className="container">
          <h3 style={{textAlign: 'center'}}>CREED Qurbani is <span>Simple</span></h3>
          <div className="row" style={{alignItems: 'center'}}>
            <div className="col">
              <div className="numberBox num-1">
                <div>01</div>
              </div>
              <div className="icon-box">
                <i className="fa-solid fa-list-check"></i>
              </div>
              <p>Select an Qurbani</p>
            </div>
            <div className="col-1">
            <img src={dotted} alt="dotted" />

                </div>
            <div className="col">
              <p>Provide delivery address</p>
              
              <div className="icon-box">
                <i className="fa-solid fa-money-check"></i>
              </div>
              <div className="numberBox num-2">
                <div>02</div>
              </div>

            </div>
            <div className="col-1">
            <img src={dotted} alt="dotted" />

            </div>
            <div className="col">
              <div className="numberBox num-3">
                <div>03</div>
              </div>
              <div className="icon-box">
                <i className="fa-solid fa-file-circle-check"></i>
              </div>
              <p>Make payment</p>

            </div>
            <div className="col-1">
            <img src={dotted} alt="dotted" />

                </div>
            <div className="col">
              <p>Track your order</p>
              
              <div className="icon-box">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <div className="numberBox num-4">
                <div>04</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature