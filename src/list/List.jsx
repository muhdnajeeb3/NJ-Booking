import React from 'react'
import Header from '../components/Header'
import Firstsec from '../components/Firstsec'
import './list.css'

function List() {
  return (
    <div>
        <Header />
        <Firstsec type="list"/>
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className='lsTitle'>Search</h1>
              <label htmlFor="">Destination</label>
              <input type="text" />
            </div>
            <div className="listResult">

            </div>
          </div>
        </div>
    </div>
  )
}

export default List