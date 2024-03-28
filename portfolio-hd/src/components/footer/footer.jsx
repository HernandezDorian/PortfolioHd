import React from "react";
import MsgSVG from "../../assets/Message_and_nofitications.svg";
import PageContainer from "../page-container/page-container";

export default function Footer() {
  return (
    <footer className="ft">
      <PageContainer>
        <div className="Footer">
          <h2 className="Footer__title">ME CONTACTER</h2>
          <div className="Footer--container">
            <div className="Footer__contact">
              <form className="Footer__contact__form">
                <input
                  className="Footer__contact__form__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                />
                <input
                  className="Footer__contact__form__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email"
                />
                <textarea
                  className="Footer__contact__form__input"
                  id="message"
                  name="message"
                  placeholder="Votre message"
                ></textarea>
                <button type="submit" className="button">
                  Envoyer
                </button>
              </form>
            </div>
            <img src={MsgSVG} className="Footer__SVG"></img>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
