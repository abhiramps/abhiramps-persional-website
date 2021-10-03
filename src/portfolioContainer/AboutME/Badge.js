import React from 'react'
import './Badge.css'
function BadgeItem(props) {
    return (
        <div className='badge col-2'>
            <div className='badgecontents'>
                <img alt='skills' src={props.Url}></img>
                <h5>{props.skill}</h5>
            </div> 
        </div>
    )
}
 
export default BadgeItem
