import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p ClassName='explore-menu-text'>Chose from Diverse menu featuring a delectable array </p>
      
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div className='explore-menu-list-item' key={index}>
                    <img src={item.menu_image}/>
                <p>{item.menu_name}</p>
                    </div>
            )
        })}

        </div>
    </div>
  )
}

export default ExploreMenu
