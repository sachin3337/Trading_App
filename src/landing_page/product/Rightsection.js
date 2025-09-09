import React from 'react';

function Rightsection({
  imageURL,
  productName,
  ProductDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1 className='mt-5' >{productName}</h1>
          <p className='text-muted' style={{marginRight:"50px"}}>{ProductDescription}</p>
          <div  >
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}</a>
          </div>
         
        </div>

        <div className="col-6 mb-5">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Rightsection;