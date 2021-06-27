import React from 'react'
import { HomeFilled } from '@ant-design/icons';
import { CalendarFilled } from '@ant-design/icons';
import { StarFilled } from '@ant-design/icons';
import { TrophyFilled } from '@ant-design/icons';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';

function Footer() {
    return (
        <div className="footerIcons">
            <HomeIcon fontSize= "large" />
            <TurnedInNotIcon  fontSize= "large"/>
            <CalendarTodayIcon fontSize= "large"/>
            <StarIcon  fontSize= "large"/>
            <AccountBoxIcon fontSize= "large"/>
        </div>
    )
}

export default Footer;
