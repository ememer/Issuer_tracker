import { useContext, useEffect, useState } from "react";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AvatarImage from "../components/AvatarImage";
import AvatarPopup from "../components/AvatarPopup";
import Headline from "../components/Headline";
import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";
import { displayAvatar } from "../shared/utils/displayAvatar";

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
  const [userNameInput, setUserNameInput] = useState(userName);

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

  const setNameOfUser = (e) => {
    e.preventDefault();
    setUserName(userNameInput);
    setUserNameInput("");
  };

  return (
    <Layout>
      {avatarMenu && <AvatarPopup onClose={() => setAvatarMenu(false)} />}
      <div className="row">
        <div className="col-lg-6">
          <Headline
            level={2}
            headlineBG={true}
            title="Sekcja użytkownika"
            className="headline-size"
          />
          <div className="row avatar-section">
            <div className="col-2 avatar-group">
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
            <div className="col-3 user-box">
              <form onSubmit={(e) => setNameOfUser(e)}>
                <label>
                  Twoja nazwa <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Wpisz swoją nazwę!"
                  value={userNameInput}
                  onChange={(e) => setUserNameInput(e.target.value)}
                />
              </form>
              {userNameInput !== "" && userNameInput.length >= 3 && (
                <div className="form-button">
                  <button onClick={(e) => setNameOfUser(e)}>Ustaw</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <Headline
            level={2}
            headlineBG={true}
            title="Wielkość interface'u"
            className="headline-size"
          />
          <div className="col-12">
            <div className="row sizes">
              <button
                onClick={() => {
                  if (uiSize > 1) {
                    setUiSize((prevState) => --prevState);
                  }
                }}
                className="col-3"
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
                className="col-4"
              />
              <button
                onClick={() => {
                  if (uiSize < 3) {
                    setUiSize((prevState) => ++prevState);
                  }
                }}
                className="col-3"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
