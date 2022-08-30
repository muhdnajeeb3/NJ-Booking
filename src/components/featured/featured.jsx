import React from 'react'
import './Featured.css'

function featured() {
  return (
    <div className="featured">
      <div className="featureditem">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="featuredimg" />
        <div className="featuredtitles">
          <h1>Deli</h1>
          <h2>555</h2>
        </div>
      </div>
      <div className="featureditem">
        <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" alt="" className="featuredimg" />
        <div className="featuredtitles">
          <h1>Reno</h1>
          <h2>445</h2>
        </div>
      </div>
      <div className="featureditem">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" alt="" className="featuredimg" />
        <div className="featuredtitles">
          <h1>Austin</h1>
          <h2>355</h2>
        </div>
      </div>
    </div>
  )
}

export default featured