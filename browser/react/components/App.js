'use strict';

import React from 'react';
import NavContainer from '../containers/NavContainer';
import FooterContainer from '../containers/FooterContainer';

export default ({children}) => (
      <div id="main" className="container-fluid">
        <NavContainer/>
          { children }
        <FooterContainer/>
      </div>
)
