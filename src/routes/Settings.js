import { useContext, useEffect, useState } from "react";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AvatarImage from "../components/AvatarImage";
import AvatarPopup from "../components/AvatarPopup";
import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";
import { displayAvatar } from "../shared/utlis/displayAvatar";

import "../sass/components/settings.scss";

const FONT_SIZES = {
  standard: "10px",
  medium: "12px",
  big: "14px",
};

const Settings = () => {
  const { userName, setUserName, avatar, avatarLists } =
    useContext(UserContext);
  const [uiSize, setUiSize] = useState(1);
  const [avatarMenu, setAvatarMenu] = useState(true);

  useEffect(() => {
    const HTMLElement = document.querySelector("html");
    if (uiSize === 3) {
      HTMLElement.style.fontSize = FONT_SIZES.big;
    } else if (uiSize === 2) {
      HTMLElement.style.fontSize = FONT_SIZES.medium;
    } else if (uiSize === 1) {
      HTMLElement.style.fontSize = FONT_SIZES.standard;
    }
  }, [uiSize]);

  console.log();

  return (
    <Layout>
      {avatarMenu && <AvatarPopup onClose={() => setAvatarMenu(false)} />}
      <div className="grid-row user">
        <div className="grid-col-3 avatar-section">
          <div className="avatar-group">
            <AvatarImage
              photoAlt="User Photo"
              src={displayAvatar(avatar, avatarLists).url}
              style={displayAvatar(avatar, avatarLists).border}
              className="avatar"
            />
            <button
              onClick={() => setAvatarMenu(true)}
              className="avatar-setting"
              style={{
                background: `${displayAvatar(avatar, avatarLists).border}`,
              }}
            >
              <FontAwesomeIcon icon={faGear} />
            </button>
          </div>
        </div>
        <div className="grid-col-9 user-area">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Twoja nazwa <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Wpisz swoją nazwę!"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {userName !== "" && userName.length >= 3 && (
              <div className="grid-row">
                <div className="grid-col-12 form-button">
                  <button onClick={(e) => e.preventDefault()}>Ustaw</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="grid-row facilitation">
        <div className="grid-col-4">
          <div className="grid-row sizes">
            <button
              onClick={() => {
                if (uiSize > 1) {
                  setUiSize((prevState) => --prevState);
                }
              }}
              className="grid-col-2"
            >
              -A
            </button>
            <input
              type="range"
              step={1}
              min={1}
              max={3}
              value={uiSize}
              onChange={(e) => setUiSize(+e.target.value)}
              className="grid-col-8"
            />
            <button
              onClick={() => {
                if (uiSize < 3) {
                  setUiSize((prevState) => ++prevState);
                }
              }}
              className="grid-col-2"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
