'use strict';
import React from 'react';

export default ({language}) => (
  <div>
    <hr className="footer-hr"/>
    {
      language === 'English' ? (<h5 className="footer">© Reed M. Branson 2016 <img src="/mybp.bmp"/></h5>) :
      (<h5 className="footer">© 黃瑞德 2016年 <img src="/mybp.bmp"/></h5>)
    }
  </div>
)
