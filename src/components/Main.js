import React from "react";
import imga from "../images/IMG_20191012_164644.jpg"
export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImg: imga,
  });
  const [allMemes, setAllMemes] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dataMemes) => {
        setAllMemes(dataMemes.data.memes);
      });
  }, []);
  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const memeImage = allMemes[randomNumber].url;
    setMeme((prev) => ({
      topText: "",
      bottomText: "",
      memeImg: memeImage,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <main>
      <input
        type="text"
        placeholder="top text"
        className="form--top__text"
        value={meme.topText}
        name="topText"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="bottom text"
        className="form--bottom__text"
        value={meme.bottomText}
        name="bottomText"
        onChange={handleChange}
      />
      <button className="form--btn" onClick={getMemeImg}>
        Get a new meme image 🖼
      </button>
      <div className="meme">
        <img src={meme.memeImg} alt="meme-img" className="meme-img" />
        <h4 className="top-text">{meme.topText}</h4>
        <h4 className="bottom-text">{meme.bottomText}</h4>
      </div>
    </main>
  );
}
