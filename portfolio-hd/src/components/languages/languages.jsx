import React from "react";
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

// const svgs = {
//   CssSVG,
//   HtmlSVG,
//   JavascriptSVG,
//   reactSVG,
//   reduxSVG,
//   nextJSSVG,
//   tailwindSVG,
//   mongoDBSVG,
//   wordpressSVG,
//   phpSVG,
//   BootstrapSVG,
//   JquerySVG,
// };

const svgs = {
  CssSVG: { svg: CssSVG, text: "CSS" },
  HtmlSVG: { svg: HtmlSVG, text: "HTML" },
  JavascriptSVG: { svg: JavascriptSVG, text: "JavaScript" },
  reactSVG: { svg: reactSVG, text: "React" },
  reduxSVG: { svg: reduxSVG, text: "Redux" },
  nextJSSVG: { svg: nextJSSVG, text: "Next.js" },
  tailwindSVG: { svg: tailwindSVG, text: "Tailwind" },
  mongoDBSVG: { svg: mongoDBSVG, text: "MongoDB" },
  pythonSVG: { svg: pythonSVG, text: "Python" },
  wordpressSVG: { svg: wordpressSVG, text: "WordPress" },
  phpSVG: { svg: phpSVG, text: "PHP" },
  BootstrapSVG: { svg: BootstrapSVG, text: "Bootstrap" },
  JquerySVG: { svg: JquerySVG, text: "jQuery" },
};

export default function Languages() {
  return (
    <div className="Aboutme__lang">
      <h3 className="Aboutme__lang__title">
        {"Tech que j'ai pu utiliser dans des projets web"}
      </h3>
      <div className="Aboutme__lang__list">
        {Object.entries(svgs).map(([name, { svg: SvgSrc, text }], i) => (
          <img
            className="Aboutme__lang__list__elem"
            key={i}
            src={SvgSrc}
            alt={name}
            title={text}
          />
        ))}
      </div>
    </div>
  );
}

// export default function Languages() {
//   return (
//     <div className="Aboutme__lang">
//       <h3 className="Aboutme__lang__title">
//         {"Les différentes technologies web que j'ai pu utiliser"}
//       </h3>
//       <div className="Aboutme__lang__list">
//         {Object.entries(svgs).map(([name, SvgSrc], i) => (
//           <img
//             key={i}
//             className="Aboutme__lang__list__elem"
//             src={SvgSrc}
//             alt={name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
