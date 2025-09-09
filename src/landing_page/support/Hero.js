import React from "react";

function Hero() {
  return (
    <div className="container-flued " id="supportHero">
      <div className="  mb-5 " id="supportWrapper">
        <h5 style={{ marginLeft: "100px" }}>Support Portal</h5>
        <a href="" style={{ marginRight: "150px" }}>
          Track Tickets
        </a>
      </div>
      <div className="row ">
        <div className="col-2"></div>
        <div className="col-4 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O, why is my order getting rejected.."
            className="mb-2 mt-3"
          />
          <div className="mb-5">
            <a href="">Track account opening</a>
            <a href="" className="ms-3 ">
              Track segment activation
            </a>
            <a href="" className="ms-3">
              Intraday margins
            </a>
            <a href="" className="ms-3">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-4">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mt-2">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
