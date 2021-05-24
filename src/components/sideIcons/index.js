import React from 'react'
import '../../styles/SideIcons.css'
import AddIcon from '@material-ui/icons/Add';
import cp from '../../media/cp.png'
import cn1 from '../../media/cn1.png'
import cl from '../../media/cl.png'
import sq from '../../media/sq.png'

const index = () => {
    return (
        <div className='sideIcons'>
            <div className="sideIcons__top">
                <a href='http://cbitcarpool.me' target='_blank' download>
                <img src={cp} alt="CBIT Carpool" />
                <p>CBIT Carpool</p>
                </a>
                <a href='https://covid-tracker-b71c7.web.app/' target='_blank' download>
                <img src={cn1} alt="Covid Tracker" />
                <p>Covid Tracker</p>
                </a>
                <a href='http://cbitclubhub.great-site.net/' target='_blank' download >
                <img src={cl} alt="CBIT Club hub" />
                <p>CBIT ClubHub</p>
                </a>
                <a href='cbitstudentservice.herokuapp.com' target='_blank' download >
                <img src={sq} alt="Student Service" />
                <p>CBIT Student Service</p>
                </a>
                
                
                
            </div>

            <hr />

            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default index
