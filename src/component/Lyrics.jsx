import { useState } from "react";
import axios from "axios";

export default function Lyrics() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [showLyrics, setShowLyrics] = useState("");

  function handleClick() {
    fetchData(artist, title);
  }

  const fetchData = async (a, b) => {
    try {
      const lyricsResponse = await axios.get(
        `https://api.lyrics.ovh/v1/${a}/${b}`
      );
      setShowLyrics(lyricsResponse.data.lyrics);

      await axios.post("http://127.0.0.1:8000/api/storelyrics", {
        title: a,
        lyrics: b,
      });
    } catch (error) {
      throw error;
    }
  };

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
