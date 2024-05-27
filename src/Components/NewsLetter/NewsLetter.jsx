import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR MAIL</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Mail id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter