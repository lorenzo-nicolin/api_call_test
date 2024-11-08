import { useState } from "react";
import axios from "axios";

export default function Lyrics() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [showLyrics, setShowLyrics] = useState("");

  function handleClick() {
    fetchData(artist, title);
  }

  function fetchData(a, b) {
    console.log(a + " " + b);

    // fetch data from api

    axios.get(`https://api.lyrics.ovh/v1/${a}/${b}`).then((res) => {
      console.log(res.data.lyrics);
      setShowLyrics(res.data.lyrics);
    });
  }

  return (
    <div>
      <div className="formcontrol">
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleClick}>Submit</button>
      </div>

      {showLyrics && (
        <div className="lyrics-container">
          <h2>Lyrics:</h2>
          <pre>{showLyrics}</pre>
        </div>
      )}
    </div>
  );
}
