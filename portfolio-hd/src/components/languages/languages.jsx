import React, { useEffect, useState } from "react";
import AngularSVG from "../../assets/lang/angular-svgrepo-com.svg";
import BootstrapSVG from "../../assets/lang/bootstrap-fill_svgrepo.com.svg";
import CssSVG from "../../assets/lang/css_svgrepo.com.svg";
import HtmlSVG from "../../assets/lang/html-16_svgrepo.com.svg";
import JavascriptSVG from "../../assets/lang/javascript-16_svgrepo.com.svg";
import JquerySVG from "../../assets/lang/jquery_svgrepo.com.svg";
import mongoDBSVG from "../../assets/lang/mongodb-opened_svgrepo.com.svg";
import nextJSSVG from "../../assets/lang/nextjs_svgrepo.com.svg";
import pythonSVG from "../../assets/lang/python-127-svgrepo-com.svg";
import phpSVG from "../../assets/lang/php01_svgrepo.com.svg";
import reactSVG from "../../assets/lang/react-16_svgrepo.com.svg";
import reduxSVG from "../../assets/lang/redux_svgrepo.com.svg";
import tailwindSVG from "../../assets/lang/tailwind_svgrepo.com.svg";
import wordpressSVG from "../../assets/lang/wordpress-139_svgrepo.com.svg";

const svgs = {
  HtmlSVG: { svg: HtmlSVG, text: "HTML" },
  CssSVG: { svg: CssSVG, text: "CSS" },
  JavascriptSVG: { svg: JavascriptSVG, text: "JavaScript" },
  reactSVG: { svg: reactSVG, text: "React" },
  reduxSVG: { svg: reduxSVG, text: "Redux" },
  nextJSSVG: { svg: nextJSSVG, text: "Next.js" },
  tailwindSVG: { svg: tailwindSVG, text: "Tailwind" },
  mongoDBSVG: { svg: mongoDBSVG, text: "MongoDB" },
  pythonSVG: { svg: pythonSVG, text: "Python" },
  wordpressSVG: { svg: wordpressSVG, text: "WordPress" },
  phpSVG: { svg: phpSVG, text: "PHP" },
  AngularSVG: { svg: AngularSVG, text: "Angular" },
  BootstrapSVG: { svg: BootstrapSVG, text: "Bootstrap" },
  JquerySVG: { svg: JquerySVG, text: "jQuery" },
};

export default function Languages() {
  const [specialityCSS, setSpecialityCSS] = useState(false);

  const specialityList = [
    "CssSVG",
    "JavascriptSVG",
    "reactSVG",
    "reduxSVG",
    "nextJSSVG",
  ];

  const specialitybtn = () => {
    setSpecialityCSS(!specialityCSS);
  };

  useEffect(() => {
    if (specialityCSS) {
      specialityList.forEach((elem) => {
        document.querySelector(
          `.Aboutme__lang__list__${elem}`
        ).style.boxShadow = "0px 0px 5px 2px rgba(255, 255, 255, 0.4)";
      });
    } else if (!specialityCSS) {
      specialityList.forEach((elem) => {
        document.querySelector(
          `.Aboutme__lang__list__${elem}`
        ).style.boxShadow = "none";
      });
    }
    return () => {};
  }, [specialityCSS, specialityList]);

  return (
    <div className="Aboutme__lang">
      <h3 className="Aboutme__lang__title">
        {"Tech que j'ai pu utiliser dans des projets web"}
      </h3>
      <div className="Aboutme__lang__list">
        {Object.entries(svgs).map(([name, { svg: SvgSrc, text }], i) => (
          <img
            className={`Aboutme__lang__list__elem Aboutme__lang__list__${name}`}
            key={i}
            src={SvgSrc}
            alt={name}
            title={text}
          />
        ))}
      </div>
      <button className="Aboutme__lang__btn button" onClick={specialitybtn}>
        Mes spécialités
      </button>
    </div>
  );
}
