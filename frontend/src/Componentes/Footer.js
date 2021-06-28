import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

function Footer() {
  return (
    <div className="footerIcons">
      <HomeIcon fontSize="large" />
      <TurnedInNotIcon fontSize="large" />
      <CalendarTodayIcon fontSize="large" />
      <StarIcon fontSize="large" />
      <AccountBoxIcon fontSize="large" />
    </div>
  );
}

export default Footer;
