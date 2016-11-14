'use strict';
import React from 'react';

export default ({pictures, language}) => (
  <div className="child-content col-lg-12 travel-page">
    <h1>{language === 'English' ? `TRAVEL PHOTOS` : `旅行照片`}</h1>
    <div className='row'>
    { pictures.length &&
      pictures.map((picture, i) => (
      <div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 travel-pics" key={picture.id}>
          <img className="img-responsive" src={picture.imgUrl}/>
          <div>
          {
            language === "English" ?
            (<h5>{picture.description}</h5>) :
            (<h5>{picture.chinese}</h5>)
          }
          </div>
        </div>
        <hr className={`picture-${i % 3}`}/>
      </div>
      ))
    }
    </div>
  </div>
)
