import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import UserNav from "../../shared/user-nav/UserNav";

import ProfilePic from "../../../assets/images/img-1.jpg";

import "./Profile.scss";

const Profile = () => {
  return (
    <div>
      <UserNav />
      <div class="container profile">
        {/*Section 1*/}
        <header className="profile__header">
          <div className="profile__header--first">
            <img src={ProfilePic} className="profile__header--first__image" />
            <div className="profile__header--first__user">
              <h2 className="profile__header--first__user--name">John Doe</h2>
              <div className="profile__header--first__user--location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Uttar Pradesh, India - 12:00am local time</span>
              </div>
            </div>
          </div>
          <div className="profile__header--second">
            <button className="profile__header--second__public-view">
              See Public View
            </button>
            <button className="profile__header--second__profile-settings">
              Profile Settings
            </button>
          </div>
        </header>
        {/*End of Section 1*/}
      </div>
    </div>
  );
};

export default Profile;
