'use strict';
import React from 'react';

export default ({pictures, language}) => (
  <div className="child-content">
    <h1>TRAVEL PHOTOS</h1>
    <div className='row'>
    { pictures.length &&
      pictures.map((picture, i) => (
      <div className="col-lg-4 col-xs-12 travel-pics" key={picture.id}>
        <img className="img-responsive" src={picture.imgUrl}/>
        <div>
        {
          language === "English" ?
          (<h5>{picture.description}</h5>) :
          (<h5>{picture.chinese}</h5>)
        }
        </div>
      </div>
      ))
    }
    </div>
  </div>
)
