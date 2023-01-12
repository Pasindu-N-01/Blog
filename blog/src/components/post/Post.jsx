import React from 'react'
import "./Post.css"
import musicLife from '../../Images/m2.jpg'

export default function () {
  return (
    <div className='post'>

        <img className='postImg' src={musicLife} alt="" />

        <div className="postInfor">
          <div className="postCategory">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className="postTitle">
          Without music Life would be a mistake.
          </span>

          <hr />

          <span className="postDate">1 hour ago</span>

        </div>

        <p className='postDes'>Lorem ipsum, dolor sit amet 
          consectetur adipisicing elit. Dolorem repellat architecto 
          doloremque illum tempore impedit eius doloribus debitis alias 
          error, harum fuga illo, recusandae, assumenda molestiae 
          voluptatum quia in nostrum?consectetur adipisicing elit. Dolorem repellat architecto 
          doloremque illum tempore impedit eius doloribus debitis alias 
          error, harum fuga illo, recusandae, assumenda molestiae 
          voluptatum quia in nostrum?consectetur adipisicing elit. Dolorem repellat architecto 
          doloremque illum tempore impedit eius doloribus debitis alias 
          error, harum fuga illo, recusandae, assumenda molestiae 
          voluptatum quia in nostrum?consectetur adipisicing elit. Dolorem repellat architecto 
          doloremque illum tempore impedit eius doloribus debitis alias 
          error, harum fuga illo, recusandae, assumenda molestiae 
          voluptatum quia in nostrum?consectetur adipisicing elit. Dolorem repellat architecto 
          doloremque illum tempore impedit eius doloribus debitis alias 
          error, harum fuga illo, recusandae, assumenda molestiae 
          voluptatum quia in nostrum?</p>

    </div>
  )
}
