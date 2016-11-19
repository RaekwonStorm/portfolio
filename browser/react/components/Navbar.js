'use strict';

import React from 'react';
import {Link} from 'react-router';

export default ({toggleChinese, toggleEnglish, language}) => (
  <nav className="navbar navbar-default">
    <div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        <ul className="nav navbar-nav">
          <li>
           <Link to="/home" activeClassName="active">{language === 'English' ? (<span className="navbar-links">HOME</span>) : (<span className="navbar-links">主頁</span>)}</Link>
          </li>
          <li>
           <Link to="/about" activeClassName="active">{language === 'English' ? (<span className="navbar-links">ABOUT</span>) : (<span className="navbar-links">簡介</span>)}</Link>
          </li>
          <li className="">
            <Link to='/work' activeClassName="active">{language === 'English' ? (<span className="navbar-links">WORK</span>) : (<span className="navbar-links">作品</span>)}</Link>
          </li>
          <li>
            <Link to='/travel' activeClassName="active">{language === 'English' ? (<span className="navbar-links">TRAVEL</span>) : (<span className="navbar-links">旅行照片</span>)}</Link>
          </li>
          {/*<li>
            <Link to='/blog' activeClassName="active">{language === 'English' ? (<span className="navbar-links">BLOG</span>) : (<span className="navbar-links">博客</span>)}</Link>
          </li>
          */}
          <li className="small-toggle">
            <Link>
          { language === 'English' ?  (
            <span onClick={toggleChinese} className="toggle-lang toggle-left navbar-links">繁體中文</span>
            ) :  (
            <span onClick={toggleEnglish} className="toggle-lang toggle-left navbar-links">ENGLISH</span>
            )
          }
            </Link>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
        { language === 'English' ?  (
          <span onClick={toggleChinese} className="toggle-lang toggle-right navbar-links">繁體中文</span>
          ) :  (
          <span onClick={toggleEnglish} className="toggle-lang toggle-right navbar-links">ENGLISH</span>
          )
        }
        </ul>
      </div>
    </div>
  </nav>
)
