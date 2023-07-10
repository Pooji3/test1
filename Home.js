import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-bottom">
          {/* <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        Register Now
      </button> */}

          </div>
        </div>
        <div className="bottom-button ">
          <div className="col-md-12">
            {
             <button className="btn btn-success mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        Register Now
      </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;