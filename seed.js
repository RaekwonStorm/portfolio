'use strict';
const chalk = require('chalk');
const db = require('./server/db/db');
require('./server/db/models');
const Picture = db.model('picture');
const _ = require('lodash');
const Promise = require('bluebird');

let pics = [
{
  description: "Black Dragon Pool, with Jade Dragon Snow Mountain in the background",
  chinese: "黑龍潭, 背景就是玉龍雪山",
  location: "Lijiang，Yunnan；雲南麗江",
  imgUrl: "/pictures/IMG_4251.JPG"
},
{
  description: "Terraced farms, Naxi minority mountain village in Tiger Leaping Gorge",
  chinese: "梯田農場在虎跳峽的納西族山村",
  location: "Tiger Leaping Gorge，Yunnan；雲南虎跳峽",
  imgUrl: "/pictures/IMG_4289.JPG"
},
{
  description: "Mount Cook，South Island NZ",
  chinese: "Cook山，，紐西蘭南島",
  location: "Mount Cook，South Island NZ；Cook山，，紐西蘭南島",
  imgUrl: "/pictures/IMG_1043.JPG"
},
{
  description: "Waipio Valley, Big Island HI",
  chinese: "Waipio谷，夏威夷大島",
  location: "",
  imgUrl: "/pictures/IMG_0401.JPG"
},
{
  description: "Mauna Kea Observatory, Big Island HI",
  chinese: "Mauna Kea天文台，夏威夷大島",
  location: "",
  imgUrl: "/pictures/IMG_0547.JPG"
},
{
  description: "Unnamed Black Sand Beach, Big Island HI",
  chinese: "無名黑沙灘，夏威夷大島",
  location: "",
  imgUrl: "/pictures/IMG_0602.JPG"
}
]

db.sync({force: true})
.then(() => {
  return pics.map(pic => {
    return Picture.create(pic);
  })
})
.then((picsArr) => {
  return Promise.all(picsArr);
})
.then(() => {
  console.log('Db seeded successfully');
  process.exit();
})
.catch(console.error)
.finally(() => {
  process.exit();
});

