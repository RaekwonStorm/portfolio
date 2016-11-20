'use strict';
import React from 'react';

const cryptopass = {
  name: 'CryptoPass',
  description: 'Tested and developed a suite of mobile, desktop, and browser tools to manage passwords, credit cards, and other sensitive data using AES encryption for data security.',
  tech: 'Developed in JavaScript with Express, Angular, Node, Ionic/Cordova, Electron.',
  github: 'https://github.com/RaekwonStorm/cryptopass',
  desc_chinese: '發展了一套軟件，包括異動，電腦，和瀏覽器擴展等APP在內；這套軟件用了AES加密幫用戶管理密碼，信用卡等保密資源.',
  tech_chinese: '用的科技：JavaScript, Express, Angular, Node, Ionic/Cordova, Electron.',
  date: 'August 2016'
}

export default ({language}) => (
  <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 project-description">
      <h1><a href={cryptopass.github}>{cryptopass.name}<span className="project-btn btn btn-social-icon btn-github"><span className='fa fa-github social-icons'/></span></a></h1>
      <h5>{language === 'English' ? cryptopass.description : cryptopass.desc_chinese}</h5>
      <h5>{language === 'English' ? cryptopass.tech : cryptopass.tech_chinese}</h5>
      <h5>{language === 'English' ? `Download CryptoPass at www.cryptopassapp.com for free.` :  `免費下載CryptoPass：www.cryptopassapp.com`}</h5>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <iframe width="560" height="315" id="cryptopass-iframe" src="https://www.youtube.com/embed/pyPG_kuOyAA" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
)
