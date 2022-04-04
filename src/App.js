import React, { useState, useEffect } from "react";
import axios from "axios";
import mailPic from "./assents/mail.png";
import phonePic from "./assents/phone.png";
import mapPic from "./assents/map.png";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axiosFunc();
  }, []);

  const axiosFunc = async () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      const data = res.data.results[0];
      setCards(data);
    setLoading(false);
      console.log(data);
    });
  };

  const handleClick = () => {
    axiosFunc();
  };

  return (
    <div className="App">
      {(!isLoading) && (
        <main>
          <section>
            <nav>
              <span>
                <img src={cards.picture.large} alt="" />
              </span>
              <h2>
                {" "}
                {cards.name.title +
                  " " +
                  cards.name.first +
                  " " +
                  cards.name.last}
              </h2>
            </nav>
            <nav>
              <span>
                <img src={mailPic} alt="" className="logo" />
              </span>{" "}
              <span>{cards.email}</span>
            </nav>
            <nav>
              <span>
                <img src={phonePic} alt="" className="logo" />
              </span>{" "}
              <span>{cards.phone}</span>
            </nav>
            <nav>
              <span>
                <img src={mapPic} alt="" className="logo" />
              </span>
              <span>
                {cards.location.city + " - " + cards.location.country}
              </span>
            </nav>
          </section>
          <section className="section2">
            <nav className="age">Age : {cards.dob.age}</nav>
            <nav className="register">
              Register Date : {cards.registered.date.slice(0, 10)}
            </nav>
          </section>
        </main>
      )}

      <button className="btn-grad" onClick={handleClick}>
        Random User
      </button>
    </div>
  );
}

export default App;
