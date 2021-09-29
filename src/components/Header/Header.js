import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="header">
      <div className="header__Right">
        <HeaderRight Icon={HomeIcon} title="Home" />
        <HeaderRight Icon={MessageIcon} title="Message" />
        <HeaderRight Icon={SupervisorAccountIcon} title="Account" />
        <HeaderRight Icon={NotificationsIcon} title="Notifications" />
      </div>
      <div className="header__left">
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
        {/* <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ecd51263-bb0f-4465-af86-f7ed25e58e70/def0wny-79ada906-a92a-4b09-840d-7bc292693c12.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjZDUxMjYzLWJiMGYtNDQ2NS1hZjg2LWY3ZWQyNWU1OGU3MFwvZGVmMHdueS03OWFkYTkwNi1hOTJhLTRiMDktODQwZC03YmMyOTI2OTNjMTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WKNRuB1ZUKYmu3OoscoZ1SU7lF0kFw_0rf__12U_RDU"
          className="header__img"
        /> */}
        <h1 className="header__title">F.R.I.E.N.D.S</h1>
      </div>
    </div>
  );
};
export default Header;
