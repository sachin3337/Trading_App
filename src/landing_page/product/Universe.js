import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {

   const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/Signup"); // Navigate to register page
  };

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted mt-2">
          Extend your trading and investment exprience even further with our
          partner platforms
        </p>

       <div className="row mt-5">
         <div className="col">
          <img src="media/images/smallcaseLogo.png" alt="" style={{width:"50%"}} />
          <p className="mt-3 text-muted text-small">Thematic investment platform</p>
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"50%"}} className="mt-5"/>
          <p className="mt-3 text-muted text-small">Asset management</p>
        </div>
        <div className="col">
          <img src="media/images/streakLogo.png" alt="" style={{width:"40%"}}/>
          <p className="mt-3 text-muted text-small">Algo & strategy platform</p>
          <img src="media/images/goldenpiLogo.png" alt="" style={{width:"45%"}} className="mt-5"/>
          <p className="mt-3 text-muted text-small">Bonds trading platform</p>
          <button onClick={goToRegister} className='btn btn-primary mt-5 mb-5' style={{width:"45%"}} >Sign up now</button>
        </div>
        <div className="col">
          <img src="media/images/sensibullLogo.svg" alt="" style={{width:"50%"}} className="mt-3"/>
          <p className="mt-3 text-muted text-small">Algo & strategy platform</p>
          <img src="media/images/dittoLogo.png" alt="" style={{width:"40%"}} className="mt-5"/>
          <p className="mt-3 text-muted text-small">Bonds trading platform</p>
        </div>
        
       </div>
      </div>
    </div>
  );
}

export default Universe;
