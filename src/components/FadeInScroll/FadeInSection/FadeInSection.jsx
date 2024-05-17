// FadeInSection.js
import React, { useRef, useState } from "react";
import useIntersectionObserver from "./../IntersectionObserver/IntersectionObserver";
import "./../../../App.scss";
const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useIntersectionObserver(ref, () => setIsVisible(true), {
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "appear" : ""}`}>
      {children}
    </div>
  );
};

import PropTypes from "prop-types";

FadeInSection.propTypes = {
  children: PropTypes.node,
};
export default FadeInSection;
