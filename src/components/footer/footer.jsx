// import React from "react";
import MsgSVG from "../../assets/Message_and_nofitications.svg";
import PageContainer from "../page-container/page-container";
import Contact from "./conact/contact";

export default function Footer() {
  return (
    <footer className="ft" id="contact">
      <PageContainer>
        <div className="Footer">
          <h2 className="Footer__title">ME CONTACTER</h2>
          <div className="Footer--container">
            <div className="Footer__contact">
              <Contact />
            </div>
            <img src={MsgSVG} className="Footer__SVG"></img>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
