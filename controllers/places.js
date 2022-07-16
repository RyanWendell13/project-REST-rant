const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) =>{
    db.Place.find().then((places) => {
      res.render('places/index', {places})
    }).catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.get('/new', (req,res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.send('place hodl4')
})

router.delete('/:id', (req, res) => {
  res.send('place hodl3')
})

router.get('/:id/edit', (req, res) => {
  res.send('place hodl2')
})

router.put('/:id', (req, res) => {
  res.send('place hodl1')
})


router.post('/', (req, res) => {
  db.Place.create(req.body).then(() => {
    res.redirect('/places')
  }).catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})


module.exports = router