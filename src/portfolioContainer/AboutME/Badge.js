import React from 'react'
import './Badge.css'
function BadgeItem(props) {
    return (
        <div className='badgecontents d-flex flex-column align-items-center justify-content-center'>
            <img alt='skills' src={props.Url} className='' />
            <label className='pt-3 pt-sm-2 text-uppercase fw-normal'>{props.skill}</label>
        </div>
    )
}

export default BadgeItem
