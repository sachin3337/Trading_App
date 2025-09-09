import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row ">
        <div className="text-center mt-5 mb-5 border-bottom">
          <h1>Pricing</h1>
          <h3 className="mt-3 fs-5 mb-5 text-muted">
            Free equity investments and flat ₹20 traday and F&O trades{" "}
          </h3>
        </div>
      </div>

      <div className="row text-center">
        <div className="col p-4">
          <img src="media/images/pricingMF.svg" alt="" />
          <h1 className="fs-3">Free Equity Deliver</h1 >
          <p className="p-2">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>
        <div className="col p-4">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h1 className="fs-3">Intraday and F&O Trades</h1 >
          <p className="ms-6">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col p-4">
          <img src="media/images/pricing0.svg" alt="" />
          <h1 className="fs-3">Free direct MF</h1 >
          <p className="p-2">
            All direct mutual fund investments are absolutely free – ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
