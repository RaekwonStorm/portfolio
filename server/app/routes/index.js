'use strict'

const router = require('express').Router();
const Picture = require('../../db/models/pictures.model');
module.exports = router;

// router.use('/whatevs', require('./whatevs'));

router.get('/', (req, res, next) => {
  Picture.findAll()
    .then(pictures => res.json(pictures))
    .catch(next);
})

router.use(function(req, res) {
  res.status(404).end();
});
