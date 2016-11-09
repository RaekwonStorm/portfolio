'use strict';
import React from 'react';

let cryptopass = {
  name: 'CryptoPass',
  description: 'Tested and developed a suite of mobile, desktop, and browser tools to manage passwords, credit cards, and other sensitive data using AES encryption for data security',
  tech: 'Developed in JavaScript with Express.js, Angular, Node.js, Ionic/Cordova, Electron',
  github: 'https://github.com/RaekwonStorm/cryptopass',
  desc_chinese: '發展了一套軟件，包括異動，電腦，和瀏覽器擴展等APP在內；這套軟件用了AES加密幫用戶管理密碼，信用卡等保密資源',
  tech_chinese: '用的科技：JavaScript, Express.js, Angular, Node.js, Ionic/Cordova, Electron',
  date: 'August 2016'
}

export default ({language}) => (
  <div>
    <h1><a href={cryptopass.github}><img src='github.ico'/></a>{cryptopass.name}</h1>
    <ul>
      <li>{language === 'English' ? cryptopass.description : cryptopass.desc_chinese}</li>
      <li>{language === 'English' ? cryptopass.tech : cryptopass.tech_chinese}</li>
    </ul>

    <h3>CryptoPass Presentation</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/pyPG_kuOyAA" frameborder="0" allowfullscreen></iframe>
    <h5>CryptoPass is a suite of secure applications which encrypts passwords and other sensitive data with your master password and stores them on your machine. CryptoPass also generates strong random passwords for new subscriptions. All you need is one master password to manage all of your secure passwords. The main application is a desktop application; furthermore, we also developed a chrome browser extension and mobile application.

The desktop application is built on Electron, utilizing NodeJS, AngularJS, and Photon. The mobile application is built on the Ionic Framework, which utilizes Dropbox OAUTH to store your encrypted data, and an option for touchId to store a recovery file in case you forget your password. The chrome extension communicates with the desktop application through a secure localhost socket.io server, ensuring information is kept up to date in your browser.

Download CryptoPass at www.cryptopassapp.com for free.</h5>
  </div>
)
