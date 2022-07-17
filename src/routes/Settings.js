import { useContext } from "react";

import Layout from "../components/Layout";
import { UserContext } from "../context/UserContext";

// const FONT_SIZES = {
//   standard: "10px",
//   medium: "12px",
//   big: "1px",
// };
import image from "../Assets/avatar.jpg";

import "../sass/components/settings.scss";

const Settings = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <Layout>
      <div className="grid-row user">
        <div className="grid-col-3 ">
          <img src={image} alt="avatar" className="avatar" />
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
    </Layout>
  );
};

export default Settings;
