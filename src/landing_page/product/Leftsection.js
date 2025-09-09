import React from "react";

function LeftSection({
  imageURL,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 mb-5">
          <img src={imageURL} alt="" />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{ProductDescription}</p>
          <div  >
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}</a>
            <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} >
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore} className="ms-2">
            <img src="media/images/appstoreBadge.svg" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
