import { useContext, useEffect, useState } from "react";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AvatarImage from "../components/AvatarImage";
import AvatarPopup from "../components/AvatarPopup";
import Headline from "../components/Headline";
import Layout from "../components/Layout";
import { PersonsContext } from "../context/PersonsContext";
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
  const { personsArray, setPersonsArray } = useContext(PersonsContext);
  const [person, setPerson] = useState("");
  const [uiSize, setUiSize] = useState(1);
  const [avatarMenu, setAvatarMenu] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [userNameInput, setUserNameInput] = useState(userName);
  const [personError, setPersonError] = useState(false);

  const filteredPersons = personsArray.filter((person) => person !== "Wybierz");

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

  const onPersonsUpdate = (e) => {
    e.preventDefault();
    if (personsArray.includes(person)) {
      setPerson("");
      setPersonError(true);
      setTimeout(() => {
        setPersonError(false);
      }, 4000);
      return;
    }
    setPersonsArray((prevState) => [prevState[0], ...filteredPersons, person]);
    setPerson("");
  };

  const handleCheckBox = (e) => {
    if (!isChecked.includes(e.target.name)) {
      setIsChecked((prevState) => [...prevState, e.target.name]);
    } else {
      setIsChecked([...isChecked.filter((item) => item !== e.target.name)]);
    }
  };

  const handleRemoveSelected = () => {
    const newArray = personsArray.filter(
      (person) => !isChecked.includes(person)
    );
    setPersonsArray(newArray);
  };

  return (
    <Layout>
      {avatarMenu && <AvatarPopup onClose={() => setAvatarMenu(false)} />}
      <Headline
        level={1}
        headlineBG={false}
        className="col-12 main-headline"
        title={`Witaj ${userName}!`}
      />
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
              {userNameInput !== "Użytkownik" && userNameInput.length >= 3 && (
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
      <Headline
        level={2}
        headlineBG={true}
        title="Osoby odpowiedzialne"
        className="col-12 persons-headline"
      />
      <div className="row">
        <div className="col-12 col-md-6 settings-form">
          <form onSubmit={(e) => onPersonsUpdate(e)}>
            <label>
              Wprowadź osobę odpowiedzialną
              {personError && (
                <div className="warn-msg col-12">
                  Podana osoba już została dodana
                </div>
              )}
              <input
                onChange={(e) => setPerson(e.target.value)}
                value={person}
                type="text"
              />
            </label>

            <button disabled={!person}>Dodaj</button>
          </form>
        </div>
        <div className="col-12 col-md-6 persons">
          <div className="persons-buttons">
            <button className="col-5" onClick={() => handleRemoveSelected()}>
              Usuń zaznaczone
            </button>
            <button
              className="col-5"
              onClick={() => setPersonsArray(["Wybierz"])}
            >
              Usuń wszystkie
            </button>
          </div>
          <ul>
            {filteredPersons.map((person, index) => (
              <li key={`${person}${index}`}>
                <input
                  name={person}
                  checked={isChecked.includes(person)}
                  onChange={(e) => handleCheckBox(e)}
                  id={index + 1}
                  type="checkbox"
                />
                {person}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
