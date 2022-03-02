import React from "react";
import trollFaceLogo from "../images/troll-face.svg";

export default function Header() {
  return (
    <header>
      <img src={trollFaceLogo} alt="rollFaceLogo" className="header--logo" />
      <h3 className="header--title">Meme Generator</h3>
    </header>
  );
}
