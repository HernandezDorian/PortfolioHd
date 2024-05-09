import React, { useEffect, useState } from "react";

const svgs = {
  html: { classId: "devicon-html5-plain-wordmark colored", text: "HTML 5" },
  css: { classId: "devicon-css3-plain-wordmark colored", text: "CSS 3" },
  JS: { classId: "devicon-javascript-plain colored", text: "Javascript" },
  react: { classId: "devicon-react-original-wordmark colored", text: "React" },
  redux: { classId: "devicon-redux-original colored", text: "Redux" },
  next: { classId: "devicon-nextjs-plain colored", text: "NextJs" },

  tailwind: {
    classId: "devicon-tailwindcss-original colored",
    text: "Tailwind CSS",
  },
  mongodb: {
    classId: "devicon-mongodb-plain-wordmark colored",
    text: "MongoDB",
  },
  python: {
    classId: "devicon-python-plain-wordmark colored",
    text: "Python",
  },
  wordpress: {
    classId: "devicon-wordpress-plain-wordmark colored",
    text: "Wordpress",
  },
  php: {
    classId: "devicon-php-plain colored",
    text: "PHP",
  },
  angular: {
    classId: "devicon-angular-plain colored",
    text: "Angular",
  },
  bootstrapSVG: {
    classId: "devicon-bootstrap-plain-wordmark colored",
    text: "Bootstrap",
  },
  jquery: {
    classId: "devicon-jquery-plain-wordmark colored",
    text: "Jquery",
  },
  json: {
    classId: "devicon-json-plain colored",
    text: "JSON",
  },
};

export default function Languages() {
  return (
    <div className="Aboutme__lang">
      <h2 className="Aboutme__lang__title">{"Compétences"}</h2>
      <div className="Aboutme__lang__list">
        {Object.entries(svgs).map(([name, { classId, text }], i) => (
          <i
            className={`Aboutme__lang__list__elem Aboutme__lang__list__elem_${name} ${classId}`}
            key={i}
            title={text}
          ></i>
        ))}
      </div>
      {/* <button className="Aboutme__lang__btn button" onClick={specialitybtn}>
        Mes spécialités
      </button> */}
    </div>
  );
}
