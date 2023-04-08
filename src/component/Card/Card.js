import React from 'react';
import nepal from './../../Image/nepal.png';
import forest from './../../Image/sundorbon.png';
import hill from './../../Image/Sreemongol.png';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className='flex'>
      <div className='flex-1 w-33 my-2 ml-2'>
        <div className="card w-min h-min glass">
          <img src={nepal} alt="nepal!" />
          <div className="card-body">
            <h2 className="card-title">Nepal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <div className="card-actions justify-center">
              <Link to={'/booking'}><button  className="btn btn-primary">Book now!</button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 w-33 my-2'>
        <div className="card w-min h-min glass">
          <img src={forest} alt="forest!" />
          <div className="card-body">
            <h2 className="card-title">India</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <div className="card-actions justify-center">
            <Link to={'/booking'}><button  className="btn btn-primary">Book now!</button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 w-33 my-2'>
        <div className="card w-min h-min glass">
          <img src={hill} alt="hill!" />
          <div className="card-body">
            <h2 className="card-title">Bhutan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
              </p>
            <div className="card-actions justify-center">
            <Link to={'/booking'}><button  className="btn btn-primary">Book now!</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;