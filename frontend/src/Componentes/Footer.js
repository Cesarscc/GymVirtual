import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footerIcons">
      <Link to="/dashboard">
        <HomeIcon fontSize="large" />
      </Link>
      <TurnedInNotIcon fontSize="large" />
      <Link to="/historial">
        <CalendarTodayIcon fontSize="large" />
      </Link>
      <Link to="/ranking">
        <StarIcon fontSize="large" />
      </Link>
      <Link to="/perfil">
        <AccountBoxIcon fontSize="large" />
      </Link>
    </div>
  );
}

export default Footer;
