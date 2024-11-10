import React from 'react';
import './styles.css';
import logo from '../assets/images/00_1JustYe.png';

export default function Menu() {
  return (
    <div className="menu-9 clip-contents">
      <div className="group-247">
        <div className="hero">
          <div className="header-1">
            <div className="top-bar clip-contents">
              <div className="info">
                <div className="call">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4drl7jgycsh-10%3A2260?alt=media&token=11be1466-0b7c-4eee-8b06-73e34cf8d723"
                    alt="Not Found"
                    className="icon-outline-phone"
                  />
                  <p className="_-4148570107">(82+)10 - 8267 - 6879</p>
                </div>
                <div className="mail">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4drl7jgycsh-10%3A2263?alt=media&token=14fe5008-d068-4fd7-b042-fa894b02a099"
                    alt="Not Found"
                    className="icon-outline-mail"
                  />
                  <p className="yummy-bistrobliss">yes.house114@gmail.com</p>
                </div>
              </div>
              {/* <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4drl7jgycsh-10%3A2235?alt=media&token=4fc6fee8-050c-4c0b-a23a-a6858dc9d6d8"
                alt="Not Found"
                className="social"
              /> */}
            </div>
            <div className="header">
              <div className="logo">
                <img src={logo} alt="logo" className="japanese-food" />
              </div>
              <div className="menu-6">
                <div className="menu-3">
                  <p className="about">About</p>
                </div>
                <div className="menu-4">
                  <p className="pages">Menu</p>
                </div>
                <div className="menu-5">
                  <p className="contact">Contact</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="title-1">
              <div className="title">
                <p className="our-menu">Ye&apos;s house</p>
                <p className="we-consider-all-the-driv">
                  is a cafe catering where you can share happiness by sharing
                  healthy food.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="content-2">
            <div className="bottom">
              <p className="in-the-new-era-of-technol">
                The official website is being prepared.
                {/* In the new era of technology we look a in the future with
                  certainty and pride to for our company and. */}
              </p>

              <p className="copyright-2023-hashtag">
                More updates are coming soon - stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
