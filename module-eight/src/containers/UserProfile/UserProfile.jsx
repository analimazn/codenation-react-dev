import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  console.log(avatar, name, username)
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              {avatar
                ? <img src={avatar} alt={name}/>
                : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt=""/>}
            </div>

            <div className="user__name">
              <p>
                {name}
                <span>@{username}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
