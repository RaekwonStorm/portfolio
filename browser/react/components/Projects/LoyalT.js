'use strict';
import React from 'react';

const LoyalT = {
  name: 'LoyalT',
  description: 'A simple mobile app implementing a loyalty rewards program for our favorite coffee cart in NYC financial district, Esprezzatura.',
  tech: 'Built for Android using Ionic/Cordova framework, Angular, and PouchDB.',
  github: 'https://github.com/Octowl/loyalT-app',
  desc_chinese: '製作了一個移動APP，它將忠心回饋項目實踐用於座落在紐約金融區的Esprezzatura, 一家我很喜歡的咖啡店.',
  tech_chinese: '用的科技：Ionic/Cordova, Angular, and PouchDB.',
  date: 'November 2016',
  imageUrl: ['/Projects/LoyalT1.PNG', '/Projects/LoyalT2.PNG']
}

export default ({language}) => (
  <div className="row project-container">
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project-description">
      <h1><a href={LoyalT.github}>{LoyalT.name}<span className="project-btn btn btn-social-icon btn-github"><span className='fa fa-github social-icons'/></span></a></h1>
      <h5>{language === 'English' ? LoyalT.description : LoyalT.desc_chinese}</h5>
      <h5>{language === 'English' ? LoyalT.tech : LoyalT.tech_chinese}</h5>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project-media">
      {
        LoyalT.imageUrl.map((image, i) => (
            <img src={image} key={i}/>
          )
        )
      }
    </div>
  </div>
)
