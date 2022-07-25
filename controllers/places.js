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
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  }).catch(err =>{
    console.log('err', err)
    res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  res.send('place holder4')
})

router.get('/:id/edit', (req, res) => {
  res.send('place holder2')
})

router.put('/:id', (req, res) => {
  res.send('place holder1')
})


router.post('/', (req, res) => {
  db.Place.create(req.body).then(() => {
    res.redirect('/places')
  }).catch(err => {
    if(err && err.name == 'ValidationError'){
      let message = 'Validation Error: '
      for(var field in err.errors){
        message+= `${field} was ${err.errors[field].value}.`
        message+= `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', {message})
    }
    else{
      res.render('error404')
    }
    
  })
})


module.exports = router