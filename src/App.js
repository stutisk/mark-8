import "./styles.css";
import React, { useState } from "react";
const emojiDictionary = {
  "🚫🤦": "Don't touch your face",
  "🚫🤧🤲": "Don't sneeze into hands",
  "✅🤧💪": "Do sneeze into your elbow",
  "🧼🖐⏲": " Wash your hands regularly ",
  "🚇😷🛒": "Wearing a mask in public"
};
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry we dont have the meaning of this emoji in the database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2>
        In order to minimize the spread of disease, suggested behaviors include
      </h2>

      <input onChange={emojiInputHandler} />
      <h3>{meaning}</h3>
    </div>
  );
}
