import React from "react";

function Brockerage() {
  return (
    <div className="container border-top">
      <div className="row mt-5">
        <div className="col text-center">
            <a href="" style={{textDecoration:"none"}}> <h4>Brokerage calculator</h4> </a>
        </div>
        <div className="col text-center">
            <a href="" style={{textDecoration:"none"}}> <h4>List of charges</h4> </a>
        </div>
        <div className="mt-4 text-muted mb-3">
            <ul>
                <li>Call & Trade and RMS auto-squreoff: Additional charges of ₹50 + GST per order</li>
                <li className="mt-2">Digital contract notes will be sent via e-mail.</li>
                <li className="mt-2">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                <li className="mt-2">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li className="mt-2">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li className="mt-2">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Brockerage;
