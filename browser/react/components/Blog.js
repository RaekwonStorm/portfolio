'use strict';
import React from 'react';

export default ({language}) => (
  <div className="child-content col-lg-12">
    { language === 'English' ?
    (
      <div>
      <h1>Blog</h1>
      <h4>Coming soon...</h4>
      </div>
    ) :   (
      <div>
      <h1>博客</h1>
      <h4>即將推出...</h4>
      </div>
    )
  }
  </div>
)
