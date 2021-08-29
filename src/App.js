import "./styles.css";
import React, { useState } from "react";
const emojiDictionary = {
  "🚫🤦": "Don't touch your face",
  "🚫🤧🤲": "Don't sneeze into hands",
  "✅🤧💪": "Do sneeze into your elbow",
  "🧼🖐⏲": " Wash your hands regularly ",
  "🚇😷🛒": "Wearing a mask in public"
};

var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "sorry we dont have the meaning of this emoji in the database";
    }
    // showing on the view
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2>
        <em>
          {" "}
          "In order to minimize the spread of disease, suggested behaviors
          include :"{" "}
        </em>
      </h2>

      <input placeholder="enter emoji here" onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "larger", padding: "0.2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
