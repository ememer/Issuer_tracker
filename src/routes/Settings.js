import { useEffect, useState } from "react";

import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import { avatarLists } from "../shared/avatarsLists";

import "../sass/components/settings.scss";

const FONT_SIZES = {
  standard: "10px",
  medium: "16px",
  big: "21px",
};

const Settings = () => {
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [fontSize, setFontSize] = useState();

  const findAvatar = (selectedId) => {
    return avatarLists.find((avatar) => avatar.id === selectedId);
  };

  const onSelect = (e) => {
    setSelectedAvatar(+e.target.id);
    setIsAvatarMenuOpen(false);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (fontSize === "2") {
      html.style.fontSize = FONT_SIZES.big;
    } else if (fontSize === "1") {
      html.style.fontSize = FONT_SIZES.medium;
    } else if (fontSize === "0") {
      html.style.fontSize = FONT_SIZES.standard;
    }
  }, [fontSize]);

  return (
    <Layout>
      <h1 className="settings-title">App settings</h1>
      <div className="settings-box">
        <div className="user-avatar">
          <img src={findAvatar(selectedAvatar)?.url} alt="User avatar" />
          <button onClick={() => setIsAvatarMenuOpen(true)}>
            <FontAwesomeIcon
              className="fontAwesome-User"
              icon={faHandPointer}
            />
          </button>
        </div>
        <div className="font-box">
          <input
            type="range"
            min={0}
            max={2}
            name="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
        {isAvatarMenuOpen && (
          <div className="avatar-menu">
            <div className="avatar-grid-box">
              {avatarLists.map((avatar) => (
                <div className="avatar-box" key={avatar.id}>
                  <img
                    onClick={(e) => onSelect(e)}
                    id={avatar.id}
                    src={avatar.url}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <button
              className="close-avatar"
              onClick={() => setIsAvatarMenuOpen(false)}
            >
              Zamknij
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Settings;
