import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/logo.png'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const index = ({ userPhoto }) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive" />
                <span>CBIT Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search in Drive' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <img src={userPhoto} alt="User Photo"/>
            </div>
        </div>
    )
}

export default index