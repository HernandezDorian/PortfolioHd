import React from "react";
import MsgSVG from "../../assets/Message_and_nofitications.svg";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__contact"></div>
      <img src={MsgSVG} className="Footer__SVG"></img>
    </footer>
  );
}
