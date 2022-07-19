import { useContext } from "react";

import { UserContext } from "../context/UserContext";

import AvatarImage from "./AvatarImage";

import "../sass/components/avatarMenu.scss";

const AvatarPopup = ({ onClose }) => {
  const { avatarLists, setAvatar } = useContext(UserContext);
  const avatars = avatarLists;
  return (
    <div
      id="avatar-popup"
      onClick={(e) => {
        if (e.target.id === "avatar-popup") {
          onClose();
        }
      }}
      className="avatar-container"
    >
      <div className="avatar-popup grid-row">
        <div className="grid-row">
          <div className="grid-col-12">
            <div className="grid-row avatars-grid">
              {avatars.map((avatar) => (
                <button
                  onClick={(e) => {
                    setAvatar(+e.target.id);
                  }}
                  key={avatar.id}
                  className="grid-col-3"
                  id={avatar.id}
                >
                  <AvatarImage
                    id={avatar.id}
                    photoAlt="User-Avatar"
                    className="avatar-choose"
                    src={avatar.url}
                    style={avatar.border}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarPopup;
