'use strict';

import React from 'react';
import {Link} from 'react-router';

export default ({toggleChinese, toggleEnglish, language}) => (
  <nav className="navbar navbar-default">
    <div>

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

      </div>


      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul className="nav navbar-nav">
          <li>
           <Link to="/home" activeClassName="active">{language === 'English' ? (<span className="navbar-links">HOME</span>) : (<span className="navbar-links">主頁</span>)}</Link>
          </li>
          <li>
           <Link to="/about" activeClassName="active">{language === 'English' ? (<span className="navbar-links">ABOUT</span>) : (<span className="navbar-links">簡介</span>)}</Link>
          </li>
          <li className="">
            <Link to='/portfolio' activeClassName="active">{language === 'English' ? (<span className="navbar-links">WORK</span>) : (<span className="navbar-links">作品</span>)}</Link>
          </li>
          <li>
            <Link to='/travel' activeClassName="active">{language === 'English' ? (<span className="navbar-links">TRAVEL</span>) : (<span className="navbar-links">旅行照片</span>)}</Link>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
        { language === 'English' ?  (
          <img src='toggleChinese.png' onClick={toggleChinese} className="toggle-lang"/>
          ) :  (
          <img src='toggleEnglish.png' onClick={toggleEnglish} className="toggle-lang"/>
          )
        }
        </ul>
      </div>
    </div>
  </nav>
)
