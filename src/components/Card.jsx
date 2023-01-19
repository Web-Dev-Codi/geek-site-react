import React from 'react'
import logo2 from "./assets/logo2.png";

function Card() {
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={logo2} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New Geek line released!</h2>
          <p>
            You're a Geek and you're proud of it! Let the world know with our
            selection of Geeks programming, computer, website and app design
            T-shirts and hoodies.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    );
}

export default Card