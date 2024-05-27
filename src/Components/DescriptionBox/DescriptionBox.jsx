import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Review</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet.
                It serves as a virtual marketplace where business and indivisuals can showchase their product, interact with customers,
                and conduct transcation without a need of a physical interaction.
            </p>
            <p>
                E-commerce websites typically displays products or services along with detailed description, images, 
                prices and any available variations(eg sizes, colors) . 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox