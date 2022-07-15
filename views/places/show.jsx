const React = require('react')
const Def = require('../default')

function show (data) {
  console.log(data.id)
    return (
        <Def>
          <main>
            <div className='flexbox'>
              <div className='buttons'>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                  Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
              </div>
              <div className='image'>
                <img src= {data.place.pic} alt= {data.place.name} />
              </div>

              <div className='description'>
              <h1>{data.place.name}</h1>
              <h2>Rating</h2>
              <p>Not Rated</p>
              <h2>Description</h2>
              <p>Locate in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
              </div>

              <div className='comments'>
                <h2>Comments</h2>
                <p>No comments yet!</p>
              </div>
            </div>
            
          </main>
        </Def>
    )
}

module.exports = show
