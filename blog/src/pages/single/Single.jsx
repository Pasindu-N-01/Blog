import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlepost/SinglePost'
import './Single.css'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <SideBar/>
    </div>
  )
}
