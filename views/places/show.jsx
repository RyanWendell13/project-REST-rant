const React = require('react')
const Def = require('../default')

function show (data) {
  let comments =(
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )

  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )

  if(data.place.comments.length){
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    
    comments = data.place.comments.map(c => {
      return(
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>

        </div>
      )
    })


    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = sumRatings / data.place.comments.length
      
      let stars =''
      for(let i = 0; i < averageRating; i++){
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
    }
    

    console.log(`/places/${data.place.id}/comment`)
  }
    return (
        <Def>
          <main>
            <div className='flexbox'>
              
              <div className='image'>
                <img src= {data.place.pic} alt= {data.place.name} />
                <h3>Locate in {data.place.city}, {data.place.state}</h3>
              </div>

              <div className='description'>
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                <p>{rating}</p>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4> Serving {data.place.cuisines}</h4>
              <div className='buttons'>
                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                  Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
              </div>
            </div>

            <div className='comments'>
                <h2>Comments</h2>
                {comments}
              </div>
            </div>

            <form method='POST' action={`/places/${data.place.id}/comment`}>
             <label htmlFor='author'>Author Name</label>
             <input className='form-control' id='author' name='author'/>


             <label htmlFor='rant'>Rant</label>
              <input  type="checkbox" id='rant' name='rant' />
               
              <label htmlFor='rating'>Rating</label>
              <input  type="range" max="5" min="1" id='stars' name='stars' step=".5" />
                 


              <label htmlFor='content'>Comment</label>
              <textarea  id='content' name='content' className='form-control'/>
                

              <input className ='btn btn-primary'type='submit' value='Add Comment'/>
                
            </form>
            
          </main>
        </Def>
    )
}

module.exports = show
