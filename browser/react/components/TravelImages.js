'use strict';
import React from 'react';

export default ({pictures, language}) => (
  <div>
    <h1>Travel Picture Page Headline Placeholder lel kek!</h1>
    <div className='row'>
    { pictures.length &&
      pictures.map((picture, i) => (
      <div className="col-lg-4 col-xs-12" key={picture.id}>
        <img className="img-responsive" src={picture.imgUrl}/>
        <div>
        {
          language === "English" ?
          (<p>{picture.description}</p>) :
          (<p>{picture.chinese}</p>)
        }
        </div>
      </div>
      ))
    }
    </div>
  </div>
)
